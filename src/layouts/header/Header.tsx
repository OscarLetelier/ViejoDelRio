import React from "react";
import Navbar from "@/components/commons/navbar/Navbar";

const Header: React.FC = () => {
  return (
    // z-50 asegura que el menú esté sobre el contenido, pero bajo los modales (z-100)
    <header className="relative z-50">
      <Navbar />
    </header>
  );
};

export default Header;
