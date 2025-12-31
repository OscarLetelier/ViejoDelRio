import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiSparkles } from "react-icons/hi";
import { menuItems } from "../../data/menu";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("");

  // 1. Obtener categorías únicas dinámicamente
  const categories = [...new Set(menuItems.map((item) => item.category))];

  // 2. Efecto para scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 3. Función para navegar suavemente a la sección
  const scrollToCategory = (cat) => {
    const element = document.getElementById(cat);
    if (element) {
      // Ajustamos el offset considerando la altura de la nueva barra sticky (~120px)
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(cat);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-800">
      {/* --- ENCABEZADO DECORATIVO --- */}
      <div className="relative bg-[#2C1810] py-12 px-4 text-center">
        {/* Patrón de fondo sutil (opcional) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:20px_20px]"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F0E6] font-serif mb-2 tracking-wide">
            Nuestra Carta
          </h1>
          <p className="text-[#D97706] text-sm md:text-base font-medium tracking-widest uppercase">
            Sabores del Río Claro
          </p>
        </div>
      </div>

      {/* --- BARRA DE NAVEGACIÓN STICKY (Volver + Categorías) --- */}
      <div className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#D7CCC8]/60 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Botón Volver */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#5D4037] hover:text-[#D97706] font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <div className="p-1.5 bg-white rounded-full shadow-sm border border-[#EFEBE9]">
                <HiArrowLeft className="text-base" />
              </div>
              <span>Volver</span>
            </Link>

            {/* Separador Vertical (Solo Desktop) */}
            <div className="hidden md:block w-px h-6 bg-[#D7CCC8]"></div>

            {/* Scroll Horizontal de Categorías */}
            <div className="flex overflow-x-auto gap-2 pb-1 md:pb-0 no-scrollbar w-full md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`
                        whitespace-nowrap px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border flex-shrink-0
                        ${
                          activeCategory === cat
                            ? "bg-[#D97706] text-white border-[#D97706] shadow-md transform scale-105"
                            : "bg-white text-[#5D4037] border-[#EFEBE9] hover:border-[#D97706] hover:text-[#D97706]"
                        }
                        `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENIDO DEL MENÚ --- */}
      <div className="container mx-auto px-4 max-w-5xl py-10">
        {categories.map((category) => (
          <section key={category} id={category} className="mb-16 scroll-mt-32">
            {/* Título de Sección */}
            <div className="flex items-center gap-3 mb-8 border-b border-[#D7CCC8] pb-3">
              <HiSparkles className="text-[#D97706] text-2xl" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C1810] font-serif">
                {category}
              </h2>
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#EFEBE9] group flex gap-4 items-start"
                  >
                    {/* Imagen (Cuadrada y elegante) */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Badge si tiene tag */}
                      {item.tag && (
                        <span className="absolute bottom-0 left-0 w-full bg-[#D97706]/90 text-white text-[10px] font-bold text-center py-0.5 backdrop-blur-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Información */}
                    <div className="flex flex-col flex-grow h-full justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-[#2C1810] text-lg leading-tight font-serif">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Precio y Acción */}
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-[#EFEBE9]">
                        <span className="text-[#D97706] font-extrabold text-lg">
                          {item.price}
                        </span>
                        {/* Botón visual "Agregar" */}
                        <button className="text-[10px] uppercase font-bold text-[#5D4037] bg-[#FAF9F6] border border-[#D7CCC8] px-3 py-1 rounded-full hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-colors">
                          Ver detalle
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* Footer simple del menú */}
        <div className="text-center mt-12 mb-8">
          <p className="text-[#8D6E63] text-sm italic">
            * Precios sujetos a disponibilidad y cambios sin previo aviso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
