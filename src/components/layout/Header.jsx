import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Menú", href: "#menu" },
  { name: "Galería", href: "#gallery" },
  { name: "Ubicación", href: "#location" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#2C1810]/95 backdrop-blur-md border-b border-white/5 shadow-xl transition-all h-20 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* --- LOGO --- */}
          <a href="#home" className="flex items-center gap-3 group z-50">
            <div className="relative h-12 w-12 flex items-center justify-center">
              {/* Círculo decorativo detrás */}
              <div className="absolute inset-0 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              {/* Texto Logo */}
              <div className="relative z-10 flex flex-col items-center justify-center leading-none">
                <span className="font-bold text-[10px] text-[#2C1810] uppercase tracking-tighter">
                  Viejo
                </span>
                <span className="font-bold text-[10px] text-[#2C1810] uppercase tracking-tighter">
                  Del Río
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-wide text-white leading-none group-hover:text-[#D97706] transition-colors duration-300">
                El Viejo del Río
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest hidden md:block">
                Café & Parque
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAV (Componente Separado) --- */}
          <DesktopNav links={NAV_LINKS} />

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="md:hidden p-2 text-white hover:text-[#D97706] transition-colors focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <HiMenu size={32} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU (Componente Separado) --- */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
};

export default Header;
