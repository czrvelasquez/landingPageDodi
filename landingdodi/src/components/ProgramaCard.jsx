import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

function ProgramaCard({
  id,
  nombre,
  modalidad,
  duracion,
  clases,
  inicio,
  descripcion,
  detalle,
  imagenEncabezado,
}) {
  const [open, setOpen] = useState(false);
  let categoria = 'Congreso';
  if (id && id.includes('melt')) {
    categoria = 'Maestría';
  } else if (id && id.includes('ddce')) {
    categoria = 'Doctorado';
  }

  let ctaText = '';
  let ctaUrl = '';
  if (id === 'ddce') {
    ctaText = 'Inscribirme al Doctorado (DDCE)';
    ctaUrl =
      'https://wa.me/524498539586?text=Hola, me interesa inscribirme al Doctorado DDCE y quiero más información.';
  } else if (id === 'melt') {
    ctaText = 'Inscribirme a la Maestría MELT';
    ctaUrl =
      'https://wa.me/524498539586?text=Hola, me interesa inscribirme a la Maestría MELT y quiero más información.';
  } else {
    ctaText = 'Inscribirme al Congreso CONVIVE 2025';
    ctaUrl =
      'https://wa.me/524498539586?text=Hola, me interesa participar en el Congreso CONVIVE 2025 y quiero más información.';
  }
  return (
    <>
      <motion.div
        className="program-card"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={e => {
          if (e.key === 'Enter') setOpen(true);
        }}
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
        <button
          type="button"
          className="secondary-button"
          onClick={e => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          Conoce más
        </button>
      </motion.div>
      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={nombre}
            ctaText={ctaText}
            ctaUrl={ctaUrl}
          >
            <p>{detalle}</p>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProgramaCard;
