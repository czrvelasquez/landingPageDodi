import { useEffect, useState } from 'react';
import promociones from '../data/promociones';

function PromoFloatButton() {
  const [promo, setPromo] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * promociones.length);
    setPromo(promociones[index]);
  }, []);

  if (!promo) return null;

  return (
    <div className="promo-float-button">
      <a
        href={promo.url}
        className="promo-float-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {promo.texto}
      </a>
      <div className="promo-tooltip">🎉 {promo.tooltip}</div>
    </div>
  );
}

export default PromoFloatButton;
