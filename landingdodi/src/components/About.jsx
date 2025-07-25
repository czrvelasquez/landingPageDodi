import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="about extended-about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>¿Quiénes somos?</h2>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Orígenes de DoDi</h3>
          <p>
            DoDi nace como la evolución de DocencIA Digital, con la misión de
            formar, acompañar y conectar a docentes de todo México a través de
            experiencias formativas innovadoras y el uso ético de la
            inteligencia artificial en la educación.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1523580494863-6c9f20964b4a?auto=format&fit=crop&w=800&q=60"
          alt="Docentes en comunidad"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid">
        <motion.img
          src="https://images.unsplash.com/photo-1532619066787-9d4f8db64396?auto=format&fit=crop&w=800&q=60"
          alt="Evento educativo"
          className="about-img"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Qué hacemos</h3>
          <p>
            Ofrecemos programas de posgrado, diplomados, cursos cortos y eventos
            gratuitos como congresos y masterclasses, siempre enfocados en las
            necesidades reales del aula y el desarrollo profesional docente.
          </p>
        </motion.div>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Nuestro enfoque</h3>
          <p>
            Comunidad, innovación, colaboración y tecnología. Todo lo que hacemos
            busca transformar la práctica docente desde la raíz, conectando a
            profesionales de todas las regiones.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60"
          alt="Trabajo colaborativo"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid">
        <motion.img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60"
          alt="Valores"
          className="about-img"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Valores</h3>
          <ul className="about-values">
            <li>Comunidad educativa abierta</li>
            <li>Tecnología con propósito</li>
            <li>Educación crítica y transformadora</li>
            <li>Docentes como agentes de cambio</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
