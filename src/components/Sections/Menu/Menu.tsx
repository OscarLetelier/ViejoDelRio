import React, { useState } from "react";
import { menuItems } from "@/data/menu";
import { HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Menu: React.FC = () => {
  const categories: string[] = ["Todos", ...new Set(menuItems.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filteredItems = activeCategory === "Todos"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm">
            Nuestra Carta
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mt-4 font-serif">
            Sabores del Río
          </h2>
          <div className="w-24 h-1 bg-[#D97706] mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Disfruta de nuestra selección de cafés, bebidas refrescantes y dulces tradicionales.
            Preparados con cariño para tu pausa en el parque.
          </p>
        </div>

        {/* Categorías (Filtros) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-[#D97706] text-white border-[#D97706] shadow-md transform scale-105"
                    : "bg-white text-[#5D4037] border-[#EFEBE9] hover:border-[#D97706] hover:text-[#D97706] hover:bg-orange-50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-[#EFEBE9] hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen */}
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Badge */}
                  {item.tag && (
                    <span className="absolute top-4 right-4 z-20 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                      {item.category}
                    </span>
                     <div className="flex items-center gap-1 text-[#D97706]">
                        {item.featured && <HiSparkles className="text-yellow-500" title="Destacado"/>}
                     </div>
                  </div>
                 
                  <h3 className="text-xl font-bold text-[#2C1810] mb-2 font-serif group-hover:text-[#D97706] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-dashed border-[#EFEBE9]">
                    <span className="text-2xl font-bold text-[#2C1810]">
                      {item.price}
                    </span>
                    <button className="text-sm font-bold text-[#5D4037] bg-[#FAF9F6] border border-[#D7CCC8] px-4 py-2 rounded-full hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all">
                      Ordenar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12 bg-[#F5F0E6] p-4 rounded-xl inline-block mx-auto">
             <p className="text-[#8D6E63] text-sm italic">
            * Consulta por nuestra disponibilidad diaria y opciones veganas.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Menu;
