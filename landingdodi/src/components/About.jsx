import React from 'react';
import { motion } from 'framer-motion';


import TestimonioCard from './TestimonioCard';

const testimonios = [
  {
    nombre: 'Mariana López',
    testimonio:
      'Los asesores son de primer nivel. Todo está muy bien explicado, siempre atentos y abiertos a nuestras dudas. La forma en que integran temas como el liderazgo educativo con herramientas de IA es simplemente brillante.',
  },
  {
    nombre: 'Daniel Cervantes',
    testimonio:
      'Ha sido una experiencia formativa y transformadora. El enfoque es profundo pero muy bien guiado, y el acompañamiento de los doctores es constante. Me ha ayudado a renovar por completo mi práctica docente.',
  },
  {
    nombre: 'Teresa Ramírez',
    testimonio:
      'El congreso superó mis expectativas. Temas actualizados, ponentes expertos, y lo mejor: todo lo vinculan con inteligencia artificial en educación. Me encantó que incluso ofrecen las grabaciones y materiales.',
  },
  {
    nombre: 'Jorge Hernández',
    testimonio:
      'Lo que más destaco es cómo logran aterrizar la tecnología en lo cotidiano del aula. No es solo teoría, te llevas herramientas reales para usar desde ya con tus estudiantes. ¡Recomendada totalmente!',
  },
  {
    nombre: 'Karina Aguilar',
    testimonio:
      'Me sentí parte de una comunidad desde el primer momento. No importa si tomas un diplomado o asistes a un evento, siempre hay interacción, respuestas y muchas ganas de compartir entre colegas.',
  },
];
=======

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>¿Quiénes somos?</h2>
      <p>
        DoDi es una comunidad de docentes que aprende y crece con innovación digital y el poder de la inteligencia artificial. Evolucionamos desde DocencIA Digital para seguir conectando y formando educadores de todo el país.
      </p>

      <h3 className="testimonio-title">¿Qué dice nuestra comunidad?</h3>
      <div className="testimonio-grid">
        {testimonios.map((t) => (
          <TestimonioCard key={t.nombre} nombre={t.nombre} testimonio={t.testimonio} />
        ))}
      </div>
    </section>
=======
    </motion.section>
  );
}

export default About;
