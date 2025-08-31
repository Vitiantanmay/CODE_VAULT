
import React from 'react';
import AddNoteForm from '../components/AddNoteForm';
import { useNotesContext } from '../context/NotesContext';
import Layout from '../components/Layout';
import NoteCard from '../components/NoteCard';

const AdminPage: React.FC = () => {
  const { notes, deleteNote } = useNotesContext();

  const handleExport = () => {
    const fileContent = `import type { Note } from '../types';

export const initialNotes: Note[] = ${JSON.stringify(notes, null, 2)};
`;

    const blob = new Blob([fileContent], { type: 'application/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'initialNotes.ts';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-500 tracking-widest">
          ADMIN_CONSOLE
        </h1>
        <p className="text-gray-400 mt-2">Manage code snippets from the command center.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl mb-4 border-b-2 border-purple-500/50 pb-2">ADD_NEW_NOTE</h2>
          <AddNoteForm />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 border-b-2 border-purple-500/50 pb-2">
             <h2 className="text-3xl">MANAGE_NOTES</h2>
             <button
                onClick={handleExport}
                className="py-2 px-4 bg-purple-600 text-white text-sm font-bold rounded-md hover:bg-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                title="Export all notes to a TypeScript file"
              >
                EXPORT_NOTES
              </button>
          </div>
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {notes.length > 0 ? (
              notes.map(note => (
                <NoteCard key={note.id} note={note} onDelete={deleteNote} />
              ))
            ) : (
              <p className="text-gray-500 italic">No notes found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
