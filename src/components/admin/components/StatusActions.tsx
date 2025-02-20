
import { Checkbox } from "@/components/ui/checkbox";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type { ActionStatus } from "../types/submission";

interface StatusActionsProps {
  submissionId: string;
  actionStatus: ActionStatus | null;
  onStatusChange: (submissionId: string, field: keyof Pick<ActionStatus, 'contacted' | 'quoted' | 'unreachable'>, checked: CheckedState) => void;
  formatDate: (date: string) => string;
}

export const StatusActions = ({
  submissionId,
  actionStatus,
  onStatusChange,
  formatDate,
}: StatusActionsProps) => {
  return (
    <div className="space-y-2">
      {[
        { id: 'contacted', label: 'Contacted' },
        { id: 'quoted', label: 'Quoted' },
        { id: 'unreachable', label: 'Unable to reach' }
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center space-x-2 group relative">
          <Checkbox
            id={`${id}-${submissionId}`}
            checked={Boolean(actionStatus?.[id as keyof ActionStatus])}
            onCheckedChange={(checked) => 
              onStatusChange(submissionId, id as keyof Pick<ActionStatus, 'contacted' | 'quoted' | 'unreachable'>, checked)
            }
          />
          <label
            htmlFor={`${id}-${submissionId}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
          {actionStatus?.[id as keyof ActionStatus] && (
            <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
              Updated on {formatDate(actionStatus.lastUpdated || '')}
              {actionStatus.updatedBy && (
                <span className="block">{actionStatus.updatedBy}</span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
