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
          src="https://i.ibb.co/wZngvmXm/PROTOCOLO-38.jpg"
          alt="DoDi imagen 1"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid reverse">
        <motion.img
          src="https://i.ibb.co/PsHVP6W8/PROTOCOLO-34.jpg"
          alt="DoDi imagen 2"
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
          src="https://i.ibb.co/WLZpgmP/PROTOCOLO-29.jpg"
          alt="DoDi imagen 3"
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
          src="https://i.ibb.co/B5TTM2DV/PROTOCOLO-24.jpg"
          alt="DoDi imagen 4"
          className="about-img"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="about-grid reverse">
        <motion.img
          src="https://i.ibb.co/WWRXRrVY/PROTOCOLO-18.jpg"
          alt="DoDi imagen 5"
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
          src="https://i.ibb.co/bRBnV95p/PROTOCOLO-20.jpg"
          alt="DoDi imagen 6"
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
