import React, { useState } from "react";
import { motion } from "framer-motion";

function Contacto() {
  const [programa, setPrograma] = useState("");
  const [otro, setOtro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-wrapper">
        {enviado ? (
          <p>
            Gracias por contactarnos. Uno de nuestros asesores se comunicará
            contigo pronto.
          </p>
        ) : (
          <>
            <p className="contact-intro">
              ¿Te interesa alguno de nuestros programas? ¿Te gustaría que un
              asesor te contacte para darte más información y ayudarte a elegir
              la mejor opción para ti? También realizamos talleres, cursos y
              conferencias a la medida de lo que necesite tu escuela, zona o
              sector educativo.
              <br />
              <br />
              Déjanos tus datos y con gusto te escribimos:
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" required placeholder="Nombre completo" />
              <input type="tel" required placeholder="WhatsApp" />
              <input type="email" required placeholder="Correo electrónico" />
              <select
                required
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
              >
                <option value="">Programa de interés</option>
                <option>
                  Doctorado en Desarrollo de Competencias Docentes (DDCE)
                </option>
                <option>Maestría en Liderazgo Transformacional (MELT)</option>
                <option>Licenciatura en Educación</option>
                <option>Masterclasses</option>
                <option>Congreso CONVIVE 2024</option>
                <option>Congreso de Prospectiva en Educación 2025</option>
                <option>Otro</option>
              </select>
              {programa === "Otro" && (
                <input
                  type="text"
                  required
                  value={otro}
                  onChange={(e) => setOtro(e.target.value)}
                  placeholder="Especifica otro programa"
                />
              )}
              <button type="submit">Quiero que me contacten</button>
            </form>
          </>
        )}
      </div>
    </motion.section>
  );
}

export default Contacto;
