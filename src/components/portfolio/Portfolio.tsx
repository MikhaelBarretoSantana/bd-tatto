// 🎨 Galeria de trabalhos com carrossel interativo

import React from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useCarousel } from "../../hooks/useCarousel";
import { PORTFOLIO_IMAGES } from "../../constants";

/**
 * Componente Portfolio com carrossel completo
 * Inclui navegação por touch, teclado, auto-play e indicadores
 */
const Portfolio: React.FC = () => {
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

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__subtitle">
          Alguns dos nossos trabalhos mais recentes
        </p>

        <div className="portfolio__carousel">
          <div
            className="portfolio__carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            tabIndex={0}
            role="region"
            aria-label="Galeria de fotos do portfolio"
            aria-describedby="portfolio-instructions"
          >
            <div id="portfolio-instructions" className="visually-hidden">
              Use as setas do teclado para navegar entre as imagens, ou deslize
              o dedo em dispositivos touch
            </div>

            <button
              className="portfolio__carousel-btn portfolio__carousel-btn--prev"
              onClick={prevSlide}
              aria-label="Imagem anterior"
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
                aria-label={`Slide ${currentSlide + 1} de ${
                  PORTFOLIO_IMAGES.length
                }`}
              >
                {PORTFOLIO_IMAGES.map((item, index) => (
                  <div
                    key={index}
                    className="portfolio__carousel-slide"
                    aria-hidden={index !== currentSlide ? "true" : "false"}
                  >
                    {item.type === "instagram" ? (
                      // Slide especial do Instagram
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
                                {item.category}
                              </h3>
                              <p className="portfolio__carousel-instagram-description">
                                {item.description}
                              </p>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio__carousel-instagram-btn"
                                tabIndex={index === currentSlide ? 0 : -1}
                              >
                                <Instagram size={18} />
                                Seguir no Instagram
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Slides normais de imagem
                      <div className="portfolio__carousel-image">
                        <img
                          src={item.src}
                          alt={`${item.category}: ${item.description}`}
                          className="portfolio__carousel-img"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="portfolio__carousel-overlay">
                          <div className="portfolio__carousel-content">
                            <h3 className="portfolio__carousel-category">
                              {item.category}
                            </h3>
                            <p className="portfolio__carousel-description">
                              {item.description}
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
              aria-label="Próxima imagem"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicadores */}
          <div
            className="portfolio__carousel-indicators"
            role="tablist"
            aria-label="Navegação do portfolio"
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
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
