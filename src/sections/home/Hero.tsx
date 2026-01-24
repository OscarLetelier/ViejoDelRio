import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { HiArrowNarrowRight, HiChevronDown } from "react-icons/hi";
import styles from "./Hero.module.css"; // Importamos el CSS Module
import { fadeInUp } from "./heroAnimations"; // Importamos la lógica de animación

const Hero: React.FC = () => {
  // Clases utilitarias para los botones (Reutilizables en este contexto)
  const btnBase =
    "px-10 py-4 rounded-full font-bold transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95";
  const btnPrimary = `${btnBase} bg-[#D97706] text-white shadow-xl shadow-orange-500/20 hover:bg-[#b56305] hover:shadow-orange-500/30 group`;
  const btnGhost = `${btnBase} bg-transparent border-2 border-[#2C1810]/10 text-[#2C1810] hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810]`;

  return (
    <section id="home" className={styles.section} aria-label="Introducción">
      {/* --- ELEMENTOS DECORATIVOS --- */}
      <div className={`${styles.blob} ${styles.blobOrange}`} />
      <div className={`${styles.blob} ${styles.blobBrown}`} />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Badge: "Talca - Chile" */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2} // Delay
          className={styles.badge}
        >
          <span className={styles.badgeText}>Talca • Chile</span>
        </motion.div>

        {/* Título Principal (H1) - Importancia SEO máxima */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className={styles.heading}
        >
          Tu pausa natural <br />
          <span className={styles.highlightWrapper}>
            junto al río
            {/* SVG Decorativo (Oculto para lectores de pantalla) */}
            <svg
              className={styles.svgUnderline}
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 5 Q 50 15 100 5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className={styles.description}
        >
          Café de especialidad y cocina con alma local. El refugio perfecto en
          el corazón del{" "}
          <strong className={styles.strongText}>Parque Río Claro</strong>.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-col sm:flex-row gap-5 w-full justify-center"
        >
          <ScrollLink
            to="menu"
            smooth={true}
            duration={800}
            offset={-80}
            className={btnPrimary}
            aria-label="Ver la carta digital"
          >
            <span>Ver Carta</span>
            <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>

          <ScrollLink
            to="location"
            smooth={true}
            duration={800}
            offset={-80}
            className={btnGhost}
            aria-label="Ver ubicación y cómo llegar"
          >
            Cómo llegar
          </ScrollLink>
        </motion.div>
      </div>

      {/* Indicador Scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <HiChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
