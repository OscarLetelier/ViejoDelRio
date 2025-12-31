import React from "react";

const MenuDestacado = () => {
  // Datos simulados (puedes cambiarlos por tus fotos reales luego)
  const items = [
    {
      id: 1,
      title: "Cappuccino Italiano",
      price: "$2.500",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
      tag: "Caliente",
    },
    {
      id: 2,
      title: "Mote con Huesillo (500cc)",
      price: "$3.000",
      image:
        "https://images.unsplash.com/photo-1621354366914-f584e031c518?q=80&w=800&auto=format&fit=crop", // Foto genérica de bebida
      tag: "Refrescante",
    },
    {
      id: 3,
      title: "Alfajor de Maicena",
      price: "$1.200",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
      tag: "Dulce",
    },
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#2C1810]">
              Favoritos del Público
            </h2>
            <p className="text-gray-500 mt-2">
              Lo que más piden nuestros clientes en el parque.
            </p>
          </div>
          <button className="hidden md:block text-[#D97706] font-bold hover:underline cursor-pointer">
            Ver menú completo &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Imagen con efecto Zoom */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

              {/* Contenido flotante */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                <span className="bg-[#D97706] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  {item.tag}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-lg font-bold text-orange-200">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-[#D97706] font-bold border border-[#D97706] px-6 py-2 rounded-full">
            Ver menú completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuDestacado;
