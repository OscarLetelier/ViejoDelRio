import React from "react";
// 1. Importamos el Layout (sin "type")
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";

// 2. Importamos todas las secciones que creamos
import Hero from "@/components/Sections/Home/Hero";
import About from "@/components/Sections/About/About";
import Menu from "@/components/Sections/Menu/Menu";
import Gallery from "@/components/Sections/Gallery/Gallery";
import Location from "@/components/Sections/Location/Location";

const App: React.FC = () => {
  return (
    // 3. MainLayout actúa como el contenedor (Header + Footer + Ruido)
    <MainLayout>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
    </MainLayout>
  );
};

export default App;
