// 🚀 Seção principal/banner com logo como imagem

import React from "react";
import { openWhatsApp } from "../../utils";

/**
 * Seção Hero - Banner principal da página
 * Usa a logo oficial como imagem para manter identidade visual
 */
const Hero: React.FC = () => {
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

        <h2 className="hero__subtitle">Eternizando traços e histórias</h2>

        <p className="hero__description">
          Mais de 5 anos criando tatuagens únicas e sofisticadas. Cada traço é
          pensado para contar sua história com elegância e precisão.
        </p>

        <button onClick={() => openWhatsApp()} className="hero__cta">
          Agende Sua Consulta
        </button>
      </div>
    </section>
  );
};

export default Hero;
