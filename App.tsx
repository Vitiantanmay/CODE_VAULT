
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { NotesProvider } from './context/NotesContext';

function App() {
  return (
    <NotesProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </NotesProvider>
  );
}

export default App;
