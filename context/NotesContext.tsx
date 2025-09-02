import React, { createContext, useContext, useEffect, useState } from "react";

export interface Note {
  id: number;
  title: string;
  content: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: Note) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

const API_KEY = import.meta.env.VITE_JSONBIN_KEY;
const BIN_ID = import.meta.env.VITE_JSONBIN_ID;
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  // Fetch notes once
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`${BIN_URL}/latest`, {
          headers: { "X-Master-Key": API_KEY }
        });
        const data = await res.json();
        setNotes(data.record || []);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };
    fetchNotes();
  }, []);

  // Save notes back to jsonbin
  const saveNotes = async (newNotes: Note[]) => {
    await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(newNotes)
    });
    setNotes(newNotes);
  };

  const addNote = async (note: Note) => {
    const updated = [...notes, note];
    await saveNotes(updated);
  };

  const deleteNote = async (id: number) => {
    const updated = notes.filter(n => n.id !== id);
    await saveNotes(updated);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotesContext must be used within NotesProvider");
  return ctx;
};
