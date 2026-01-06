import React from "react";
// import { useLocation } from "react-router-dom"; // Importante if needed later
import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      <Header />

      <main className="grow" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
