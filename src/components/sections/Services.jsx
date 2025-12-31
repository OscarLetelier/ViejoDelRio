import React from "react";
import { BiCoffee, BiSun, BiCookie } from "react-icons/bi"; // Usamos BoxIcons para variedad
import { HiOutlineClock } from "react-icons/hi";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <BiCoffee size={40} />,
      title: "Café de Especialidad",
      desc: "Granos seleccionados, tostado perfecto y preparado por baristas expertos.",
    },
    {
      id: 2,
      icon: <BiSun size={40} />,
      title: "Mote con Huesillo",
      desc: "El clásico chileno, bien helado y con el dulzor justo para el calor talquino.",
    },
    {
      id: 3,
      icon: <BiCookie size={40} />,
      title: "Pastelería Artesanal",
      desc: "Alfajores, galletas y tortas frescas hechas diariamente.",
    },
    {
      id: 4,
      icon: <HiOutlineClock size={40} />,
      title: "Desayunos & Brunch",
      desc: "Disponibles los fines de semana. Empieza tu día con energía frente al río.",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F0E6]">
      {" "}
      {/* Fondo Arena suave */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#D97706] font-bold uppercase tracking-wider text-sm">
            Nuestra Carta
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mt-2">
            Sabores del Río
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#D97706] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
