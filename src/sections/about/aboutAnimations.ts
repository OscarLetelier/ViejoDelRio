// components/Sections/About/aboutAnimations.ts
import { type Variants } from "framer-motion";

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: customDelay, ease: "easeOut" },
  }),
};

export const popIn: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 200, delay: 0.5 },
  },
};
