// components/studio/Studio.tsx
// 🏢 Showcasing do estúdio físico - Textos originais + tradução

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  Heart,
  MapPin,
} from "lucide-react";
import { useCarousel } from "../../hooks/useCarousel";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";
import { STUDIO_IMAGES } from "../../constants";

/**
 * Componente Studio - Showcasing do estúdio físico
 * Galeria interativa + facilidades + call-to-action
 * CORRIGIDO: Mantém textos originais das imagens do constants + tradução
 */
const Studio: React.FC = () => {
  const { t } = useI18n();
  
  const STUDIO_FEATURES = [
    {
      icon: Shield,
      title: t.studio.features.biosafety.title,
      description: t.studio.features.biosafety.description,
    },
    {
      icon: Sparkles,
      title: t.studio.features.equipment.title,
      description: t.studio.features.equipment.description,
    },
    {
      icon: Heart,
      title: t.studio.features.environment.title,
      description: t.studio.features.environment.description,
    },
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
  } = useCarousel({ totalSlides: STUDIO_IMAGES.length });

  const handleVisitRequest = () => {
    openWhatsApp(t.whatsapp.studioVisitMessage);
  };

  // Função para traduzir os textos das imagens do estúdio
  const translateStudioImageText = (originalText: string, type: 'title' | 'description' | 'highlight'): string => {
    const translationMap: { [key: string]: string } = {
      // Títulos
      'Sala de Tatuagem': t.studio.images.workspace?.title || 'Sala de Tatuagem',
      'Recepção do Estúdio': t.studio.images.reception?.title || 'Recepção do Estúdio',
      
      // Descrições
      'Sala privativa com cadeira ergonômica profissional, iluminação LED moderna em padrão hexagonal no teto e equipamentos de última geração para máximo conforto durante a sessão.': 
        t.studio.images.workspace?.description || 'Sala privativa com cadeira ergonômica profissional, iluminação LED moderna em padrão hexagonal no teto e equipamentos de última geração para máximo conforto durante a sessão.',
      'Ambiente de recepção sofisticado com decoração artística de anatomia, balcão de atendimento moderno em madeira ripada, iluminação profissional e espaço acolhedor para consultas.':
        t.studio.images.reception?.description || 'Ambiente de recepção sofisticado com decoração artística de anatomia, balcão de atendimento moderno em madeira ripada, iluminação profissional e espaço acolhedor para consultas.',
      
      // Highlights
      'Design moderno e confortável': t.studio.images.workspace?.highlight || 'Design moderno e confortável',
      'Atendimento personalizado': t.studio.images.reception?.highlight || 'Atendimento personalizado',
    };

    return translationMap[originalText] || originalText;
  };

  return (
    <section id="studio" className="studio">
      <div className="studio__container">
        <div className="studio__header">
          <h2 className="studio__title">{t.studio.title}</h2>
          <p className="studio__subtitle">{t.studio.subtitle}</p>
        </div>

        <div className="studio__gallery">
          <div
            className="studio__carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            tabIndex={0}
            role="region"
            aria-label={t.studio.title}
          >
            <button
              className="studio__carousel-btn studio__carousel-btn--prev"
              onClick={prevSlide}
              aria-label={t.accessibility.previousImage}
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className="studio__carousel-wrapper"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="studio__carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {STUDIO_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className="studio__carousel-slide"
                    aria-hidden={index !== currentSlide ? "true" : "false"}
                  >
                    <div className="studio__image-container">
                      <img
                        src={image.src}
                        alt={`${translateStudioImageText(image.title, 'title')} - BD Tattoo Studio`}
                        className="studio__image"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="studio__image-overlay">
                        <div className="studio__image-content">
                          <h3 className="studio__image-title">
                            {translateStudioImageText(image.title, 'title')}
                          </h3>
                          <p className="studio__image-description">
                            {translateStudioImageText(image.description, 'description')}
                          </p>
                          <span className="studio__image-highlight">
                            {translateStudioImageText(image.highlight, 'highlight')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="studio__carousel-btn studio__carousel-btn--next"
              onClick={nextSlide}
              aria-label={t.accessibility.nextImage}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="studio__carousel-indicators">
            {STUDIO_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`studio__carousel-indicator ${
                  index === currentSlide
                    ? "studio__carousel-indicator--active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ver foto ${index + 1} do estúdio`}
              />
            ))}
          </div>
        </div>

        <div className="studio__features">
          <h3 className="studio__features-title">{t.studio.featuresTitle}</h3>
          <div className="studio__features-grid">
            {STUDIO_FEATURES.map((feature, index) => (
              <div key={index} className="studio__feature-card">
                <div className="studio__feature-icon">
                  <feature.icon size={28} />
                </div>
                <h4 className="studio__feature-title">{feature.title}</h4>
                <p className="studio__feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="studio__cta">
          <h3 className="studio__cta-title">{t.studio.ctaTitle}</h3>
          <p className="studio__cta-description">{t.studio.ctaDescription}</p>
          <button onClick={handleVisitRequest} className="studio__cta-button">
            <MapPin size={20} />
            {t.studio.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Studio;