import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <div className={styles.footerLogo}>
        <div className={styles.logoIcon}>
          <span className="font-serif font-bold text-[#D97706] text-xs">V</span>
        </div>
        <span className={styles.logoText}>El Viejo del Río</span>
      </div>

      {/* Copyright */}
      <p className={styles.copyright}>
        © {new Date().getFullYear()} El Viejo del Río. Todos los derechos
        reservados.
      </p>

      {/* Social Links */}
      <div className={styles.socials}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.socialIcon}
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={styles.socialIcon}
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
