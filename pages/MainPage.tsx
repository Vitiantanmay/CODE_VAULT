import React from 'react';
import NoteList from '../components/NoteList';
import Layout from '../components/Layout';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-widest animate-pulse">
          CODE_VAULT
        </h1>
        <p className="text-gray-400 mt-2">Your personal archive of code snippets.</p>
      </header>
      <NoteList />
    </Layout>
  );
};

export default MainPage;