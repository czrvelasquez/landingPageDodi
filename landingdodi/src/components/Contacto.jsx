import React, { useState } from "react";
import { motion } from "framer-motion";

function Contacto() {
  const [programa, setPrograma] = useState("");
  const [otro, setOtro] = useState("");

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
        <p className="contact-intro">
          ¿Te interesa alguno de nuestros programas o quieres llevar una
          capacitación a tu escuela?
          <br />
          Deja tus datos y uno de nuestros asesores se pondrá en contacto
          contigo para darte atención personalizada.
        </p>
        <form
          action="https://formspree.io/f/xyznm789"
          method="POST"
        >
          <input type="hidden" name="_redirect" value="/gracias" />
          <input
            type="text"
            name="nombre"
            required
            placeholder="Nombre completo"
          />
          <input
            type="tel"
            name="whatsapp"
            required
            placeholder="WhatsApp"
          />
          <input
            type="email"
            name="correo"
            required
            placeholder="Correo electrónico"
          />
          <select
            name="programa"
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
              name="otroPrograma"
              required
              value={otro}
              onChange={(e) => setOtro(e.target.value)}
              placeholder="Especifica otro programa"
            />
          )}
          <button type="submit">Quiero que me contacten</button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contacto;
