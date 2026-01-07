import { type Variants } from "framer-motion";

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delayIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayIndex * 0.1, // Stagger effect manual
      ease: "easeOut",
    },
  }),
};
