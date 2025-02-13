
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { type CheckedState } from "@radix-ui/react-checkbox";
import { ActionStatus } from "../../types/submission";
import { Check } from "lucide-react";

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
      <div className="relative">
        <Checkbox
          id={`${id}-${submissionId}`}
          checked={isChecked}
          onCheckedChange={(checked) => onStatusChange(submissionId, field, checked)}
          className="h-4 w-4 rounded border border-gray-300 bg-white"
        >
          <Check 
            className={`h-3 w-3 text-white ${isChecked ? 'opacity-100' : 'opacity-0'}`}
            strokeWidth={3}
          />
        </Checkbox>
      </div>
      <label
        htmlFor={`${id}-${submissionId}`}
        className={`text-sm font-medium leading-none ${isChecked ? 'text-blue-500' : 'text-gray-700'}`}
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
