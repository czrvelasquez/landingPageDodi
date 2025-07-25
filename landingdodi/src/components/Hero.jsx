import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <header
      className="hero"
      style={{
        backgroundImage:
          "url('https://educrear.com.ar/archivost/id_354/colaborativo-foto-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#043458]/70"></div>
      <motion.div
        className="hero-content relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </header>
  );
}

export default Hero;
