import React from 'react';

function ProgramaCard({
  nombre,
  modalidad,
  duracion,
  clases,
  inicio,
  descripcion,
  urlMasInfo,
  imagenEncabezado,
}) {
  return (
    <div className="program-card">
      {imagenEncabezado && (
        <img
          src={imagenEncabezado}
          alt={nombre}
          className="w-full h-40 object-cover mb-4"
        />
      )}
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
    </div>
  );
}

export default ProgramaCard;
