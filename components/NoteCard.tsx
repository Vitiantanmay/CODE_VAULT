
import React, { useState } from 'react';
import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(note.code).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
      }).catch(err => {
        console.error("Could not copy text: ", err);
      });
    }
  };

  return (
    <div className="group relative bg-black border border-gray-800 rounded-lg p-5 flex flex-col transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(49,196,184,0.3)]">
      {/* Title */}
      <h3 className="text-2xl font-bold text-cyan-400 mb-3 pr-20">{note.title}</h3>
      
      {/* Action Buttons Container */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <button
          onClick={handleCopy}
          className={`p-1 rounded-full ${isCopied ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
          aria-label="Copy code"
          title="Copy code"
        >
          {isCopied ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
        {onDelete && (
          <button
            onClick={() => onDelete(note.id)}
            className="p-1 rounded-full text-gray-400 hover:text-red-500"
            aria-label="Delete note"
            title="Delete note"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Code Block */}
      <div className="bg-gray-900/70 rounded-md p-4 overflow-x-auto flex-grow">
        <pre className="text-sm text-gray-300 whitespace-pre-wrap">
          <code>{note.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default NoteCard;