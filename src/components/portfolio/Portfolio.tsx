// components/portfolio/Portfolio.tsx
// 🎨 Galeria de trabalhos com carrossel interativo - Descrições traduzidas

import React from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useCarousel } from "../../hooks/useCarousel";
import { useI18n } from "../../i18n/I18nContext";
import { PORTFOLIO_IMAGES } from "../../constants";

/**
 * Componente Portfolio com carrossel completo
 * Inclui navegação por touch, teclado, auto-play e indicadores
 * Agora com tradução dinâmica das categorias E descrições
 */
const Portfolio: React.FC = () => {
  const { t, formatMessage } = useI18n();
  
  const {
    currentSlide,
    isPaused,
    setIsPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel({ totalSlides: PORTFOLIO_IMAGES.length });

  // Função para traduzir categoria do portfolio
  const translateCategory = (category: string): string => {
    const categoryMap: { [key: string]: keyof typeof t.portfolioCategories } = {
      'Fine Line': 'fineLine',
      'Realismo': 'realism',
      'Ver Mais': 'realism', // Fallback para "Ver Mais"
    };
    
    const translationKey = categoryMap[category];
    return translationKey ? t.portfolioCategories[translationKey] : category;
  };

  // Função para traduzir descrições do portfolio
  const translateDescription = (originalDescription: string, category: string): string => {
    // Mapeamento das descrições originais para chaves de tradução
    const descriptionMap: { [key: string]: string } = {
      'Traços delicados e minimalistas': t.portfolio.descriptions?.fineLine1 || 'Traços delicados e minimalistas',
      'Detalhes hiper-realistas com sombreado profissional': t.portfolio.descriptions?.realism1 || 'Detalhes hiper-realistas com sombreado profissional',
      'Linhas finas e precisas com elegância': t.portfolio.descriptions?.fineLine2 || 'Linhas finas e precisas com elegância',
      'Texturas realistas e profundidade visual': t.portfolio.descriptions?.realism2 || 'Texturas realistas e profundidade visual',
      'Arte sutil com traços refinados': t.portfolio.descriptions?.fineLine3 || 'Arte sutil com traços refinados',
      'Técnica realista com riqueza de detalhes': t.portfolio.descriptions?.realism3 || 'Técnica realista com riqueza de detalhes',
      'Confira todos os nossos trabalhos': t.portfolio.instagram.description,
    };

    return descriptionMap[originalDescription] || originalDescription;
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">{t.portfolio.title}</h2>
        <p className="portfolio__subtitle">{t.portfolio.subtitle}</p>

        <div className="portfolio__carousel">
          <div
            className="portfolio__carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            tabIndex={0}
            role="region"
            aria-label={t.portfolio.title}
            aria-describedby="portfolio-instructions"
          >
            <div id="portfolio-instructions" className="visually-hidden">
              {t.portfolio.instructions}
            </div>

            <button
              className="portfolio__carousel-btn portfolio__carousel-btn--prev"
              onClick={prevSlide}
              aria-label={t.portfolio.prevButton}
            >
              <ChevronLeft size={20} />
            </button>

            <div
              className="portfolio__carousel-wrapper"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="portfolio__carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                role="group"
                aria-label={formatMessage(t.portfolio.slideIndicator, {
                  current: currentSlide + 1,
                  total: PORTFOLIO_IMAGES.length
                })}
              >
                {PORTFOLIO_IMAGES.map((item, index) => (
                  <div
                    key={index}
                    className="portfolio__carousel-slide"
                    aria-hidden={index !== currentSlide ? "true" : "false"}
                  >
                    {item.type === "instagram" ? (
                      <div className="portfolio__carousel-instagram">
                        <div className="portfolio__carousel-instagram-bg">
                          <img
                            src={item.src}
                            alt="Instagram"
                            className="portfolio__carousel-img"
                          />
                          <div className="portfolio__carousel-instagram-overlay">
                            <div className="portfolio__carousel-instagram-content">
                              <Instagram
                                size={40}
                                className="portfolio__carousel-instagram-icon"
                              />
                              <h3 className="portfolio__carousel-instagram-title">
                                {t.portfolio.instagram.title}
                              </h3>
                              <p className="portfolio__carousel-instagram-description">
                                {t.portfolio.instagram.description}
                              </p>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio__carousel-instagram-btn"
                                tabIndex={index === currentSlide ? 0 : -1}
                              >
                                <Instagram size={18} />
                                {t.portfolio.instagram.followButton}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="portfolio__carousel-image">
                        <img
                          src={item.src}
                          alt={`${translateCategory(item.category)}: ${translateDescription(item.description, item.category)}`}
                          className="portfolio__carousel-img"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="portfolio__carousel-overlay">
                          <div className="portfolio__carousel-content">
                            <h3 className="portfolio__carousel-category">
                              {translateCategory(item.category)}
                            </h3>
                            <p className="portfolio__carousel-description">
                              {translateDescription(item.description, item.category)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="portfolio__carousel-btn portfolio__carousel-btn--next"
              onClick={nextSlide}
              aria-label={t.portfolio.nextButton}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            className="portfolio__carousel-indicators"
            role="tablist"
            aria-label={t.portfolio.title}
          >
            {PORTFOLIO_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`portfolio__carousel-indicator ${
                  index === currentSlide
                    ? "portfolio__carousel-indicator--active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={formatMessage(t.accessibility.goToSlide, { number: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;