import React from "react";
import {
  HiLocationMarker,
  HiClock,
  HiPhone,
  HiExternalLink,
} from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "./Location.module.css";
import { fadeInRight, zoomInMap } from "./locationAnimations";

// Configuración de Datos de Contacto
const contactData = [
  {
    id: "address",
    icon: HiLocationMarker,
    title: "Ubicación",
    content: (
      <>
        Parque Río Claro, Sector Muelle. <br />
        Talca, Región del Maule.
      </>
    ),
  },
  {
    id: "hours",
    icon: HiClock,
    title: "Horario de Atención",
    content: (
      <>
        Mar - Dom: 10:00 am - 20:00 pm <br />
        <span className={styles.itemNote}>Lunes Cerrado por mantención</span>
      </>
    ),
  },
  {
    id: "phone",
    icon: HiPhone,
    title: "Contacto",
    content: "+56 9 1234 5678",
    isLink: true,
    href: "tel:+56912345678",
  },
];

const Location: React.FC = () => {
  return (
    <section
      id="location"
      className={styles.section}
      aria-label="Ubicación y Contacto"
    >
      {/* --- FONDO DECORATIVO (SVG Inline) --- */}
      <div className={styles.patternOverlay} aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="topo-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q 25 25 50 50 T 100 50"
              fill="none"
              stroke="#D7CCC8"
              strokeWidth="1"
            />
            <path
              d="M0 80 Q 25 55 50 80 T 100 80"
              fill="none"
              stroke="#D7CCC8"
              strokeWidth="1"
            />
            <path
              d="M0 20 Q 25 -5 50 20 T 100 20"
              fill="none"
              stroke="#D7CCC8"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* --- COLUMNA 1: INFORMACIÓN --- */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={styles.subHeading}>Encuéntranos</span>
            <h2 className={styles.heading}>
              Tu destino en el <br />
              <span className={styles.gradientText}>Parque Río Claro</span>
            </h2>

            {/* Lista Semántica de Contacto */}
            <address className={styles.contactList}>
              {contactData.map((item) => (
                <div key={item.id} className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <item.icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className={`${styles.itemDesc} hover:text-white transition-colors`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className={styles.itemDesc}>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>

            <div className="mt-10">
              <a
                // Enlace inteligente: Abre Google Maps en modo "Direcciones" hacia el Parque
                href="https://www.google.com/maps/dir/?api=1&destination=Parque+Rio+Claro,+Talca"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
                aria-label="Cómo llegar al Parque Río Claro en Google Maps"
              >
                <span>Cómo llegar con Waze/Google</span>
                <HiExternalLink />
              </a>
            </div>
          </motion.div>

          {/* --- COLUMNA 2: MAPA VISUAL --- */}
          <motion.div
            variants={zoomInMap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.mapFrame}
          >
            <iframe
              title="Mapa Ubicación El Viejo del Río"
              // Enlace proporcionado por ti:
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3645.2498917196363!2d-71.681133!3d-35.417339999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDI1JzAyLjQiUyA3McKwNDAnNTIuMSJX!5e1!3m2!1ses!2scl!4v1767817976645!5m2!1ses!2scl"
              width="100%"
              height="100%"
              className={styles.iframe}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Pin Overlay Animado (Para darle vida al mapa estático) */}
            <div className={styles.pinOverlay} aria-hidden="true">
              <div className={styles.pinIcon}>
                <HiLocationMarker size={30} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
