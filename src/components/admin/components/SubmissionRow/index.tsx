
import { TableCell, TableRow } from "@/components/ui/table";
import { Submission, ActionStatus } from "../../types/submission";
import { format } from "date-fns";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { ContactInfo } from "./ContactInfo";
import { LocationInfo } from "./LocationInfo";
import { InsuranceInfo } from "./InsuranceInfo";
import { ActionCheckbox } from "./ActionCheckbox";
import { NotesSection } from "./NotesSection";

interface SubmissionRowProps {
  submission: Submission;
  onStatusChange: (submissionId: string, field: keyof ActionStatus, checked: CheckedState) => Promise<void>;
  onSaveNotes: (submissionId: string, notes: string) => Promise<void>;
}

export const SubmissionRow = ({
  submission,
  onStatusChange,
  onSaveNotes,
}: SubmissionRowProps) => {
  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'PPpp');
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Helper function to ensure boolean values
  const getBooleanValue = (value: any): boolean => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  };

  return (
    <TableRow>
      <TableCell>
        <ContactInfo submission={submission} />
      </TableCell>
      <TableCell>
        <LocationInfo submission={submission} />
      </TableCell>
      <TableCell>
        <InsuranceInfo submission={submission} />
      </TableCell>
      <TableCell>
        {formatDate(submission.created_at)}
      </TableCell>
      <TableCell>
        {submission.action_status?.notes && (
          <div className="text-sm">
            <p className="font-medium">Latest Note:</p>
            <p className="text-gray-600">{submission.action_status.notes}</p>
            {submission.action_status.lastUpdated && (
              <p className="text-xs text-gray-500 mt-1">
                Updated: {formatDate(submission.action_status.lastUpdated)}
                {submission.action_status.updatedBy && (
                  <span> by {submission.action_status.updatedBy}</span>
                )}
              </p>
            )}
          </div>
        )}
      </TableCell>
      <TableCell>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { id: 'contacted', label: 'Contacted' },
              { id: 'quoted', label: 'Quoted' },
              { id: 'unreachable', label: 'Unable to reach' }
            ].map(({ id, label }) => (
              <ActionCheckbox
                key={id}
                id={id}
                label={label}
                submissionId={submission.id}
                field={id as keyof ActionStatus}
                isChecked={getBooleanValue(submission.action_status?.[id as keyof ActionStatus])}
                lastUpdated={submission.action_status?.lastUpdated}
                updatedBy={submission.action_status?.updatedBy}
                onStatusChange={onStatusChange}
              />
            ))}
          </div>
          <div className="space-y-2">
            <NotesSection
              submissionId={submission.id}
              currentNotes={submission.action_status?.notes}
              lastUpdated={submission.action_status?.lastUpdated}
              updatedBy={submission.action_status?.updatedBy}
              onSaveNotes={onSaveNotes}
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};
