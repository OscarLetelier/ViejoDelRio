import React from "react";
import Hero from "@/components/Sections/Home/Hero";
import About from "@/components/Sections/About/About";
import Menu from "@/components/Sections/Menu/Menu";
import Gallery from "@/components/Sections/Gallery/Gallery";
import Location from "@/components/Sections/Location/Location";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
    </>
  );
};

export default HomePage;
