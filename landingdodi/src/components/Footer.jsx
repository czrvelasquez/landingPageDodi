import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <img
        src="https://i.ibb.co/n8DKbW4W/logo-1.png"
        alt="DoDi"
        className="navbar-logo"
      />
      <p>&copy; {new Date().getFullYear()} DoDi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
