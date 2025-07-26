import React from 'react';
import { motion } from 'framer-motion';
import HeroButton from './HeroButton';

function Hero() {
  const isSmall = window.innerWidth < 640;
  return (
    <header className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://educrear.com.ar/archivost/id_354/colaborativo-foto-2.jpg')",
        }}
      ></div>
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content relative z-10"
        initial={{ opacity: 0, y: isSmall ? 20 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: isSmall ? 0.6 : 0.8 }}
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
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
          <a
            href="https://chat.whatsapp.com/CrrdO9DPUUJ3eLfXHn2coF"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Únete a la Comunidad
          </a>
          <a
            href="https://portal-planeaciones-io9e.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Banco de Planeaciones
          </a>
          <a
            href="https://docenciadigitalmx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Tienda Virtual
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;
