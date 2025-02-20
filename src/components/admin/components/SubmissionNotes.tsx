
import { FileText, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Note } from "../types/submission";

interface NotesProps {
  notes: Note[];
  notesDraft: string;
  isEditing: boolean;
  onNoteDraftChange: (value: string) => void;
  onSaveNote: () => void;
  onCancelNote: () => void;
  formatDate: (date: string) => string;
}

export const SubmissionNotes = ({
  notes,
  notesDraft,
  isEditing,
  onNoteDraftChange,
  onSaveNote,
  onCancelNote,
  formatDate,
}: NotesProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white rounded-lg shadow-sm p-3 border">
        <h4 className="font-medium text-sky-700 mb-3 flex items-center gap-2 text-sm">
          <FileText className="h-4 w-4" />
          Notes History
        </h4>
        <ScrollArea className="h-[200px] w-full">
          <div className="space-y-2">
            {[...notes].reverse().map((note, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-2 rounded-md border-l-2 border-sky-500"
              >
                <p className="text-xs text-gray-700">{note.content}</p>
                <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                  <span className="font-medium">{note.author}</span>
                  <span>•</span>
                  <span>{formatDate(note.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-3 border">
        <h4 className="font-medium text-sky-700 mb-3 flex items-center gap-2 text-sm">
          <Loader2 className="h-4 w-4" />
          Add New Note
        </h4>
        <div className="space-y-3">
          <Textarea
            placeholder="Type your note here..."
            value={notesDraft}
            onChange={(e) => onNoteDraftChange(e.target.value)}
            className="min-h-[120px] bg-gray-50 border resize-none text-sm"
          />
          {isEditing && (
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="w-full text-xs py-1"
                onClick={onSaveNote}
              >
                Save Note
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-xs py-1"
                onClick={onCancelNote}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
