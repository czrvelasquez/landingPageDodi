import React from 'react';

function WhatsappButton() {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/524498539586?text=Hola,%20tengo%20una%20duda%20sobre%20los%20programas%20de%20DoDi"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="Contáctanos por WhatsApp"
      >
        <img
          src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
      <div className="whatsapp-tooltip">
        ¿Tienes duda de algo? Contáctanos por WhatsApp
      </div>
    </div>
  );
}

export default WhatsappButton;
