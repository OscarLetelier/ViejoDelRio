// 1. Importamos el tipo 'Variants' desde framer-motion
import { type Variants } from "framer-motion";

// 2. Tipamos explícitamente la constante
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  // Al tiparlo como Variants, TypeScript ya sabe que esta función es válida
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};
