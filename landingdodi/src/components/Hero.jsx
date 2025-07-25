import React from 'react';
import { motion } from 'framer-motion';
import HeroButton from './HeroButton';

function Hero() {
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
        <div className="hero-buttons">
          <HeroButton
            primary
            href="#contact"
            text="Únete a la comunidad"
            info="Grupo de WhatsApp con cientos de maestros de todo México. Recibe información y descuentos de primera mano."
          />
          <HeroButton
            href="/planeaciones"
            text="Descubre nuestra IA para planeaciones"
            info="Un bot creado para generar planeaciones en segundos con inteligencia artificial."
          />
          <HeroButton
            href="/tienda"
            text="Visita nuestra tienda virtual"
            info="Planeaciones, libros digitales y herramientas para el aula."
          />
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;
