
import { Submission } from "../../types/submission";

interface InsuranceInfoProps {
  submission: Submission;
}

export const InsuranceInfo = ({ submission }: InsuranceInfoProps) => {
  return (
    <div className="space-y-1">
      <p className="text-sm">{submission.insurance_type || "N/A"}</p>
      {submission.message && (
        <p className="text-sm text-gray-500">{submission.message}</p>
      )}
    </div>
  );
};
