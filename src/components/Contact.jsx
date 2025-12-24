import React, { useState } from 'react';

const Contact = () => {
  // Estado para controlar el Modal de Privacidad
  const [showPrivacy, setShowPrivacy] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      username: "@bryansanchez", 
      link: "https://www.linkedin.com/in/bryan-s%C3%A1nchez-dev/", 
      color: "hover:border-blue-500 hover:shadow-blue-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" className="text-blue-500">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.359 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      username: "+503 7040-4773 (Mi Agencia)", 
      link: "https://wa.me/50370404773", 
      color: "hover:border-green-500 hover:shadow-green-500/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" className="text-green-500">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      username: "BryanS111", 
      link: "https://github.com/BryanS111", 
      color: "hover:border-white hover:shadow-white/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" className="text-white">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contacto" className="w-full py-24 bg-black text-white relative border-t border-white/5">
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Conectemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">ahora</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Estoy disponible para nuevos proyectos. Envíame un mensaje y hablemos de cómo puedo ayudarte.
          </p>
        </div>

        {/* GRID DE TARJETAS DE CONTACTO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center gap-4 p-8 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${social.color}`}
            >
              {/* Icono con efecto de escala */}
              <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {social.username}
                </p>
              </div>

              {/* Texto "Ir ahora" invisible que aparece al hacer hover */}
              <span className="text-xs font-semibold text-gray-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Conectar &rarr;
              </span>
            </a>
          ))}

        </div>

        {/* Footer Minimalista integrado */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Bryan Sanchez. Desarrollado con React & Tailwind.</p>
          
          <div className="flex gap-6">
            {/* AQUÍ ESTÁ EL CAMBIO: Botón que abre el modal en vez de enlace # */}
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="hidden md:inline">•</span>
            <a href="mailto:sanchez041205@gmail.com" className="hover:text-white transition-colors">sanchez041205@gmail.com</a>
          </div>
        </div>

      </div>

      {/* --- MODAL DE POLÍTICA DE PRIVACIDAD --- */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
            
            {/* Botón cerrar (X) */}
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-white">Política de Privacidad</h2>
            <div className="text-gray-400 space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Última actualización:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                En Bryan.dev, valoro tu privacidad. Esta política explica de manera sencilla cómo manejo la información en este sitio web.
              </p>
              
              <h3 className="text-white font-semibold text-lg mt-4">1. Recolección de Datos</h3>
              <p>
                Actualmente, este sitio web funciona principalmente como un portafolio informativo. No utilizo bases de datos propias para almacenar tu información personal de manera persistente. Los enlaces de contacto (WhatsApp, Email, LinkedIn) te redirigen a plataformas externas.
              </p>

              <h3 className="text-white font-semibold text-lg mt-4">2. Uso de la Información</h3>
              <p>
                Si decides contactarme a través de los enlaces proporcionados, utilizaré tus datos de contacto únicamente para responder a tu consulta o propuesta laboral. No comparto, vendo ni alquilo tu información a terceros.
              </p>

              <h3 className="text-white font-semibold text-lg mt-4">3. Cookies y Tecnologías</h3>
              <p>
                Este sitio está construido con React y puede utilizar almacenamiento local básico del navegador para mejorar la experiencia de usuario (como recordar tu preferencia de tema o idioma, si aplicase). No utilizo cookies de rastreo publicitario invasivas.
              </p>

              <h3 className="text-white font-semibold text-lg mt-4">4. Contacto</h3>
              <p>
                Si tienes alguna duda sobre esta política, puedes escribirme directamente a mi correo electrónico listado en el pie de página.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Entendido
              </button>
            </div>

          </div>
          {/* Cierra al dar clic fuera del cuadro */}
          <div className="absolute inset-0 -z-10" onClick={() => setShowPrivacy(false)}></div>
        </div>
      )}

    </section>
  );
};

export default Contact;