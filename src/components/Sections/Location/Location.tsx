import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const Location: React.FC = () => {
  return (
    <section
      id="location"
      className="relative bg-[#2C1810] py-24 text-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="inline-block p-4 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
          <HiLocationMarker className="text-[#D97706] text-4xl" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Vienes al Parque?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Estamos ubicados en el corazón del Parque Río Claro, sector muelle.
          <br />
          El lugar perfecto para terminar tu paseo.
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D97706] text-white px-10 py-4 rounded-full font-bold hover:bg-[#b56305] transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/50"
        >
          Ver Mapa en Google
        </a>
      </div>
    </section>
  );
};

export default Location;
