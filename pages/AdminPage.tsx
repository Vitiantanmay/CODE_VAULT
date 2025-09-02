import React from "react";
import AddNoteForm from "../components/AddNoteForm";
import { useNotesContext } from "../context/NotesContext";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";

const AdminPage: React.FC = () => {
  const { notes, deleteNote } = useNotesContext();

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
          <h2 className="text-3xl mb-4 border-b-2 border-purple-500/50 pb-2">MANAGE_NOTES</h2>
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
