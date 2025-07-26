import React from "react";
import { motion } from "framer-motion";

function Gracias() {
  return (
    <motion.section
      className="gracias-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>✅ ¡Gracias por contactarnos!</h2>
      <p>
        Pronto uno de nuestros asesores se pondrá en contacto contigo por
        WhatsApp o correo electrónico.
      </p>
      <p>
        📲 Si deseas atención inmediata,
        <a
          href="https://wa.me/524498539586"
          target="_blank"
          rel="noopener noreferrer"
        >
          haz clic aquí para escribirnos por WhatsApp
        </a>
        .
      </p>
    </motion.section>
  );
}

export default Gracias;
