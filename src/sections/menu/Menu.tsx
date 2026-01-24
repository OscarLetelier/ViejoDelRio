import React, { useState, useMemo } from "react";
import { menuItems } from "@/data/menu"; // Asegúrate de que esta ruta sea correcta
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import styles from "./Menu.module.css";
import { containerVariants, itemVariants } from "./menuAnimations";

const Menu: React.FC = () => {
  // 1. Memoizamos las categorías para no recalcularlas en cada render
  const categories = useMemo(() => {
    return ["Todos", ...new Set(menuItems.map((item) => item.category))];
  }, []); // Dependencia vacía porque menuItems es estático (si viniera de API, sería dependency)

  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  // 2. Lógica de filtrado optimizada
  const { filteredItems, displayGroups } = useMemo(() => {
    const items =
      activeCategory === "Todos"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory);

    const groups =
      activeCategory === "Todos"
        ? categories.filter((c) => c !== "Todos")
        : [activeCategory];

    return { filteredItems: items, displayGroups: groups };
  }, [activeCategory, categories]);

  return (
    <section id="menu" className={styles.section} aria-label="Menú y Carta">
      {/* Fondo decorativo */}
      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>El Viejo del Río</span>
      </div>

      <div className={styles.container}>
        {/* --- ENCABEZADO --- */}
        <div className={styles.headerWrapper}>
          <span className={styles.subHeading}>Propuesta Gastronómica</span>
          <h2 className={styles.heading}>Nuestra Carta</h2>
          <div className={styles.divider} aria-hidden="true"></div>
        </div>

        {/* --- FILTROS (TABS) --- */}
        <div
          className={styles.filterContainer}
          role="tablist"
          aria-label="Filtros de menú"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`panel-${cat}`}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.filterBtnActive : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- CARTA DE PAPEL --- */}
        <div className={styles.paperCard}>
          <div className={styles.paperTexture} aria-hidden="true"></div>

          <motion.div
            layout
            className="space-y-12" // Espaciado vertical entre grupos
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayGroups.map((groupName) => {
              const itemsInGroup = filteredItems.filter(
                (item) => item.category === groupName
              );
              if (itemsInGroup.length === 0) return null;

              return (
                <div key={groupName} id={`panel-${groupName}`} role="tabpanel">
                  {/* Título de Grupo (Solo si vemos "Todos") */}
                  {activeCategory === "Todos" && (
                    <h3 className={styles.groupTitle}>{groupName}</h3>
                  )}

                  {/* Lista de Ítems */}
                  <div className={styles.itemsContainer}>
                    <AnimatePresence mode="popLayout">
                      {itemsInGroup.map((item) => (
                        <motion.div
                          layout
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          key={item.id}
                          className="group" // Para hover effects si fueran necesarios
                        >
                          {/* Fila Principal */}
                          <div className={styles.itemRow}>
                            <h4 className={styles.itemTitle}>
                              {item.title}
                              {item.featured && (
                                <HiSparkles
                                  className="inline-block ml-2 text-yellow-500 text-sm mb-1"
                                  title="Recomendado"
                                  aria-label="Plato destacado"
                                />
                              )}
                            </h4>

                            {/* Línea punteada */}
                            <div
                              className={styles.dotLeader}
                              aria-hidden="true"
                            ></div>

                            <span className={styles.itemPrice}>
                              {item.price}
                            </span>
                          </div>

                          {/* Descripción y Tags */}
                          <div className={styles.itemMeta}>
                            <p className={styles.itemDesc}>
                              {item.description}
                            </p>
                            {item.tag && (
                              <span className={styles.itemTag}>{item.tag}</span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Footer de la Carta */}
          <div className={styles.cardFooter}>
            <p className={styles.disclaimer}>
              * Todos nuestros precios incluyen IVA. Ingredientes sujetos a
              disponibilidad de temporada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
