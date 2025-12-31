import React from "react";
import { useLocation } from "react-router-dom"; // Importante
import Header from "../Header/Header"; // O donde tengas tu componente Header/Navbar
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const isMenuPage = location.pathname === "/menu";

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      {!isMenuPage && <Header />}

      <main className="grow" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
