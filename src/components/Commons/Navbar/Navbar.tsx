import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUserGroup,
  HiClipboardList,
  HiFire,
  HiPhotograph,
  HiLocationMarker,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Inicio", to: "home", icon: HiHome },
    { title: "Nosotros", to: "about", icon: HiUserGroup },
    { title: "Tostaduria", to: "roastery", icon: HiFire },
    { title: "Menú", to: "menu", icon: HiClipboardList },
    { title: "Galería", to: "gallery", icon: HiPhotograph },
    { title: "Ubicación", to: "location", icon: HiLocationMarker },
  ];

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 700, // Un poco más lento para suavidad
  };

  return (
    <>
      {/* --- BARRA DE NAVEGACIÓN --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-300 ${
          isScrolled || isOpen
            ? "glass-panel shadow-warm" // Clase definida en CSS global
            : "bg-transparent py-2" // Más alto y limpio al inicio
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
          {/* LOGO - Estilo "Sello de Café" */}
          <ScrollLink
            to="home"
            {...scrollProps}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative h-12 w-12 flex items-center justify-center">
              {/* Círculo decorativo rotando lentamente */}
              <div className="absolute inset-0 border-2 border-cafe-dark rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-1 border border-dashed border-rio-accent rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="z-10 bg-cafe-dark text-rio-sand h-10 w-10 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="font-serif text-[10px] italic font-bold leading-none mt-1">
                  V
                </span>
                <span className="text-[8px] leading-none mb-1">R</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-cafe-dark tracking-wide leading-none group-hover:text-rio-accent transition-colors">
                EL VIEJO
              </span>
              <span className="font-sans text-xs font-bold text-cafe-primary tracking-[0.2em] uppercase">
                del Río
              </span>
            </div>
          </ScrollLink>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.title}
                to={link.to}
                {...scrollProps}
                className="relative text-sm font-bold text-cafe-dark/80 hover:text-cafe-dark uppercase tracking-wider cursor-pointer group py-2"
              >
                {link.title}
                {/* Línea animada al hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rio-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </ScrollLink>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-cafe-dark rounded-lg hover:bg-cafe-light/30 transition-colors"
          >
            <HiMenu size={32} />
          </button>
        </div>
      </motion.nav>

      {/* --- MENÚ MÓVIL (OFF-CANVAS) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-cafe-dark/60 z-[60] backdrop-blur-sm"
            />

            {/* Panel Lateral con textura */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[85%] max-w-[320px] h-full bg-rio-sand z-[70] shadow-2xl flex flex-col border-l border-cafe-primary/20"
              style={{
                // Repetimos la textura sutil aquí también para continuidad
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Header del Menú Móvil */}
              <div className="p-6 flex justify-between items-center border-b border-cafe-light">
                <div>
                  <span className="block font-serif text-2xl font-bold text-cafe-dark">
                    Menú
                  </span>
                  <span className="text-xs text-cafe-primary font-bold tracking-widest uppercase">
                    Navegación
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-cafe-dark hover:text-rio-accent bg-white rounded-full shadow-sm transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Lista de Enlaces */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} // Efecto cascada
                  >
                    <ScrollLink
                      to={link.to}
                      {...scrollProps}
                      className="flex items-center gap-4 text-lg font-medium text-cafe-dark hover:text-rio-accent p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-cafe-light/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="p-2 bg-white rounded-full shadow-inner text-rio-accent">
                        <link.icon size={20} />
                      </span>
                      {link.title}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>

              {/* Footer del Menú Móvil */}
              <div className="p-6 border-t border-cafe-light bg-white/50">
                <p className="text-center text-[10px] text-cafe-primary mt-4 uppercase tracking-widest">
                  Talca • Maule • Chile
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
