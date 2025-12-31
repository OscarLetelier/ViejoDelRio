import React from "react";
import { HiSparkles } from "react-icons/hi";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF9F6] transition-opacity duration-500">
      {/* Contenedor de Animación */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Círculo Exterior Giratorio */}
        <div className="w-24 h-24 border-4 border-[#D7CCC8] border-t-[#D97706] rounded-full animate-spin absolute"></div>

        {/* Logo Central (Estático o palpitante) */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm z-10 animate-pulse">
          <div className="text-center leading-none">
            <span className="block text-[8px] font-bold text-[#2C1810]">
              VIEJO
            </span>
            <span className="block text-[8px] font-bold text-[#2C1810]">
              RÍO
            </span>
          </div>
        </div>
      </div>

      {/* Texto de Carga */}
      <div className="flex items-center gap-2 text-[#2C1810] font-bold tracking-widest text-sm uppercase animate-pulse">
        <HiSparkles className="text-[#D97706]" />
        <span>Preparando tu café...</span>
      </div>
    </div>
  );
};

export default Preloader;
