
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
    checked: boolean
  ) => {
    const submission = submissions.find(s => s.id === submissionId);
    const currentStatus = submission?.action_status || {};
    
    await updateSubmissionStatus(submissionId, {
      ...currentStatus,
      [field]: checked,
    });
    
    onUpdate();
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
    onUpdate();
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
      ))}
    </>
  );
};
