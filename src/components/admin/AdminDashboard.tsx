import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Users, FileText, CreditCard, AlertTriangle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Submission, ActionStatus } from "./types/submission";

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
      const currentSubmission = submissions.find(s => s.id === submissionId);
      const newActionStatus: ActionStatus = {
        ...(currentSubmission?.action_status || { contacted: false, quoted: false, unreachable: false, notes: '' }),
        [field]: checked === true,
        lastUpdated: new Date().toISOString(),
        updatedBy: user?.email || undefined
      };

      const { error } = await supabase
        .from('contact_submissions')
        .update({ action_status: newActionStatus })
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
      const currentSubmission = submissions.find(s => s.id === submissionId);
      const newActionStatus: ActionStatus = {
        ...(currentSubmission?.action_status || { contacted: false, quoted: false, unreachable: false, notes: '' }),
        notes,
        lastUpdated: new Date().toISOString(),
        updatedBy: user?.email || undefined
      };

      const { error } = await supabase
        .from('contact_submissions')
        .update({ action_status: newActionStatus })
        .eq('id', submissionId);

      if (error) throw error;
      toast.success('Notes saved successfully');
      refetch();
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Clients", value: stats.totalClients, icon: Users, color: "text-blue-600" },
          { title: "Active Quotes", value: stats.activeQuotes, icon: FileText, color: "text-green-600" },
          { title: "Pending Payments", value: stats.pendingPayments, icon: CreditCard, color: "text-yellow-600" },
          { title: "Expiring Policies", value: stats.expiringPolicies, icon: AlertTriangle, color: "text-red-600" }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </Card>
          </motion.div>
        ))}
      </div>

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
                  <th className="px-4 py-3">Contact Info</th>
                  <th className="px-4 py-3">Insurance Type</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Notes</th>
                  <th className="px-4 py-3">Actions</th>
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
                      <ScrollArea className="h-[100px] w-[200px] rounded-md border bg-gray-50 p-2">
                        <Textarea
                          placeholder="Add notes..."
                          value={submission.action_status?.notes || ''}
                          onChange={(e) => handleNotesChange(submission.id, e.target.value)}
                          className="min-h-[80px] bg-transparent border-0 focus-visible:ring-0 resize-none p-0"
                        />
                      </ScrollArea>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        {[
                          { id: 'contacted', label: 'Contacted' },
                          { id: 'quoted', label: 'Quoted' },
                          { id: 'unreachable', label: 'Unable to reach' }
                        ].map(({ id, label }) => (
                          <div key={id} className="flex items-center space-x-2 group relative">
                            <Checkbox
                              id={`${id}-${submission.id}`}
                              checked={Boolean(submission.action_status?.[id as keyof ActionStatus])}
                              onCheckedChange={(checked) => 
                                handleStatusChange(submission.id, id as keyof Pick<ActionStatus, 'contacted' | 'quoted' | 'unreachable'>, checked)
                              }
                            />
                            <label
                              htmlFor={`${id}-${submission.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {label}
                            </label>
                            {submission.action_status?.[id as keyof ActionStatus] && (
                              <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
                                Updated on {formatDate(submission.action_status.lastUpdated || '')}
                                {submission.action_status.updatedBy && (
                                  <span className="block">{submission.action_status.updatedBy}</span>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
