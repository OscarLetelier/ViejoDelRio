import React from "react";
import { Link } from "react-router-dom"; // Importante para la navegación interna
import { menuItems } from "../../../data/menu"; // Importamos los datos

const MenuDestacado = () => {
  // Filtramos solo los que tienen featured: true
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm">
              Nuestra Carta
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mt-2">
              Favoritos del Público
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Lo que más piden nuestros clientes en el parque.
            </p>
          </div>

          {/* Botón Desktop */}
          <Link
            to="/menu"
            className="hidden md:inline-flex items-center text-[#D97706] font-bold hover:text-[#2C1810] transition-colors gap-2 border-b-2 border-transparent hover:border-[#D97706]"
          >
            Ver menú completo <span className="text-xl">&rarr;</span>
          </Link>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[350px]"
            >
              {/* Imagen con efecto Zoom */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay gradiente oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Tag Flotante */}
              {item.tag && (
                <div className="absolute top-4 right-4">
                  <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {item.tag}
                  </span>
                </div>
              )}

              {/* Contenido flotante inferior */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1 font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
                <span className="text-xl font-bold text-[#D97706]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Móvil */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/menu"
            className="inline-block text-[#D97706] font-bold border-2 border-[#D97706] px-8 py-3 rounded-full hover:bg-[#D97706] hover:text-white transition-all"
          >
            Ver menú completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuDestacado;
