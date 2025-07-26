import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <img
        src="https://i.ibb.co/n8DKbW4W/logo-1.png"
        alt="DoDi"
        className="navbar-logo"
      />
      <p className="footer-copy">&copy; DoDi {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
