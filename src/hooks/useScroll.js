import { useState, useEffect } from "react";

/**
 * Hook para detectar si el usuario ha hecho scroll más allá de un umbral.
 * @param {number} threshold - Píxeles de scroll para activar el estado (default 20px)
 * @returns {boolean} - True si se ha pasado el umbral
 */
export const useScroll = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function para evitar memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
