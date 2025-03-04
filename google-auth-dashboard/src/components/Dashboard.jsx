import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.displayName}</h1>
      <img 
        src={user.photoURL} 
        alt="Profile" 
        className="profile-pic" 
      />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;