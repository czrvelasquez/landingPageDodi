import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HeroButton({ href, text, info, primary }) {
  const [hovered, setHovered] = useState(false);
  const className = primary ? 'cta-button' : 'secondary-button';
  return (
    <div
      className="hero-button-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.a whileHover={{ scale: 1.05 }} href={href} className={className}>
        {text}
      </motion.a>
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="hero-button-tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {info}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroButton;
