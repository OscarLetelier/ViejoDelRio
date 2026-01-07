import React from "react";
import { motion } from "framer-motion";
import { HiSparkles, HiHeart, HiSun } from "react-icons/hi";
import styles from "./About.module.css";
import { slideInLeft, slideInUp, popIn } from "./aboutAnimations";

// --- DATA CONFIGURATION ---
const imgDetail =
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop";
const imgAmbient =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop";

const features = [
  {
    id: 1,
    icon: HiSparkles,
    title: "Tostaduría Propia",
    subtitle: "Frescura garantizada",
    iconColor: "text-[#D97706]", // Clases de Tailwind para colores específicos (utility first para colores está bien)
    bgColor: "bg-[#D97706]/10",
  },
  {
    id: 2,
    icon: HiSun,
    title: "Entorno Natural",
    subtitle: "Vista al Río Claro",
    iconColor: "text-green-700",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    icon: HiHeart,
    title: "Hecho con Amor",
    subtitle: "Recetas familiares",
    iconColor: "text-red-700",
    bgColor: "bg-red-100",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className={styles.section} aria-label="Sobre Nosotros">
      {/* Elemento decorativo */}
      <div className={styles.blobDecoration} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.gridWrapper}>
          {/* --- BLOQUE DE IMÁGENES --- */}
          <div className={styles.imageWrapper}>
            {/* Foto Fondo */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${styles.imgFrame} ${styles.imgAmbient}`}
            >
              <img
                src={imgAmbient}
                alt="Vista del Parque Río Claro"
                className={styles.imgObject}
                loading="lazy"
              />
            </motion.div>

            {/* Foto Frente */}
            <motion.div
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
              className={`${styles.imgFrame} ${styles.imgDetail}`}
            >
              <img
                src={imgDetail}
                alt="Detalle de café de especialidad"
                className={styles.imgObject}
                loading="lazy"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.badge}
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Desde
              </span>
              <span className="font-serif text-3xl font-bold text-[#D97706]">
                2018
              </span>
            </motion.div>
          </div>

          {/* --- BLOQUE DE TEXTO --- */}
          <div className={styles.contentWrapper}>
            <motion.div
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Subtítulo */}
              <div className={styles.subtitleWrapper}>
                <span className={styles.subtitleLine}></span>
                <span className={styles.subtitle}>Nuestra Historia</span>
              </div>

              {/* Título */}
              <h2 className={styles.heading}>
                El corazón del río, <br />
                <span className={styles.highlight}>
                  en cada taza.
                  {/* SVG Subrayado */}
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-[#D97706]/40"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>

              <p className={styles.descriptionMain}>
                <strong className="text-[#2C1810] font-serif">
                  "El Viejo del Río"
                </strong>{" "}
                nació de un deseo simple: recuperar la tradición de las tardes
                talquinas. Somos ese rincón en el{" "}
                <strong className="text-[#8B5E3C]">Parque Río Claro</strong>{" "}
                donde el tiempo se detiene.
              </p>

              <p className={styles.descriptionSecondary}>
                No somos solo una cafetería. Somos el aroma a grano tostado
                mezclándose con la brisa del río, el dulzor de un{" "}
                <strong>mote con huesillo</strong> artesanal y la sonrisa de
                quien te recibe como en casa.
              </p>

              {/* Grid de Características (Mapeado dinámicamente) */}
              <div className={styles.featuresGrid}>
                {features.map((feature) => (
                  <div key={feature.id} className={styles.featureItem}>
                    <div
                      className={`${styles.iconBox} ${feature.bgColor} ${feature.iconColor}`}
                    >
                      <feature.icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2C1810] text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
