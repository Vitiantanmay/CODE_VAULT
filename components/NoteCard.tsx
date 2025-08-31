import React from 'react';
import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <div className="group relative bg-black border border-gray-800 rounded-lg p-5 flex flex-col transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(49,196,184,0.3)]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-cyan-400">{note.title}</h3>
        {onDelete && (
          <button
            onClick={() => onDelete(note.id)}
            className="absolute top-3 right-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500"
            aria-label="Delete note"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <div className="bg-gray-900/70 rounded-md p-4 overflow-x-auto flex-grow">
        <pre className="text-sm text-gray-300 whitespace-pre-wrap">
          <code>{note.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default NoteCard;