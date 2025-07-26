import React from 'react';

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.9h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M41 17.5c-3.6-.1-7-1.5-9.6-3.8V30a11 11 0 11-11-11v5.5a5.5 5.5 0 105.5 5.5V4h5.3a9.8 9.8 0 008.8 9.5V17.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 3.25a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <img
        src="https://i.ibb.co/n8DKbW4W/logo-1.png"
        alt="DoDi"
        className="navbar-logo"
      />
      <p className="footer-copy">&copy; DoDi {new Date().getFullYear()}</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/docenciafuturista"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.tiktok.com/@docenciadigitalmx"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <TikTokIcon />
        </a>
        <a
          href="https://www.instagram.com/docencia.digitalmx/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <InstagramIcon />
        </a>
      </div>
      <p className="footer-message">
        En DoDi usamos inteligencia artificial para facilitar la labor docente.
        Esta página también fue elaborada con IA... y mucho amor &lt;3
      </p>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} DoDi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
