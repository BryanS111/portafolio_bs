import React, { useState } from 'react';

const Projects = () => {
  // Estado para controlar qué proyecto se ve (Índice del carrusel)
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Estado para controlar si el video está abierto y cuál es
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      title: "E-Commerce Exclusivo",
      subtitle: "Plataforma de Ventas B2B",
      description: "Solución completa de comercio para empresa salvadoreña en el area de mecatronica con gestión de inventario en tiempo real y panel administrativo personalizado. Diseñado bajo acuerdos de confidencialidad.",
      tech: ["React.js", "Node.js", "MongoDB"],
      image: "skyautomation.webp", // Foto de fondo
      video: "/videos/skyautomation_.mp4" // <--- AQUÍ PONDRÁS LA RUTA DE TU VIDEO LOCAL
    },
    {
      title: "Web Corporativa para Cafetería",
      subtitle: "Presencia Web para emprendimientos locales",
      description: "Sitio Web para cafetería con diseño moderno y funcionalidad intuitiva. Incluye menú interactivo, galería de imágenes y formulario de contacto. Optimizado para SEO y velocidad.",
      tech: ["React.js", "Firebase", "Tailwind CSS"],
      image: "patronumcafe.webp",
      video: "/videos/patronumcafe_.mp4"
    },
    {
      title: "Plataforma Educativa Online",
      subtitle: "Integrando la IA a la educación",
      description: "Plataforma educativa innovadora que combina inteligencia artificial con contenido interactivo para mejorar el aprendizaje a traves de diferentes metodologías de estudio. Proyecto desarrollado para el Centro Educativo Colonia Sensunapan.",
      tech: ["React.js", "Tailwind CSS", "OpenAI API"],
      image: "sensulearning.webp",
      video: "/videos/sensulearning_.mp4"
    },
    {
      title: "Scaner de CVs con IA integrada",
      subtitle: "Optimización de procesos de reclutamiento",
      description: "Sistema automatizado para escanear y analizar currículums usando inteligencia artificial. Permite filtrar candidatos según criterios específicos, mejorando la eficiencia del proceso de selección de una gran cantidad de hojas de vida.",
      tech: ["Python", "Tkinter", "DeepSearch API"],
      image: "vitaescan.webp",
      video: "/videos/vitaescan_.mp4"
    }
  ];

  // Funciones para navegar el carrusel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="proyectos" className="w-full py-24 bg-black text-white relative overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Título */}
        <div className="mb-12 text-center">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Destacados</span></h2>
        </div>

        {/* --- AREA DEL CARRUSEL --- */}
        <div className="relative max-w-5xl mx-auto">

          {/* Tarjeta Principal (Con animación key para reiniciar el efecto al cambiar) */}
          <div key={currentIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm animate-fade-in-up">
            
            {/* Columna Izquierda: Imagen */}
            <div className="relative h-64 md:h-auto overflow-hidden group">
              <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-/50"></div>
            </div>

            {/* Columna Derecha: Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2">
                {projects[currentIndex].subtitle}
              </h3>
              <h2 className="text-3xl font-bold mb-4 text-white">
                {projects[currentIndex].title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {projects[currentIndex].description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[currentIndex].tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón VIDEO */}
              <div>
                <button 
                  onClick={() => setActiveVideo(projects[currentIndex].video)}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/20 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-pulse">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  Vizualizar Proyecto
                </button>
                <p className="mt-3 text-xs text-gray-500 italic">
                  * Código privado por acuerdos de confidencialidad.
                </p>
              </div>
            </div>

          </div>

          {/* BOTONES DE NAVEGACIÓN (FLECHAS) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-600 border border-white/10 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-600 border border-white/10 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Indicadores (Puntitos) */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* --- MODAL DE VIDEO (Overlay) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          
          {/* Contenedor del Video */}
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Reproductor de Video */}
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-auto aspect-video"
            >
              Tu navegador no soporta videos.
            </video>
          </div>

          {/* Cerrar al hacer click fuera */}
          <div className="absolute inset-0 -z-10" onClick={() => setActiveVideo(null)}></div>
        </div>
      )}

    </section>
  );
};

export default Projects;