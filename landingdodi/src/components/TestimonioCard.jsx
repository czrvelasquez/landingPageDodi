import React from 'react';
import { motion } from 'framer-motion';

function TestimonioCard({ nombre, testimonio, estado, programa, showMascot }) {
  return (
    <motion.div
      className="testimonio-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{nombre}</h3>
      <p className="testimonio-detalle">
        {estado} &ndash; {programa}
      </p>
      <p>{testimonio}</p>
      {showMascot && (
        <img
          src="https://i.ibb.co/bjq5gNK3/dodi-2.png"
          alt="Mascota DoDi"
          className="testimonio-mascot"
        />
      )}
    </motion.div>
  );
}

export default TestimonioCard;
