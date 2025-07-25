import React from 'react';
import { motion } from 'framer-motion';

function Contacto() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </motion.section>
  );
}

export default Contacto;
