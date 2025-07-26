import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const promociones = [
  {
    mensaje: "Obtén $50 de descuento en tu primera compra",
    link: "/tienda",
  },
  {
    mensaje: "$50 de descuento en tu siguiente masterclass con código Julio50",
    link: "https://wa.me/524498539586?text=Hola,%20quiero%20usar%20el%20c%C3%B3digo%20Julio50%20para%20una%20masterclass",
  },
  {
    mensaje: "$150 de descuento en tu inscripción al Doctorado con código Julio150",
    link: "https://wa.me/524498539586?text=Hola,%20quiero%20usar%20el%20c%C3%B3digo%20Julio150%20para%20el%20doctorado",
  },
  {
    mensaje: "$100 de descuento en tu inscripción a la Maestría con código Julio100",
    link: "https://wa.me/524498539586?text=Hola,%20quiero%20usar%20el%20c%C3%B3digo%20Julio100%20para%20la%20maestr%C3%ADa",
  },
];

function Navbar() {
  const [promo, setPromo] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * promociones.length);
    setPromo(promociones[randomIndex]);
  }, []);

  return (
    <nav className="nav">
      <img
        src="https://i.ibb.co/mfvMVzf/logo.png"
        alt="DoDi"
        className="navbar-logo"
      />
      {promo && (
        <motion.a
          href={promo.link}
          className="promo-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          {promo.mensaje}
        </motion.a>
      )}
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
