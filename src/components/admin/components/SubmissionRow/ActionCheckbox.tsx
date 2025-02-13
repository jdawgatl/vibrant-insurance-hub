
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { ActionStatus } from "../../types/submission";

interface ActionCheckboxProps {
  id: string;
  label: string;
  submissionId: string;
  field: keyof ActionStatus;
  isChecked: boolean;
  lastUpdated?: string;
  updatedBy?: string;
  onStatusChange: (submissionId: string, field: keyof ActionStatus, checked: CheckedState) => Promise<void>;
}

export const ActionCheckbox = ({
  id,
  label,
  submissionId,
  field,
  isChecked,
  lastUpdated,
  updatedBy,
  onStatusChange,
}: ActionCheckboxProps) => {
  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'PPpp');
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <div className="flex items-center space-x-2 group relative">
      <Checkbox
        id={`${id}-${submissionId}`}
        checked={isChecked}
        onCheckedChange={(checked) => onStatusChange(submissionId, field, checked)}
      />
      <label
        htmlFor={`${id}-${submissionId}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {isChecked && lastUpdated && (
        <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
          Updated on {formatDate(lastUpdated)} by {updatedBy}
        </div>
      )}
    </div>
  );
};
