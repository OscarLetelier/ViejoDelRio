import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C1810] text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Identidad */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            El Viejo del Río
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Un espacio de encuentro en el corazón del Parque Río Claro. Café de
            especialidad, tradición y naturaleza en un solo lugar.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D97706] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#D97706] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-[#D97706] transition-colors">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Columna 2: Horarios */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Horarios</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between max-w-[200px]">
              <span>Lun - Vie:</span>
              <span className="font-semibold text-white">10:00 - 20:00</span>
            </li>
            <li className="flex justify-between max-w-[200px]">
              <span>Sáb - Dom:</span>
              <span className="font-semibold text-white">09:00 - 21:00</span>
            </li>
            <li className="mt-4 text-[#D97706] text-xs">
              * Horarios sujetos a eventos del parque
            </li>
          </ul>
        </div>

        {/* Columna 3: Ubicación */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Encuéntranos</h4>
          <div className="flex items-start gap-2 mb-3">
            <HiLocationMarker className="mt-1 text-[#D97706]" size={20} />
            <p className="text-sm">
              Parque Río Claro, Sector Muelle.
              <br />
              Talca, Región del Maule.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <HiPhone className="text-[#D97706]" size={20} />
            <p className="text-sm">+56 9 1234 5678</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} El Viejo del Río. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
