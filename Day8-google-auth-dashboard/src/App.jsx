import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './components/login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      {user ? < Login/> : <Dashboard />}
    </div>
  );
}

export default App;