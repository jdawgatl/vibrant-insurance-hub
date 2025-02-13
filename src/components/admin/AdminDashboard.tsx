import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import { menuItems } from "./menuItems";
import { useState } from "react";
import { format } from "date-fns";

type ActionStatus = {
  contacted: boolean;
  quoted: boolean;
  unreachable: boolean;
  notes: string;
  lastUpdated?: string;
  updatedBy?: string;
};

type SubmissionBase = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  insurance_type: string | null;
  message: string | null;
  created_at: string;
  consent: boolean;
};

type Submission = SubmissionBase & {
  action_status?: ActionStatus;
};

const fetchSubmissions = async (): Promise<Submission[]> => {
  const { data: { session } } = await supabase.auth.getSession();
    
  if (!session) {
    throw new Error("No authenticated session found");
  }

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  if (!data) return [];

  const submissions = data as unknown as Submission[];

  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  return submissions.filter(submission => {
    const lastActivity = submission.action_status?.lastUpdated 
      ? new Date(submission.action_status.lastUpdated)
      : new Date(submission.created_at);
    return lastActivity > fiveDaysAgo;
  });
};

const updateSubmissionStatus = async (
  submissionId: string, 
  status: Partial<ActionStatus>
) => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("No authenticated session found");

  const timestamp = new Date().toISOString();
  const updatedStatus = {
    ...status,
    lastUpdated: timestamp,
    updatedBy: session.user.email
  };

  const { error } = await supabase
    .from('contact_submissions')
    .update({ 
      action_status: updatedStatus 
    } as unknown as SubmissionBase)
    .eq('id', submissionId);

  if (error) throw error;
};

export const AdminDashboard = () => {
  const [editingNotes, setEditingNotes] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const { 
    data: submissions = [], 
    isLoading,
    error,
    refetch 
  } = useQuery({
    queryKey: ['submissions'],
    queryFn: fetchSubmissions,
    retry: 1,
  });

  const handleStatusChange = async (
    submissionId: string, 
    field: keyof ActionStatus, 
    checked: boolean
  ) => {
    const submission = submissions.find(s => s.id === submissionId);
    const currentStatus = submission?.action_status || {};
    
    await updateSubmissionStatus(submissionId, {
      ...currentStatus,
      [field]: checked,
    });
    
    refetch();
  };

  const handleNotesSubmit = async (submissionId: string) => {
    if (!editingNotes.trim()) return;
    
    const submission = submissions.find(s => s.id === submissionId);
    const currentStatus = submission?.action_status || {};
    
    await updateSubmissionStatus(submissionId, {
      ...currentStatus,
      notes: editingNotes,
    });
    
    setEditingNotes("");
    setEditingId(null);
    refetch();
  };

  if (error) {
    console.error("Query error:", error);
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="p-3 bg-sky-600/10 rounded-full">
                  <item.icon className="h-6 w-6 text-sky-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Contact Form Submissions
          </h2>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            Refresh
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact Info</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Insurance</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : submissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No submissions yet
                  </TableCell>
                </TableRow>
              ) : (
                submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium">
                          {submission.first_name} {submission.last_name}
                        </p>
                        <p className="text-sm text-gray-500">{submission.email}</p>
                        <p className="text-sm text-gray-500">{submission.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm">{submission.address}</p>
                        <p className="text-sm text-gray-500">
                          {submission.city}, {submission.state} {submission.zip}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm">{submission.insurance_type || "N/A"}</p>
                        {submission.message && (
                          <p className="text-sm text-gray-500">{submission.message}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(submission.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {[
                            { id: 'contacted', label: 'Contacted' },
                            { id: 'quoted', label: 'Quoted' },
                            { id: 'unreachable', label: 'Unable to reach' }
                          ].map(({ id, label }) => (
                            <div 
                              key={id} 
                              className="flex items-center space-x-2"
                              title={submission.action_status?.[id as keyof ActionStatus] ? 
                                `Updated on ${format(new Date(submission.action_status.lastUpdated!), 'PPpp')} by ${submission.action_status.updatedBy}` 
                                : undefined
                              }
                            >
                              <Checkbox
                                id={`${id}-${submission.id}`}
                                checked={submission.action_status?.[id as keyof ActionStatus] || false}
                                onCheckedChange={(checked) => 
                                  handleStatusChange(submission.id, id as keyof ActionStatus, checked === true)
                                }
                              />
                              <label 
                                htmlFor={`${id}-${submission.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {label}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {editingId === submission.id ? (
                            <>
                              <Textarea
                                value={editingNotes}
                                onChange={(e) => setEditingNotes(e.target.value)}
                                placeholder="Enter notes..."
                                className="min-h-[60px]"
                              />
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  onClick={() => handleNotesSubmit(submission.id)}
                                >
                                  Save
                                </Button>
                                <Button 
                                  size="sm"
                                  variant="outline" 
                                  onClick={() => {
                                    setEditingId(null);
                                    setEditingNotes("");
                                  }}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </>
                          ) : (
                            <>
                              {submission.action_status?.notes && (
                                <p 
                                  className="text-sm text-gray-600"
                                  title={`Updated on ${format(new Date(submission.action_status.lastUpdated!), 'PPpp')} by ${submission.action_status.updatedBy}`}
                                >
                                  {submission.action_status.notes}
                                </p>
                              )}
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  setEditingId(submission.id);
                                  setEditingNotes(submission.action_status?.notes || "");
                                }}
                              >
                                {submission.action_status?.notes ? "Edit Notes" : "Add Notes"}
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};
