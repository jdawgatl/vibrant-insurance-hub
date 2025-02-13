
export type ActionStatus = {
  contacted: boolean;
  quoted: boolean;
  unreachable: boolean;
  notes: string;
  lastUpdated?: string;
  updatedBy?: string;
};

export type SubmissionBase = {
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
  action_status?: ActionStatus; // Add this to match the database schema
};

export type Submission = SubmissionBase & {
  action_status?: ActionStatus;
};

export type UpdateSubmissionStatusParams = {
  submission_id: string;
  status: ActionStatus;
};
