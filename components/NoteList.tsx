import React from 'react';
import { useNotesContext } from '../context/NotesContext';
import NoteCard from './NoteCard';

const NoteList: React.FC = () => {
  const { notes } = useNotesContext();

  if (notes.length === 0) {
    return <div className="text-center text-gray-500 text-2xl mt-16">CODE_VAULT is empty.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;