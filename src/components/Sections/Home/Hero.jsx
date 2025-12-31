import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Para navegar a otra página
import { Link as ScrollLink } from "react-scroll"; // Para hacer scroll en la misma página

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561&auto=format&fit=crop"
          alt="Café en el parque"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Tu pausa perfecta en el <br />
          <span className="text-[#D97706]">Parque Río Claro</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 font-light max-w-2xl mx-auto">
          Disfruta de café de especialidad, desayunos campestres y el mejor mote
          con huesillo a orillas del río.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* BOTÓN 1: Ir a la página del Menú Completo */}
          <RouterLink
            to="/menu"
            className="px-8 py-3 bg-[#D97706] text-white font-bold rounded-full hover:bg-[#b56305] transition-all shadow-lg transform hover:-translate-y-1 cursor-pointer flex items-center justify-center"
          >
            Ver Menú
          </RouterLink>

          {/* BOTÓN 2: Bajar suavemente a la sección de Ubicación */}
          <ScrollLink
            to="location" // Este ID debe existir en tu sección de mapa/ubicación
            smooth={true}
            duration={800}
            offset={-80} // Ajuste para que el navbar no tape el título
            className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white text-white font-bold rounded-full hover:bg-white hover:text-[#2C1810] transition-all cursor-pointer flex items-center justify-center"
          >
            Cómo llegar
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
