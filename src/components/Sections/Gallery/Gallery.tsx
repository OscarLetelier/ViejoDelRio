import React from "react";
import { FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import { fadeUpItem } from "./galleryAnimations";

// Definimos los tipos de layout permitidos
type GridLayout = "standard" | "tall" | "big";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  layout: GridLayout; // Mucho más limpio que pasar strings de clases
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800",
    alt: "Latte Art en la mesa",
    layout: "tall", // Vertical
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800",
    alt: "Granos tostados",
    layout: "standard",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    alt: "Dulces del día",
    layout: "standard",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561",
    alt: "Atardecer en el Río",
    layout: "big", // El protagonista
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507133750069-bef72f3707a9?q=80&w=800",
    alt: "Disfrutando el parque",
    layout: "standard",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800",
    alt: "Refresco de verano",
    layout: "standard",
  },
];

// Helper para mapear el layout a la clase CSS correspondiente
const getCardClass = (layout: GridLayout) => {
  switch (layout) {
    case "tall":
      return styles.cardTall;
    case "big":
      return styles.cardBig;
    default:
      return styles.cardStandard;
  }
};

const Gallery: React.FC = () => {
  return (
    <section
      id="gallery"
      className={styles.section}
      aria-label="Galería de fotos"
    >
      <div className={styles.container}>
        {/* --- HEADER --- */}
        <div className={styles.headerWrapper}>
          <div className="text-left">
            <span className={styles.subHeading}>Social</span>
            <h2 className={styles.heading}>
              Instantes <br />
              <span className={styles.highlight}>Inolvidables</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} group`}
            aria-label="Síguenos en Instagram"
          >
            <FaInstagram size={20} />
            <span className={styles.ctaText}>@ElViejoDelRio</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- BENTO GRID --- */}
        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              custom={index} // Pasamos el índice para el delay escalonado
              viewport={{ once: true, margin: "-50px" }}
              className={`${styles.card} ${getCardClass(item.layout)}`}
            >
              {/* Imagen */}
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
                loading="lazy"
                width={item.layout === "big" ? 800 : 400} // Ayuda al navegador a reservar espacio
                height={item.layout === "tall" ? 600 : 400}
              />

              {/* Overlay Interactivo */}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <FaInstagram className="text-white text-3xl mx-auto mb-2 drop-shadow-lg" />
                  <span className={styles.overlayBadge}>Ver Post</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
