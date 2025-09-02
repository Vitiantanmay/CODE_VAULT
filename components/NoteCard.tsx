import React, { useState } from "react";
import { Note } from "../context/NotesContext";

interface Props {
  note: Note;
  onDelete?: (id: number) => void;
}

const NoteCard: React.FC<Props> = ({ note, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(note.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative bg-gray-800 p-4 rounded shadow border border-transparent transition-all hover:border-gray-500 hover:shadow-lg">
      {/* Title */}
      <h3 className="text-xl font-bold text-cyan-400">{note.title}</h3>

      {/* Content - preserve formatting */}
      <pre className="whitespace-pre-wrap text-gray-300 mt-2">
        {note.content}
      </pre>

      {/* Copy button (emoji, no external icons) */}
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm transition"
        title="Copy content"
      >
        {copied ? "✅ Copied" : "📋"}
      </button>

      {/* Delete button */}
      {onDelete && (
        <button
          onClick={() => onDelete(note.id)}
          className="mt-3 py-1 px-3 bg-red-600 text-white rounded hover:bg-red-500"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default NoteCard;
