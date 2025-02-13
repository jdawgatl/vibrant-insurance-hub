
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { useState } from "react";

interface NotesSectionProps {
  submissionId: string;
  currentNotes?: string;
  lastUpdated?: string;
  updatedBy?: string;
  onSaveNotes: (submissionId: string, notes: string) => Promise<void>;
}

export const NotesSection = ({
  submissionId,
  currentNotes,
  lastUpdated,
  updatedBy,
  onSaveNotes,
}: NotesSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(currentNotes || "");

  const formatDate = (date: string) => {
    try {
      return format(new Date(date), 'PPpp');
    } catch (error) {
      return 'Invalid date';
    }
  };

  const handleSave = async () => {
    await onSaveNotes(submissionId, notes);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter notes..."
          className="min-h-[60px]"
        />
        <div className="flex space-x-2">
          <Button size="sm" onClick={handleSave}>
            Save
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setIsEditing(false);
              setNotes(currentNotes || "");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {currentNotes && (
        <div className="group relative">
          <p className="text-sm text-gray-600">{currentNotes}</p>
          {lastUpdated && (
            <div className="absolute left-0 -top-8 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-50">
              Updated on {formatDate(lastUpdated)} by {updatedBy}
            </div>
          )}
        </div>
      )}
      <Button
        size="sm"
        variant="outline"
        onClick={() => setIsEditing(true)}
      >
        {currentNotes ? "Edit Notes" : "Add Notes"}
      </Button>
    </>
  );
};
