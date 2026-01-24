import React from "react";
import { ClipLoader } from "react-spinners";

const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FAF9F6] z-9999">
      {/* 1. Textura de Ruido (Para continuidad visual con el MainLayout) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Spinner con el color de acento (Naranja/Tostado) */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <ClipLoader
          color="#D97706" // var(--color-rio-accent)
          loading={true}
          size={50}
          speedMultiplier={0.8} // Un poco más lento para dar sensación de calma/relax
          aria-label="Cargando..."
        />

        {/* 3. Texto de Marca con Tipografía Serif */}
        <div className="text-center">
          <p className="text-[#2C1810] text-xl font-bold font-serif tracking-wide animate-pulse">
            El Viejo del Río
          </p>
          <span className="text-[#8B5E3C] text-xs font-sans uppercase tracking-[0.2em] mt-2 block">
            Preparando el ambiente...
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullPageLoader;
