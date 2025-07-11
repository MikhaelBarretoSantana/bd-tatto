// 🏢 Showcasing do estúdio físico - Tour virtual elegante

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
import { openWhatsApp } from "../../utils";

// Dados do estúdio (você pode mover para constants depois)
const STUDIO_IMAGES = [
  {
    src: "/img/studio/studio-1.jpg", // Substitua pelos nomes reais
    title: "Ambiente Principal",
    description:
      "Estúdio moderno e acolhedor, pensado para seu conforto e tranquilidade durante toda a sessão.",
    highlight: "Equipamentos de última geração",
  },
  {
    src: "/img/studio/studio-2.jpg", // Substitua pelos nomes reais
    title: "Área de Trabalho",
    description:
      "Espaço esterilizado e organizado, seguindo os mais rigorosos protocolos de biossegurança.",
    highlight: "Ambiente 100% esterilizado",
  },
];

const STUDIO_FEATURES = [
  {
    icon: Shield,
    title: "Biossegurança Total",
    description:
      "Protocolos rigorosos de esterilização e materiais descartáveis",
  },
  {
    icon: Sparkles,
    title: "Equipamentos Premium",
    description: "Máquinas profissionais e tintas de primeira qualidade",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description:
      "Espaço pensado para proporcionar máximo conforto e relaxamento",
  },
];

/**
 * Componente Studio - Showcasing do estúdio físico
 * Galeria interativa + facilidades + call-to-action
 */
const Studio: React.FC = () => {
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
  } = useCarousel({ totalSlides: STUDIO_IMAGES.length });

  const handleVisitRequest = () => {
    openWhatsApp(
      "Olá! Gostaria de agendar uma visita para conhecer o estúdio. Quando seria possível?"
    );
  };

  return (
    <section id="studio" className="studio">
      <div className="studio__container">
        {/* Cabeçalho da seção */}
        <div className="studio__header">
          <h2 className="studio__title">Conheça Nosso Estúdio</h2>
          <p className="studio__subtitle">
            Um ambiente profissional, seguro e acolhedor, pensado especialmente
            para você
          </p>
        </div>

        {/* Galeria do estúdio */}
        <div className="studio__gallery">
          <div
            className="studio__carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            tabIndex={0}
            role="region"
            aria-label="Galeria de fotos do estúdio"
          >
            <button
              className="studio__carousel-btn studio__carousel-btn--prev"
              onClick={prevSlide}
              aria-label="Foto anterior do estúdio"
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
                        alt={`${image.title} - BD Tattoo Studio`}
                        className="studio__image"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="studio__image-overlay">
                        <div className="studio__image-content">
                          <h3 className="studio__image-title">{image.title}</h3>
                          <p className="studio__image-description">
                            {image.description}
                          </p>
                          <span className="studio__image-highlight">
                            {image.highlight}
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
              aria-label="Próxima foto do estúdio"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
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

        {/* Facilidades e diferenciais */}
        <div className="studio__features">
          <h3 className="studio__features-title">Nossos Diferenciais</h3>
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

        {/* Call to action */}
        <div className="studio__cta">
          <h3 className="studio__cta-title">Venha Conhecer Pessoalmente</h3>
          <p className="studio__cta-description">
            Agende uma visita e veja de perto onde sua arte será criada
          </p>
          <button onClick={handleVisitRequest} className="studio__cta-button">
            <MapPin size={20} />
            Agendar Visita ao Estúdio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Studio;
