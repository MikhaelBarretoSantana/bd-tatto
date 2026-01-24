// components/trust/TrustAndSecurity.tsx
// 🛡️ Seção de Confiança e Segurança

import React from "react";
import {
  CheckCircle,
  Shield,
  Droplets,
  BookOpen,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { useCarousel } from "../../hooks/useCarousel";

/**
 * Componente TrustAndSecurity - Seção de Confiança e Segurança
 * Exibe os compromisos e garantias do estúdio
 */
const TrustAndSecurity: React.FC = () => {
  const { t } = useI18n();

  const icons = [
    CheckCircle,
    Shield,
    Droplets,
    BookOpen,
    Handshake,
  ];

  const {
    currentSlide,
    setIsPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel({ totalSlides: t.trust.items.length });

  return (
    <section id="trust" className="trust">
      <div className="trust__container">
        <div className="trust__header">
          <h2 className="trust__title">{t.trust.title}</h2>
          <p className="trust__subtitle">{t.trust.subtitle}</p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="trust__items-grid trust__items-grid--desktop">
          {t.trust.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="trust__item">
                <div className="trust__item-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="trust__item-title">{item.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Mobile: Carousel Layout */}
        <div
          className="trust__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button
            className="trust__carousel-btn trust__carousel-btn--prev"
            onClick={prevSlide}
            aria-label="Item anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="trust__carousel-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="trust__carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {t.trust.items.map((item, index) => {
                const IconComponent = icons[index];
                return (
                  <div
                    key={index}
                    className="trust__carousel-slide"
                  >
                    <div className="trust__item">
                      <div className="trust__item-icon">
                        <IconComponent size={32} />
                      </div>
                      <h3 className="trust__item-title">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="trust__carousel-btn trust__carousel-btn--next"
            onClick={nextSlide}
            aria-label="Próximo item"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="trust__carousel-indicators">
          {t.trust.items.map((_, index) => (
            <button
              key={index}
              className={`trust__carousel-indicator ${
                index === currentSlide
                  ? "trust__carousel-indicator--active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ver item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAndSecurity;
