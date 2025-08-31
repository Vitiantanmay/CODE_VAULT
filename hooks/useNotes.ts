
import { useState, useEffect } from 'react';
import type { Note } from '../types';
import { initialNotes } from '../data/initialNotes';

const NOTES_STORAGE_KEY = 'code-notes';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const storedNotes = window.localStorage.getItem(NOTES_STORAGE_KEY);
      return storedNotes ? JSON.parse(storedNotes) : initialNotes;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialNotes;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [notes]);

  const addNote = (title: string, code: string) => {
    const newNote: Note = {
      id: new Date().toISOString(),
      title,
      code,
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
  };

  const deleteNote = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};
