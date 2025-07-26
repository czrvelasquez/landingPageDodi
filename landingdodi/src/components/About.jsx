import React from "react";
import { motion } from "framer-motion";

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
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
          alt="Equipo trabajando en laptops"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid reverse">
        <motion.img
          src="https://images.unsplash.com/photo-1596495577886-d920f1c34fcd?auto=format&fit=crop&w=800&q=60"
          alt="Docentes en videollamada"
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

      <div className="illustration-wrapper">
        <motion.img
          src="https://images.unsplash.com/photo-1581093588391-34efba5cd5a1?auto=format&fit=crop&w=800&q=60"
          alt="Educación y tecnología"
          className="illustration-img"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
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
            Comunidad, innovación, colaboración y tecnología. Todo lo que
            hacemos busca transformar la práctica docente desde la raíz,
            conectando a profesionales de todas las regiones.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1581090700227-80c4e07a7827?auto=format&fit=crop&w=800&q=60"
          alt="Robótica educativa"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid reverse">
        <motion.img
          src="https://images.unsplash.com/photo-1531379410504-2377a147a0e8?auto=format&fit=crop&w=800&q=60"
          alt="Comunidad de profesores"
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

      <div className="illustration-wrapper">
        <motion.img
          src="https://images.unsplash.com/photo-1551836022-b88bfb1411c7?auto=format&fit=crop&w=800&q=60"
          alt="Congreso educativo"
          className="illustration-img"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
}

export default About;
