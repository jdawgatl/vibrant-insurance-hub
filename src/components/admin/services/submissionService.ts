
import { supabase } from "@/integrations/supabase/client";
import { ActionStatus, Submission, Note } from "../types/submission";
import { Database } from "@/integrations/supabase/types";

export const fetchSubmissions = async (): Promise<Submission[]> => {
  const { data } = await supabase.auth.getSession();
  const session = data.session;
    
  if (!session) {
    throw new Error("No authenticated session found");
  }

  const { data: submissions, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  if (!submissions) return [];

  const submissionsData = submissions as unknown as Submission[];

  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

  return submissionsData.filter(submission => {
    const lastActivity = submission.action_status?.lastUpdated 
      ? new Date(submission.action_status.lastUpdated)
      : new Date(submission.created_at);
    return lastActivity > fiveDaysAgo;
  });
};

export const updateSubmissionStatus = async (
  submissionId: string, 
  status: Partial<ActionStatus>
): Promise<void> => {
  const { data } = await supabase.auth.getSession();
  const session = data.session;
  
  if (!session) throw new Error("No authenticated session found");

  const timestamp = new Date().toISOString();
  const updatedStatus: ActionStatus = {
    contacted: false,
    quoted: false,
    unreachable: false,
    notes: "",
    notesLog: [],
    ...status,
    lastUpdated: timestamp,
    updatedBy: session.user.email || 'unknown'
  };

  const { error } = await supabase
    .from('contact_submissions')
    .update({ 
      action_status: updatedStatus
    } as Database['public']['Tables']['contact_submissions']['Update'])
    .eq('id', submissionId);

  if (error) throw error;
};
