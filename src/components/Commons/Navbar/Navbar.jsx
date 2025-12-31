import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUserGroup,
  HiSparkles,
  HiClipboardList,
  HiPhotograph,
  HiLocationMarker,
} from "react-icons/hi";
// Importamos motion y AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { title: "Inicio", to: "home", icon: HiHome },
    { title: "Nosotros", to: "about", icon: HiUserGroup },
    { title: "Servicios", to: "services", icon: HiSparkles },
    { title: "Menú", to: "menu", icon: HiClipboardList },
    { title: "Galería", to: "gallery", icon: HiPhotograph },
    { title: "Ubicación", to: "location", icon: HiLocationMarker },
  ];

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
  };

  const mobileLinkClasses =
    "flex items-center gap-4 text-lg font-medium text-[#5D4037] hover:text-[#D97706] hover:bg-[#efebe9] py-3 px-4 rounded-xl transition-all w-full cursor-pointer";

  return (
    <>
      {/* --- BARRA SUPERIOR FIJA --- */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#D7CCC8]/50 h-20 flex items-center transition-all">
        <div className="container mx-auto px-4 flex justify-between items-center w-full">
          {/* LOGO */}
          <RouterLink to="/" className="flex items-center gap-2 group z-[1000]">
            <div className="h-10 w-10 rounded-full border-2 border-[#2C1810] flex items-center justify-center bg-[#FAF9F6] overflow-hidden">
              <span className="text-[10px] leading-none text-center font-bold text-[#2C1810]">
                Viejo
                <br />
                Río
              </span>
            </div>
            <span className="text-xl font-extrabold text-[#2C1810] tracking-tight">
              VIEJO<span className="text-[#D97706]">RÍO</span>
            </span>
          </RouterLink>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              isHomePage ? (
                <ScrollLink
                  key={link.title}
                  to={link.to}
                  {...scrollProps}
                  className="text-sm font-bold text-[#5D4037] hover:text-[#D97706] cursor-pointer transition-colors uppercase tracking-wide"
                >
                  {link.title}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.title}
                  to={`/?section=${link.to}`}
                  className="text-sm font-bold text-[#5D4037] hover:text-[#D97706] transition-colors uppercase tracking-wide"
                >
                  {link.title}
                </RouterLink>
              )
            )}

            <RouterLink
              to="/menu"
              className="bg-[#D97706] text-white px-6 py-2 rounded-full font-bold hover:bg-[#bf5900] transition-colors shadow-lg"
            >
              Pedir
            </RouterLink>
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-[#2C1810] bg-[#efebe9] rounded-lg hover:bg-[#D97706] hover:text-white transition-colors z-[1000]"
          >
            <HiMenu size={28} />
          </button>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL (Aquí usamos 'motion' para solucionar el error) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Usamos motion.div para el fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm"
            />

            {/* 2. Usamos motion.aside para el panel lateral */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[80%] max-w-[300px] h-full bg-[#FAF9F6] z-[9999] shadow-2xl flex flex-col border-l border-[#D7CCC8]"
            >
              {/* Header Sidebar */}
              <div className="p-6 flex justify-between items-center border-b border-[#D7CCC8]">
                <span className="text-xl font-extrabold text-[#2C1810]">
                  MENÚ
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-[#D97706] bg-gray-100 rounded-full"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                {navLinks.map((link) =>
                  isHomePage ? (
                    <ScrollLink
                      key={link.title}
                      to={link.to}
                      {...scrollProps}
                      className={mobileLinkClasses}
                      activeClass="!text-[#D97706] bg-orange-50 font-bold border-l-4 border-[#D97706]"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="text-[#D97706] text-xl" />
                      {link.title}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      key={link.title}
                      to="/"
                      className={mobileLinkClasses}
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="text-[#D97706] text-xl" />
                      {link.title}
                    </RouterLink>
                  )
                )}
              </div>

              {/* Footer Sidebar */}
              <div className="p-6 border-t border-[#D7CCC8] bg-white">
                <RouterLink
                  to="/menu"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#D97706] text-white py-3 rounded-xl font-bold shadow-lg"
                >
                  <HiClipboardList size={20} />
                  Ver Carta Completa
                </RouterLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
