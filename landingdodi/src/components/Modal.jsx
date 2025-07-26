import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ open, onClose, title, children, ctaText, ctaUrl }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab') {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          ref={modalRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            ref={closeBtnRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            \u2715
          </button>
          <h3 id="modal-title">{title}</h3>
          <div className="modal-body">{children}</div>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-cta"
          >
            {ctaText}
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
