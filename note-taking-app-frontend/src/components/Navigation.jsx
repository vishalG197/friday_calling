import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS for styling

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Note App</h1>
        <ul className="nav-links">
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/create">Create Note</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
