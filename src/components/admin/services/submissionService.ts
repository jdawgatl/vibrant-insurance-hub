
import { supabase } from "@/integrations/supabase/client";
import { ActionStatus, Submission } from "../types/submission";

export const fetchSubmissions = async (): Promise<Submission[]> => {
  const session = await supabase.auth.getSession().then(res => res.data.session);
    
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

interface UpdateSubmissionStatusRpcParams {
  submission_id: string;
  action_status: ActionStatus;
}

export const updateSubmissionStatus = async (
  submissionId: string, 
  status: Partial<ActionStatus>
): Promise<void> => {
  const session = await supabase.auth.getSession().then(res => res.data.session);
  if (!session) throw new Error("No authenticated session found");

  const timestamp = new Date().toISOString();
  const updatedStatus: ActionStatus = {
    contacted: false,
    quoted: false,
    unreachable: false,
    notes: "",
    ...status,
    lastUpdated: timestamp,
    updatedBy: session.user.email || 'unknown'
  };

  const rpcParams: UpdateSubmissionStatusRpcParams = {
    submission_id: submissionId,
    action_status: updatedStatus
  };

  const { error } = await supabase.functions.invoke('update_submission_status', {
    body: rpcParams
  });

  if (error) throw error;
};
