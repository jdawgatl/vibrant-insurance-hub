
import { Submission } from "../../types/submission";

interface LocationInfoProps {
  submission: Submission;
}

export const LocationInfo = ({ submission }: LocationInfoProps) => {
  return (
    <div className="space-y-1">
      <p className="text-sm">{submission.address}</p>
      <p className="text-sm text-gray-500">
        {submission.city}, {submission.state} {submission.zip}
      </p>
    </div>
  );
};
