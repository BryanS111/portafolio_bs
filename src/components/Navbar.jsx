import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Cerrar menú móvil

    // LÓGICA ESPECIAL PARA INICIO:
    // Si el link es "Inicio", nos vamos directo al tope de la página (0,0)
    if (href === "#inicio") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    // LÓGICA PARA LAS DEMÁS SECCIONES:
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Espacio para que el menú no tape el título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/30 backdrop-blur-md transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* LOGO: También configurado para llevarte al tope */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScroll(e, "#inicio")}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tighter">
            BRYAN
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
              .DEV
            </span>
          </span>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none transition-transform duration-300 active:scale-95"
        >
          <span className="sr-only">Open main menu</span>
          <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </div>
        </button>

        {/* LINKS */}
        <div 
          className={`w-full md:block md:w-auto overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out 
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"}`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white/10 rounded-lg bg-black/95 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;