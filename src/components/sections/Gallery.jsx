import React from "react";

const Gallery = () => {
  // Imágenes placeholder
  const images = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800", // Café mesa
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800", // Grano café
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", // Muffin
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800", // Lugar
  ];

  return (
    <section className="py-20 bg-[#F5F0E6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2C1810] mb-2">
          Momentos en el Río
        </h2>
        <p className="text-gray-500 mb-10">
          Síguenos en Instagram @ElViejoDelRio
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group h-64 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Galería ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
