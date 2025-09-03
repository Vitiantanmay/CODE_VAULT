import React, { useState } from "react";
import { Note } from "../context/NotesContext";
import { Copy, Trash2 } from "lucide-react";

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
    <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl border border-transparent transition-all duration-300 hover:border-cyan-500 hover:scale-[1.02] transform">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2 truncate">
        {note.title}
      </h3>

      {/* Content */}
      <div className="text-gray-300 whitespace-pre-wrap overflow-hidden h-32 text-ellipsis leading-relaxed">
        <pre className="font-sans whitespace-pre-wrap">{note.content}</pre>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white transition-colors"
          title="Copy content"
        >
          {copied ? "✅" : <Copy size={18} />}
        </button>

        {onDelete && (
          <button
            onClick={() => onDelete(note.id)}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-500 transition-colors"
            title="Delete note"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
