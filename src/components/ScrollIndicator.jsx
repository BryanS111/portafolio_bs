const ScrollIndicator = () => {
  return (
    // Contenedor principal para centrar la flecha
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      
      {/* Flecha con estilos y animación */}
      <svg 
        className="w-8 h-8 text-white opacity-70 animate-bounce-slow" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

    </div>
  );
};

export default ScrollIndicator;