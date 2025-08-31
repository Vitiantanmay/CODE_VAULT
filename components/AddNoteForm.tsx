
import React, { useState } from 'react';
import { useNotesContext } from '../context/NotesContext';

const AddNoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const { addNote } = useNotesContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && code.trim()) {
      addNote(title, code);
      setTitle('');
      setCode('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-lg text-purple-400 mb-1">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="code" className="block text-lg text-purple-400 mb-1">
          Code Snippet:
        </label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-mono"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
      >
        ADD_NOTE
      </button>
    </form>
  );
};

export default AddNoteForm;
