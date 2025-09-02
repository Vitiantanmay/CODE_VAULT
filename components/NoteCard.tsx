import React from "react";
import { Note } from "../context/NotesContext";

interface Props {
  note: Note;
  onDelete?: (id: number) => void;
}

const NoteCard: React.FC<Props> = ({ note, onDelete }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h3 className="text-xl font-bold text-cyan-400">{note.title}</h3>
      <p className="text-gray-300">{note.content}</p>
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
