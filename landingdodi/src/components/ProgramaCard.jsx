import React from 'react';
import { motion } from 'framer-motion';

function ProgramaCard({
  id,
  nombre,
  modalidad,
  duracion,
  clases,
  inicio,
  descripcion,
  urlMasInfo,
  imagenEncabezado,
}) {
  let categoria = 'Congreso';
  if (id && id.includes('melt')) {
    categoria = 'Maestría';
  } else if (id && id.includes('ddce')) {
    categoria = 'Doctorado';
  }
  return (
    <motion.div
      className="program-card"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="program-category">{categoria}</div>
      <h3>{nombre}</h3>
      <p>
        <strong>Modalidad:</strong> {modalidad}
      </p>
      <p>
        <strong>Duración:</strong> {duracion}
      </p>
      <p>
        <strong>Clases:</strong> {clases}
      </p>
      <p>
        <strong>Inicio:</strong> {inicio}
      </p>
      <p>{descripcion}</p>
      <a href={urlMasInfo}>Conoce más</a>
    </motion.div>
  );
}

export default ProgramaCard;
