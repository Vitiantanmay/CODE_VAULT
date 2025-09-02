import React, { useState } from "react";
import { useNotesContext } from "../context/NotesContext";

const AddNoteForm: React.FC = () => {
  const { addNote } = useNotesContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    await addNote({ id: Date.now(), title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-500"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
