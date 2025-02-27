// src/components/layout/Navbar.jsx
import 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Dashboard</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
      <div className="user-info">
        <span>Welcome, User</span>
      </div>
    </nav>
  );
};

export default Navbar;