
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Indian Recipe Hub</Link>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/feedback" onClick={toggleMenu}>Feedback</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;