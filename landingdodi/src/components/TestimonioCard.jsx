import React, { useEffect, useRef, useState } from 'react';

function TestimonioCard({ nombre, testimonio, showMascot }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="testimonio-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <h3>{nombre}</h3>
      <p>{testimonio}</p>
      {showMascot && (
        <img
          src="https://i.ibb.co/bjq5gNK3/dodi-2.png"
          alt="Mascota DoDi"
          className="testimonio-mascot"
        />
      )}
    </div>
  );
}

export default TestimonioCard;
