// components/hero/Hero.tsx
// 🚀 Seção principal/banner com logo como imagem - Internacionalizado

import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";

/**
 * Seção Hero - Banner principal da página
 * Usa a logo oficial como imagem para manter identidade visual
 * Agora com suporte completo a múltiplos idiomas
 */
const Hero: React.FC = () => {
  const { t } = useI18n();

  const handleCTAClick = () => {
    openWhatsApp(t.whatsapp.defaultMessage);
  };

  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        {/* Logo BD como imagem */}
        <div className="hero__logo">
          <img
            src="/img/bd-tattoo-logo.png"
            alt="BD Tattoo - Logo Oficial"
            className="hero__logo-img"
          />
        </div>

        <h2 className="hero__subtitle">{t.hero.subtitle}</h2>

        <p className="hero__description">
          {t.hero.description}
        </p>

        <button onClick={handleCTAClick} className="hero__cta">
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;