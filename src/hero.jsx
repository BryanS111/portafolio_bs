import ColorBends from "./components/ColorBends";
import BlurText from "./components/BlurText";
import ScrollIndicator from './components/ScrollIndicator';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">

      {/* Fondo animado */}
      <div className="absolute inset-0">
        <ColorBends />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">

        {/* CONTENEDOR DEL NOMBRE */}
        {/* flex-col: En celular pone BRYAN arriba y SANCHEZ abajo.
            md:flex-row: En PC los pone en una sola línea.
            gap-2: Espacio pequeño entre líneas en móvil.
            md:gap-6: Espacio entre palabras en PC.
        */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-6 mb-4">
          
          {/* PRIMERA PALABRA: BRYAN */}
          <BlurText
            text="BRYAN"
            delay={200}
            animateBy="letters"
            direction="top"
            // Móvil: text-5xl (Grande pero cabe)
            // PC: md:text-6xl (Reducido para que no sea excesivo)
            className="text-5xl md:text-6xl font-bold text-white leading-tight" 
          />

          {/* SEGUNDA PALABRA: SANCHEZ */}
          <BlurText
            text="SANCHEZ"
            delay={200} // Mismo delay para que aparezcan juntos
            animateBy="letters"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white leading-tight" 
          />
          
        </div>

        {/* SUBTÍTULO 1 */}
        <BlurText
          text="Mi Portafolio"
          delay={80}
          animateBy="letters"
          direction="bottom"
          className="text-xl sm:text-3xl text-gray-400 mb-6 tracking-wide" 
        />

        {/* SUBTÍTULO 2 */}
        <BlurText
          text="Desarrollador Web Full Stack"
          delay={50}
          animateBy="words"
          direction="top"
          className="text-sm sm:text-xl text-gray-300 tracking-wider" 
        />

      </div>
      
      <ScrollIndicator />
    </div>
  );
}