
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const correctPassword = 'Ansh96499@';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin', { replace: true });
    } else {
      setError('ACCESS_DENIED: Incorrect password.');
      setPassword('');
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <header className="text-center mb-8">
            <h1 className="text-5xl font-bold text-red-500 tracking-widest animate-pulse">
              ACCESS_RESTRICTED
            </h1>
            <p className="text-gray-400 mt-2">Authentication required for ADMIN_CONSOLE.</p>
          </header>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-lg p-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <div>
              <label htmlFor="password" className="block text-lg text-red-400 mb-2">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border-2 border-gray-600 rounded-md p-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                required
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
            >
              AUTHENTICATE
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
