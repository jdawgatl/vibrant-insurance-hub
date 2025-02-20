
export type Note = {
  content: string;
  timestamp: string;
  author: string;
};

export type ActionStatus = {
  contacted: boolean;
  quoted: boolean;
  unreachable: boolean;
  notes: string;
  notesLog: Note[];
  lastUpdated?: string;
  updatedBy?: string;
};

export type Submission = {
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
  action_status: ActionStatus | null;
};
