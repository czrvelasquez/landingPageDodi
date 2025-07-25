import React from 'react';
import { motion } from 'framer-motion';
import programas from '../data/programas';
import ProgramaCard from './ProgramaCard';

function OfertaEducativa() {
  const programasActivos = programas.filter(p => p.estado === 'activo');

  return (
    <motion.section
      id="oferta"
      className="oferta-educativa"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Nuestra oferta educativa</h2>
      <div className="programas-grid">
        {programasActivos.map(programa => (
          <ProgramaCard key={programa.id} {...programa} />
        ))}
      </div>
    </motion.section>
  );
}

export default OfertaEducativa;
