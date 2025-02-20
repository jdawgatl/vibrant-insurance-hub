
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Submission, ActionStatus } from "../types/submission";
import type { Database } from "@/integrations/supabase/types";

export const useSubmissions = () => {
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
      
      const newNote = {
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

  return {
    submissions,
    isLoading,
    error,
    refetch,
    notesDraft,
    isEditing,
    handleStatusChange,
    handleNotesChange,
    handleNoteDraftChange,
    handleCancelNote,
  };
};
