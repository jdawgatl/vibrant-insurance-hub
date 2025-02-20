
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmissionNotes } from "./SubmissionNotes";
import { StatusActions } from "./StatusActions";
import type { Submission } from "../types/submission";

interface SubmissionsTableProps {
  submissions: Submission[];
  notesDraft: { [key: string]: string };
  isEditing: { [key: string]: boolean };
  onRefresh: () => void;
  onNoteDraftChange: (submissionId: string, value: string) => void;
  onSaveNote: (submissionId: string, notes: string) => void;
  onCancelNote: (submissionId: string) => void;
  onStatusChange: (submissionId: string, field: any, checked: any) => void;
  formatDate: (date: string) => string;
}

export const SubmissionsTable = ({
  submissions,
  notesDraft,
  isEditing,
  onRefresh,
  onNoteDraftChange,
  onSaveNote,
  onCancelNote,
  onStatusChange,
  formatDate,
}: SubmissionsTableProps) => {
  return (
    <Card className="p-4 lg:p-6 border-l-4 border-sky-600">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Recent Contact Form Submissions</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track recent inquiries</p>
        </div>
        <Button 
          onClick={onRefresh}
          variant="outline"
          className="hover:bg-sky-50"
        >
          Refresh List
        </Button>
      </div>
      
      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-sm text-sky-600 uppercase bg-gray-50">
            <tr>
              <th className="px-3 py-2 w-[300px]">Contact Info</th>
              <th className="px-3 py-2 w-[120px]">Submitted</th>
              <th className="px-3 py-2">Notes</th>
              <th className="px-3 py-2 w-[150px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr 
                key={submission.id} 
                className="border-b hover:bg-gray-50 transition-colors border-l-2 border-l-transparent hover:border-l-sky-600"
              >
                <td className="px-3 py-3">
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium text-sm">{submission.first_name} {submission.last_name}</div>
                      <div className="text-xs text-gray-500">{submission.email}</div>
                      <div className="text-xs text-gray-500">{submission.phone}</div>
                      <div className="text-xs text-gray-500">
                        {submission.address}<br />
                        {submission.city}, {submission.state} {submission.zip}
                      </div>
                    </div>
                    <div>
                      <span className="bg-sky-50 text-sky-700 rounded-full px-2 py-1 text-xs">
                        {submission.insurance_type}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-xs text-gray-500">
                  {formatDate(submission.created_at)}
                </td>
                <td className="px-3 py-3">
                  <SubmissionNotes
                    notes={submission.action_status?.notesLog || []}
                    notesDraft={notesDraft[submission.id] || ''}
                    isEditing={isEditing[submission.id] || false}
                    onNoteDraftChange={(value) => onNoteDraftChange(submission.id, value)}
                    onSaveNote={() => onSaveNote(submission.id, notesDraft[submission.id] || '')}
                    onCancelNote={() => onCancelNote(submission.id)}
                    formatDate={formatDate}
                  />
                </td>
                <td className="px-3 py-3">
                  <StatusActions
                    submissionId={submission.id}
                    actionStatus={submission.action_status}
                    onStatusChange={onStatusChange}
                    formatDate={formatDate}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
