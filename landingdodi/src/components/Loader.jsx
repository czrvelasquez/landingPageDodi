import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Loader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 1500);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div className="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <img
        src="https://i.ibb.co/n8DKbW4W/logo-1.png"
        alt="DoDi"
        className="loader-logo"
      />
    </motion.div>
  );
}

export default Loader;
