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

  let ctaText = null;
  let ctaUrl = null;
  if (id === 'convive') {
    ctaText = 'Inscribirme al Congreso CONVIVE 2025';
    ctaUrl =
      'https://wa.me/524498539586?text=Hola, me interesa participar en el Congreso CONVIVE 2025 y quiero más información.';
  }

  let modalContent = <p>{detalle}</p>;

  if (id === 'ddce') {
    modalContent = (
      <>
        <h2 className="text-xl font-bold text-center mb-2">
          Doctorado en Desarrollo de Competencias Educativas (DDCE)
        </h2>
        <p className="mb-2">
          🎓 Forma parte de la Generación 25 del DDCE — diseñado para transformar la educación desde las aulas y comunidades.
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>✅ Duración: 2 años</li>
          <li>📅 Clases por Zoom: martes de 7:00 a 9:00 p.m.</li>
          <li>💼 Carga horaria ligera: ideal para personas que trabajan</li>
          <li>💻 Plataforma de tareas: Google Classroom</li>
          <li>🧠 Formación continua: acceso gratuito a masterclasses y congresos sobre IA y tecnología educativa</li>
          <li>🧾 RVOE Federal válido para USICAMM</li>
          <li>💲 Inscripción: $1,000 MXN</li>
          <li>💵 Mensualidad fija: $1,800 MXN</li>
          <li>📜 Titulación por tesis: $20,000 MXN</li>
        </ul>
        <a
          href="https://wa.me/524498539586?text=Hola%2C%20me%20interesa%20inscribirme%20al%20Doctorado%20DDCE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full mt-2"
        >
          ¡Quiero más información por WhatsApp!
        </a>
      </>
    );
  } else if (id === 'melt') {
    modalContent = (
      <>
        <h2 className="text-xl font-bold text-center mb-2">
          Maestría en Liderazgo Transformacional (MELT)
        </h2>
        <p className="mb-2">
          🎓 Una opción ideal para quienes desean liderar el cambio en sus instituciones educativas desde una visión innovadora.
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>✅ Duración: 1 año 4 meses</li>
          <li>📅 Clases por Zoom: sábados de 11:00 a.m. a 2:00 p.m.</li>
          <li>💼 Carga ligera: pensada para personas que trabajan</li>
          <li>💻 Plataforma de tareas: Google Classroom</li>
          <li>🧠 Acceso gratuito a masterclasses y congresos en IA y tecnología educativa</li>
          <li>🧾 RVOE Federal válido para USICAMM</li>
          <li>💲 Inscripción inicial: $400 MXN</li>
          <li>💲 Inscripción tercer cuatrimestre: $4,000 MXN</li>
          <li>💵 Mensualidad fija: $1,400 MXN</li>
          <li>📜 Titulación por tesis: $18,000 MXN</li>
        </ul>
        <a
          href="https://wa.me/524498539586?text=Hola%2C%20me%20interesa%20inscribirme%20a%20la%20Maestr%C3%ADa%20MELT"
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-full mt-2"
        >
          ¡Quiero más información por WhatsApp!
        </a>
      </>
    );
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
            title={id === 'convive' ? nombre : ''}
            ctaText={ctaText}
            ctaUrl={ctaUrl}
          >
            {modalContent}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProgramaCard;
