
import { Submission } from "../../types/submission";

interface ContactInfoProps {
  submission: Submission;
}

export const ContactInfo = ({ submission }: ContactInfoProps) => {
  return (
    <div className="space-y-1">
      <p className="font-medium">
        {submission.first_name} {submission.last_name}
      </p>
      <p className="text-sm text-gray-500">{submission.email}</p>
      <p className="text-sm text-gray-500">{submission.phone}</p>
    </div>
  );
};
