
import React, { createContext, useContext, ReactNode } from 'react';
import type { Note } from '../types';
import { useNotes } from '../hooks/useNotes';

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, code: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const notesData = useNotes();
  return <NotesContext.Provider value={notesData}>{children}</NotesContext.Provider>;
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return context;
};
