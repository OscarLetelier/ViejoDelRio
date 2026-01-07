import React, { useEffect, useState } from "react";
import Header from "@/components/Layouts/Header/Header";
// import Footer from "@/components/Layouts/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  // Mostrar botones flotantes al bajar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-rio-sand relative font-sans selection:bg-rio-accent selection:text-white">
      {/* --- TEXTURA GLOBAL (NOISE) --- */}
      {/* Esto da el efecto de papel/antiguo a toda la web */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-[9999] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Header />

      <main className="grow flex flex-col relative z-10">{children}</main>

      {/* --- BOTONES FLOTANTES --- */}
      <AnimatePresence>
        {showButton && (
          <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
            {/* Scroll Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="bg-cafe-dark text-rio-accent p-3 rounded-full shadow-lg border border-rio-accent/20"
            >
              <FaArrowUp size={20} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
