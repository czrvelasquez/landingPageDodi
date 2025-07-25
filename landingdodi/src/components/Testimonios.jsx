import React from 'react';
import { motion } from 'framer-motion';
import TestimonioCard from './TestimonioCard';

const testimonios = [
  {
    nombre: 'Mariana López',
    testimonio:
      'Los asesores son de primer nivel. Todo está muy bien explicado, siempre atentos y abiertos a nuestras dudas. La forma en que integran temas como el liderazgo educativo con herramientas de IA es simplemente brillante.',
    estado: 'Jalisco',
    programa: 'Maestría MELT',
  },
  {
    nombre: 'Daniel Cervantes',
    testimonio:
      'Ha sido una experiencia formativa y transformadora. El enfoque es profundo pero muy bien guiado, y el acompañamiento de los doctores es constante. Me ha ayudado a renovar por completo mi práctica docente.',
    estado: 'Nuevo León',
    programa: 'Diplomado en IA Educativa',
  },
  {
    nombre: 'Teresa Ramírez',
    testimonio:
      'El congreso superó mis expectativas. Temas actualizados, ponentes expertos, y lo mejor: todo lo vinculan con inteligencia artificial en educación. Me encantó que incluso ofrecen las grabaciones y materiales.',
    estado: 'Puebla',
    programa: 'Congreso Virtual',
  },
  {
    nombre: 'Jorge Hernández',
    testimonio:
      'Lo que más destaco es cómo logran aterrizar la tecnología en lo cotidiano del aula. No es solo teoría, te llevas herramientas reales para usar desde ya con tus estudiantes. ¡Recomendada totalmente!',
    estado: 'Chiapas',
    programa: 'Curso de Innovación Docente',
  },
  {
    nombre: 'Karina Aguilar',
    testimonio:
      'Me sentí parte de una comunidad desde el primer momento. No importa si tomas un diplomado o asistes a un evento, siempre hay interacción, respuestas y muchas ganas de compartir entre colegas.',
    estado: 'CDMX',
    programa: 'Masterclass gratuita',
  },
];

function Testimonios() {
  return (
    <motion.section
      id="testimonios"
      className="testimonios-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="testimonio-title">Lo que dicen de nosotros</h2>
      <div className="testimonio-grid">
        {testimonios.map((t, idx) => (
          <TestimonioCard key={t.nombre} {...t} showMascot={idx % 2 === 0} />
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonios;
