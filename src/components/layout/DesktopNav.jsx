import React from "react";

const DesktopNav = ({ links }) => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a key={link.name} href={link.href} className="relative group py-2">
          {/* Texto Estilizado */}
          <span className="text-sm font-bold uppercase tracking-widest text-gray-200 group-hover:text-white transition-colors duration-300">
            {link.name}
          </span>

          {/* Línea animada inferior (Efecto elegante) */}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}

      {/* Botón Call to Action Separado */}
      <div className="pl-4 border-l border-white/20 ml-2">
        <a
          href="#menu"
          className="px-6 py-2.5 rounded-full bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#b56305] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform"
        >
          Ver Carta
        </a>
      </div>
    </nav>
  );
};

export default DesktopNav;
