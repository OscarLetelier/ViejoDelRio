import React from "react";
import { HiX } from "react-icons/hi";

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <>
      {/* Overlay Oscuro (Fondo borroso detrás del menú) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer Lateral (El menú en sí) */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#2C1810] z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header del Menú Móvil */}
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <span className="text-xl font-bold text-white">Menú</span>
            <button
              onClick={onClose}
              className="text-white hover:text-[#D97706] transition-colors"
            >
              <HiX size={30} />
            </button>
          </div>

          {/* Enlaces */}
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="text-lg font-medium text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] opacity-0 hover:opacity-100 transition-opacity"></span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Footer del Menú Móvil */}
          <div className="mt-auto pt-8 border-t border-white/10">
            <a
              href="#menu"
              onClick={onClose}
              className="block w-full text-center py-3 rounded-xl bg-white text-[#2C1810] font-bold hover:bg-gray-100 transition-colors"
            >
              Pedir Ahora
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
