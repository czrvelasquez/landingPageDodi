import React from 'react';
import programas from '../data/programas';
import ProgramaCard from './ProgramaCard';

function OfertaEducativa() {
  const programasActivos = programas.filter(p => p.estado === 'activo');

  return (
    <section id="oferta" className="oferta-educativa">
      <h2>Nuestra oferta educativa</h2>
      <div className="programas-grid">
        {programasActivos.map(programa => (
          <ProgramaCard key={programa.id} {...programa} />
        ))}
      </div>
    </section>
  );
}

export default OfertaEducativa;
