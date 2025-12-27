import { useState } from "react";
// Importa tu foto
import profilePic from '../assets/picPerfil.png'; 
// IMPORTA TU PDF AQUÍ (Asegúrate que el nombre coincida exactamente)
import cvFile from '../assets/BryanSanchez_CV.pdf'; 

const About = () => {
  return (
    // bg-zinc-950: Un negro ligeramente más claro que el Hero para diferenciar secciones
    <section id="sobre-mi" className="w-full py-20 bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Decoración de fondo (Mancha azul difuminada) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA 1: IMAGEN CON EFECTO NEÓN */}
          <div className="relative group">
            {/* Borde brillante detrás de la foto */}
            <div className="absolute -inset-1 bg-gradient-to-r transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              {/* AQUÍ PONES TU FOTO */}
              <img 
                src={profilePic}
                alt="Bryan Sanchez" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* COLUMNA 2: TEXTO Y BIO */}
          <div className="flex flex-col gap-6">
            
            {/* Título pequeño */}
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              ¿Quién soy?
            </span>

            {/* Título Principal */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Desarrollador apasionado por crear <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">experiencias digitales</span> únicas.
            </h2>

            {/* Párrafo de descripción */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Hola, soy Bryan. Me especializo en transformar ideas abstractas en aplicaciones web funcionales y atractivas. 
              Mi enfoque combina un código limpio y eficiente con un diseño moderno que captura la atención del usuario.
              Siempre estoy aprendiendo nuevas tecnologías para llevar mis proyectos al siguiente nivel.
            </p>

            {/* STACK TECNOLÓGICO (Reemplazo de Estadísticas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              
              {/* Card 1: FRONTEND */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
                {/* Icono opcional o Título */}
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-400">Frontend</span>
                  {/* Pequeño punto decorativo */}
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                </h3>
                
                {/* Lista de tecnologías limpia */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3.
                </p>
              </div>

              {/* Card 2: BACKEND */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-purple-400">Backend & DB</span>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                </h3>
                
                {/* Aquí quitamos PhpMyAdmin para que se vea más 'Pro' */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  SQL Server, MySQL, Firebase, Node.js.
                </p>
              </div>

            </div>

            <div className="mt-2">
                <a 
                  href={cvFile}  // <--- AQUÍ USAS LA VARIABLE IMPORTADA
                  download="BryanSanchez_CV.pdf" // Nombre para guardar
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20 text-sm md:text-base"
                >
                  Descargar CV
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;