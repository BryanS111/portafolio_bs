import { useEffect, useRef, useState } from 'react';
import './BlurText.css';

const BlurText = ({
  text = '',
  delay = 200,
  animateBy = 'words', // 'words' o 'letters'
  direction = 'top', // 'top' o 'bottom'
  className = '',
}) => {
  const [elements, setElements] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (text) {
      const parts = animateBy === 'words' ? text.split(' ') : text.split('');
      setElements(parts);
    }
    
    // Un pequeño observador para que la animación empiece cuando cargue la página
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap justify-center gap-2`}>
      {elements.map((el, index) => (
        <span
          key={index}
          className={`blur-text-element ${inView ? 'visible' : ''}`}
          style={{
            transitionDelay: `${index * delay}ms`,
            // Pequeño desplazamiento inicial para que se vea que "sube" o "baja"
            transform: inView ? 'translateY(0)' : `translateY(${direction === 'top' ? '-10px' : '10px'})`,
          }}
        >
          {el}
          {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  );
};

export default BlurText;