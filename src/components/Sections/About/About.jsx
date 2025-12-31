import React from "react";
// Nota: En un proyecto real, estas URLs serían fotos locales de Talca
const imageUrl =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen con marco decorativo */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#D97706] rounded-2xl z-0 hidden md:block"></div>
            <img
              src={imageUrl}
              alt="Café a orillas del río"
              className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Badge flotante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block">
              <p className="text-[#2C1810] font-bold text-center leading-tight">
                Desde <br />
                <span className="text-[#D97706] text-2xl">2018</span>
              </p>
            </div>
          </div>

          {/* Contenido de Texto */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-2 block">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C1810] mb-6 leading-tight">
              Más que café, <br />
              una pausa en el río.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              "El Viejo del Río" nació con la idea de recuperar la tradición de
              disfrutar las tardes en el **Parque Río Claro**. Somos un punto de
              encuentro para familias, amigos y amantes de la naturaleza.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ya sea que vengas por un **mote con huesillo** bien helado después
              de un paseo en bote, o un **café de grano** para calentar la
              mañana, aquí siempre encontrarás una sonrisa y el mejor sabor de
              la región.
            </p>

            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {/* Avatares simulados de clientes/equipo */}
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=1"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=2"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=3"
                  alt=""
                />
              </div>
              <p className="text-sm text-gray-500">Amado por los Talquinos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
