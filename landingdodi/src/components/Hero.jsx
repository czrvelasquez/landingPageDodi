import React from 'react';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <img
          src="https://i.ibb.co/n8DKbW4W/logo-1.png"
          alt="Logo de DoDi"
          className="hero-logo"
        />
        <h1>La educación está cambiando. DoDi evoluciona contigo.</h1>
        <div className="tagline">
          <img
            src="https://i.ibb.co/bjq5gNK3/dodi-2.png"
            alt="Mascota de DoDi"
            className="hero-mascot"
          />
          <p className="hero-tagline">DoDi: Innovación educativa en comunidad.</p>
        </div>
        <p>
          Comunidad, innovación e inteligencia artificial al servicio de los docentes.
        </p>
        <a className="cta-button" href="#contact">Únete a la comunidad</a>
      </div>
    </header>
  );
}

export default Hero;
