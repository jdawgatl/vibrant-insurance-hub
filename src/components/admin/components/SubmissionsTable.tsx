
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Submission, ActionStatus } from "../types/submission";
import { updateSubmissionStatus } from "../services/submissionService";
import { toast } from "sonner";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { SubmissionRow } from "./SubmissionRow";
import { useQueryClient } from "@tanstack/react-query";

interface SubmissionsTableProps {
  submissions: Submission[];
  isLoading: boolean;
  onUpdate: () => void;
}

export const SubmissionsTable = ({ submissions, isLoading, onUpdate }: SubmissionsTableProps) => {
  const queryClient = useQueryClient();

  const handleStatusChange = async (
    submissionId: string, 
    field: keyof ActionStatus, 
    checked: CheckedState
  ) => {
    try {
      const submission = submissions.find(s => s.id === submissionId);
      const currentStatus = submission?.action_status || {
        contacted: false,
        quoted: false,
        unreachable: false,
        notes: ""
      };
      
      await updateSubmissionStatus(submissionId, {
        ...currentStatus,
        [field]: checked === true
      });
      
      toast.success(`Successfully updated ${field} status`);
      await queryClient.invalidateQueries({ queryKey: ['submissions'] });
      onUpdate();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleSaveNotes = async (submissionId: string, notes: string) => {
    try {
      const submission = submissions.find(s => s.id === submissionId);
      const currentStatus = submission?.action_status || {
        contacted: false,
        quoted: false,
        unreachable: false,
        notes: ""
      };
      
      await updateSubmissionStatus(submissionId, {
        ...currentStatus,
        notes
      });
      
      toast.success("Notes saved successfully");
      await queryClient.invalidateQueries({ queryKey: ['submissions'] });
      onUpdate();
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("Failed to save notes");
    }
  };

  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={6} className="text-center py-4">
          Loading...
        </TableCell>
      </TableRow>
    );
  }

  if (submissions.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={6} className="text-center py-4">
          No submissions yet
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {submissions.map((submission) => (
        <SubmissionRow
          key={submission.id}
          submission={submission}
          onStatusChange={handleStatusChange}
          onSaveNotes={handleSaveNotes}
        />
      ))}
    </>
  );
};
