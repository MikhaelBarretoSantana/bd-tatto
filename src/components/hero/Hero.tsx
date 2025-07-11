// 🚀 Seção principal/banner da página

import React from "react";
import { openWhatsApp } from "../../utils";

/**
 * Seção Hero - Banner principal da página
 * Inclui logo estilizada, título, descrição e call-to-action
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        {/* Logo BD estilizada */}
        <div className="hero__logo">
          <h1 className="hero__logo-bd">BD</h1>
          <div className="hero__logo-tattoo">TATTOO</div>
        </div>

        <h2 className="hero__subtitle">Transformando Pele em Arte Atemporal</h2>

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
