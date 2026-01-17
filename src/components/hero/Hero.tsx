import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";

/**
 * Imagens de tatuagens para o carrossel vitrine (linha superior)
 */
const TATTOO_IMAGES_ROW_1 = [
  '/img/tattoos/fine_line_1.jpeg',
  '/img/tattoos/realismo_1.jpeg',
  '/img/tattoos/geometrico_1.jpeg',
  '/img/tattoos/minimalista_1.jpeg',
  '/img/tattoos/tribal_1.jpeg',
  '/img/tattoos/colorfull_1.jpeg',
  '/img/tattoos/fine_line_2.jpeg',
  '/img/tattoos/realismo_2.jpeg',
  '/img/tattoos/geometrico_2.jpeg',
  '/img/tattoos/minimalista_2.jpeg',
  '/img/tattoos/tribal_2.jpeg',
  '/img/tattoos/fine_line_3.jpeg',
];

/**
 * Imagens de tatuagens para o carrossel vitrine (linha inferior)
 */
const TATTOO_IMAGES_ROW_2 = [
  '/img/tattoos/realismo_3.jpeg',
  '/img/tattoos/fine_line_4.jpeg',
  '/img/tattoos/tribal_3.jpeg',
  '/img/tattoos/minimalista_3.jpeg',
  '/img/tattoos/geometrico_3.jpeg',
  '/img/tattoos/fine_line_5.jpeg',
  '/img/tattoos/tribal_4.jpeg',
  '/img/tattoos/minimalista_4.jpeg',
  '/img/tattoos/fine_line_6.jpeg',
  '/img/tattoos/tribal_5.jpeg',
  '/img/tattoos/minimalista_5.jpeg',
  '/img/tattoos/tribal_6.jpeg',
  '/img/tattoos/minimalista_6.jpeg',
];

/**
 * Seção Hero - Banner principal da página
 * Carrossel infinito duplo de tatuagens como vitrine
 * Agora com suporte completo a múltiplos idiomas
 */
const Hero: React.FC = () => {
  const { t } = useI18n();

  const handleCTAClick = () => {
    openWhatsApp(t.whatsapp.defaultMessage);
  };

  // Duplicar imagens para criar efeito infinito seamless
  const row1Images = [...TATTOO_IMAGES_ROW_1, ...TATTOO_IMAGES_ROW_1];
  const row2Images = [...TATTOO_IMAGES_ROW_2, ...TATTOO_IMAGES_ROW_2];

  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `url('/img/brian-dantas.jpeg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Carrossel Vitrine - Duas linhas infinitas */}
      <div className="hero__showcase">
        {/* Linha superior - move para a esquerda */}
        <div className="hero__showcase-row hero__showcase-row--top">
          <div className="hero__showcase-track hero__showcase-track--left">
            {row1Images.map((image, index) => (
              <div key={`row1-${index}`} className="hero__showcase-item">
                <img 
                  src={image} 
                  alt={`Tatuagem ${index + 1}`}
                  className="hero__showcase-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Linha inferior - move para a direita */}
        <div className="hero__showcase-row hero__showcase-row--bottom">
          <div className="hero__showcase-track hero__showcase-track--right">
            {row2Images.map((image, index) => (
              <div key={`row2-${index}`} className="hero__showcase-item">
                <img 
                  src={image} 
                  alt={`Tatuagem ${index + 1}`}
                  className="hero__showcase-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay escuro para melhor legibilidade do texto */}
      <div className="hero__overlay"></div>

      {/* Conteúdo principal */}
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