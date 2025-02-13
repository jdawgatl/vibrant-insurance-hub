
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Submission, ActionStatus } from "../types/submission";
import { useState } from "react";
import { updateSubmissionStatus } from "../services/submissionService";
import { toast } from "sonner";
import { type CheckedState } from "@radix-ui/react-checkbox";

interface SubmissionsTableProps {
  submissions: Submission[];
  isLoading: boolean;
  onUpdate: () => void;
}

export const SubmissionsTable = ({ submissions, isLoading, onUpdate }: SubmissionsTableProps) => {
  const [editingNotes, setEditingNotes] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

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
        [field]: checked === true,
      });
      
      toast.success(`Successfully updated ${field} status`);
      await onUpdate();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleNotesSubmit = async (submissionId: string) => {
    if (!editingNotes.trim()) return;
    
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
        notes: editingNotes,
      });
      
      toast.success("Notes saved successfully");
      setEditingNotes("");
      setEditingId(null);
      await onUpdate();
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("Failed to save notes");
    }
  };

  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'PPpp');
    } catch (error) {
      return 'Invalid date';
    }
  };

  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={5} className="text-center py-4">
          Loading...
        </TableCell>
      </TableRow>
    );
  }

  if (submissions.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={5} className="text-center py-4">
          No submissions yet
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {submissions.map((submission) => (
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
            {formatDate(submission.created_at)}
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
                    className="flex items-center space-x-2 group relative"
                  >
                    <Checkbox
                      id={`${id}-${submission.id}`}
                      checked={submission.action_status?.[id as keyof ActionStatus] || false}
                      onCheckedChange={(checked) => 
                        handleStatusChange(submission.id, id as keyof ActionStatus, checked)
                      }
                    />
                    <label 
                      htmlFor={`${id}-${submission.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {label}
                    </label>
                    {submission.action_status?.[id as keyof ActionStatus] && submission.action_status?.lastUpdated && (
                      <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
                        Updated on {formatDate(submission.action_status.lastUpdated)} by {submission.action_status.updatedBy}
                      </div>
                    )}
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
                      <div className="group relative">
                        <p className="text-sm text-gray-600">
                          {submission.action_status.notes}
                        </p>
                        {submission.action_status.lastUpdated && (
                          <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
                            Updated on {formatDate(submission.action_status.lastUpdated)} by {submission.action_status.updatedBy}
                          </div>
                        )}
                      </div>
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
      ))}
    </>
  );
};
