
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Submission, ActionStatus, Note } from "./types/submission";
import type { Database } from "@/integrations/supabase/types";
import { DashboardStats } from "./components/DashboardStats";
import { SubmissionNotes } from "./components/SubmissionNotes";
import { StatusActions } from "./components/StatusActions";
import { Loader2 } from "lucide-react";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalClients: 0,
    activeQuotes: 0,
    pendingPayments: 0,
    expiringPolicies: 0
  });

  const [notesDraft, setNotesDraft] = useState<{ [key: string]: string }>({});
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});

  const { data: submissions = [], isLoading, error, refetch } = useQuery({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return (data || []) as Submission[];
    }
  });

  const handleStatusChange = async (submissionId: string, field: keyof Pick<ActionStatus, 'contacted' | 'quoted' | 'unreachable'>, checked: CheckedState) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.email) throw new Error("User not authenticated");

      const currentSubmission = submissions.find(s => s.id === submissionId);
      const newActionStatus: ActionStatus = {
        ...(currentSubmission?.action_status || { 
          contacted: false, 
          quoted: false, 
          unreachable: false, 
          notes: '',
          notesLog: [] 
        }),
        [field]: checked === true,
        lastUpdated: new Date().toISOString(),
        updatedBy: user.email,
        notesLog: currentSubmission?.action_status?.notesLog || []
      };

      const { error } = await supabase
        .from('contact_submissions')
        .update({
          action_status: newActionStatus
        } as Database['public']['Tables']['contact_submissions']['Update'])
        .eq('id', submissionId);

      if (error) throw error;
      toast.success(`Status updated successfully`);
      refetch();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const handleNotesChange = async (submissionId: string, notes: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.email) throw new Error("User not authenticated");

      const currentSubmission = submissions.find(s => s.id === submissionId);
      const currentNotes = currentSubmission?.action_status?.notesLog || [];
      
      const newNote: Note = {
        content: notes,
        timestamp: new Date().toISOString(),
        author: user.email
      };

      const newActionStatus: ActionStatus = {
        ...(currentSubmission?.action_status || { 
          contacted: false, 
          quoted: false, 
          unreachable: false, 
          notes: '', 
          notesLog: []
        }),
        notes,
        notesLog: [...currentNotes, newNote],
        lastUpdated: new Date().toISOString(),
        updatedBy: user.email
      };

      const { error } = await supabase
        .from('contact_submissions')
        .update({
          action_status: newActionStatus
        } as Database['public']['Tables']['contact_submissions']['Update'])
        .eq('id', submissionId);

      if (error) throw error;
      
      setNotesDraft(prev => ({ ...prev, [submissionId]: '' }));
      setIsEditing(prev => ({ ...prev, [submissionId]: false }));
      toast.success('Notes saved successfully');
      refetch();
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    }
  };

  const handleNoteDraftChange = (submissionId: string, value: string) => {
    setNotesDraft(prev => ({ ...prev, [submissionId]: value }));
    if (!isEditing[submissionId]) {
      setIsEditing(prev => ({ ...prev, [submissionId]: true }));
    }
  };

  const handleCancelNote = (submissionId: string) => {
    setNotesDraft(prev => ({ ...prev, [submissionId]: '' }));
    setIsEditing(prev => ({ ...prev, [submissionId]: false }));
  };

  useEffect(() => {
    const newStats = {
      totalClients: submissions.length,
      activeQuotes: submissions.filter(s => s.action_status?.quoted).length,
      pendingPayments: 0,
      expiringPolicies: 0
    };
    setStats(newStats);
  }, [submissions]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error loading dashboard data. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Manage your insurance business from one central location.
        </p>
      </motion.div>

      <DashboardStats {...stats} />

      <div className="mt-8">
        <Card className="p-6 border-l-4 border-sky-600">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Recent Contact Form Submissions</h2>
              <p className="text-sm text-gray-500 mt-1">Manage and track recent inquiries</p>
            </div>
            <Button 
              onClick={() => refetch()}
              variant="outline"
              className="hover:bg-sky-50"
            >
              Refresh List
            </Button>
          </div>
          
          <div className="relative overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-sm text-sky-600 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3 w-[200px]">Contact Info</th>
                  <th className="px-4 py-3 w-[150px]">Insurance Type</th>
                  <th className="px-4 py-3 w-[150px]">Submitted</th>
                  <th className="px-4 py-3 w-[800px]">Notes</th>
                  <th className="px-4 py-3 w-[200px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr 
                    key={submission.id} 
                    className="border-b hover:bg-gray-50 transition-colors border-l-2 border-l-transparent hover:border-l-sky-600"
                  >
                    <td className="px-4 py-4">
                      <div className="font-medium">{submission.first_name} {submission.last_name}</div>
                      <div className="text-sm text-gray-500">{submission.email}</div>
                      <div className="text-sm text-gray-500">{submission.phone}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="bg-sky-50 text-sky-700 rounded-full px-3 py-1 text-sm">
                        {submission.insurance_type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {formatDate(submission.created_at)}
                    </td>
                    <td className="px-4 py-4">
                      <SubmissionNotes
                        notes={submission.action_status?.notesLog || []}
                        notesDraft={notesDraft[submission.id] || ''}
                        isEditing={isEditing[submission.id] || false}
                        onNoteDraftChange={(value) => handleNoteDraftChange(submission.id, value)}
                        onSaveNote={() => handleNotesChange(submission.id, notesDraft[submission.id] || '')}
                        onCancelNote={() => handleCancelNote(submission.id)}
                        formatDate={formatDate}
                      />
                    </td>
                    <td className="px-4 py-4">
                      <StatusActions
                        submissionId={submission.id}
                        actionStatus={submission.action_status}
                        onStatusChange={handleStatusChange}
                        formatDate={formatDate}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
