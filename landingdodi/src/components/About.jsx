import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>¿Quiénes somos?</h2>
      <p>
        DoDi es una comunidad de docentes que aprende y crece con innovación digital y el poder de la inteligencia artificial. Evolucionamos desde DocencIA Digital para seguir conectando y formando educadores de todo el país.
      </p>
    </motion.section>
  );
}

export default About;
