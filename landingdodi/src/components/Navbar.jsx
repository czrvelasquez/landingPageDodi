import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <img
        src="https://i.ibb.co/mfvMVzf/logo.png"
        alt="DoDi"
        className="navbar-logo"
      />
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
