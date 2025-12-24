import React from 'react';

const Services = () => {
  
  const services = [
    {
      title: "Landing Page",
      subtitle: "Diseño de Alto Impacto",
      description: "Una página web de una sola sección diseñada específicamente para convertir visitantes en clientes o captar leads.",
      price: "Ideal para campañas y productos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      features: [
        "Diseño 100% Responsivo (Móvil/PC)",
        "Llamadas a la acción (CTA) claras",
        "Optimización de velocidad de carga",
        "Integración con redes sociales",
        "Formulario de contacto simple"
      ]
    },
    {
      title: "Web Corporativa",
      subtitle: "Presencia Profesional",
      description: "Sitio web multipágina para empresas que buscan establecer credibilidad y mostrar información detallada de sus servicios.",
      price: "Ideal para PyMES y Negocios",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      features: [
        "Hasta 5 secciones (Inicio, Nosotros, etc.)",
        "Optimización SEO Básica (Google)",
        "Panel autoadministrable (Opcional)",
        "Mapa de ubicación interactivo",
        "Correo corporativo vinculado"
      ]
    },
    {
      title: "E-Commerce",
      subtitle: "Tienda Online 24/7",
      description: "Plataforma completa de ventas con catálogo de productos, carrito de compras y pasarela de pagos segura.",
      price: "Ideal para vender productos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-pink-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      ),
      features: [
        "Catálogo de productos ilimitados",
        "Pasarela de pagos (Stripe/PayPal)",
        "Panel de administración de stock",
        "Carrito de compras dinámico",
        "Seguridad SSL incluida"
      ]
    }
  ];

  return (
    <section id="servicios" className="w-full py-24 bg-black text-white relative">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
            ¿Qué ofrezco?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Soluciones web a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">tu medida</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Desde sitios simples para captar atención hasta complejas tiendas en línea. 
            Cada proyecto está diseñado para funcionar rápido y verse increíble.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              
              {/* Icono Flotante */}
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:bg-blue-500/10 transition-colors">
                {service.icon}
              </div>

              {/* Títulos */}
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-blue-300/80 text-sm font-medium mb-4 uppercase tracking-wide">
                {service.subtitle}
              </p>

              {/* Descripción */}
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Lista de Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    {/* Checkmark Icon */}
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Etiqueta inferior */}
              <div className="pt-6 border-t border-white/5">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {service.price}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;