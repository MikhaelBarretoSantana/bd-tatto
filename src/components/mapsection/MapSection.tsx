
import React from "react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";

/**
 * Seção de localização do estúdio
 * Inclui mapa do Google, endereço e botão de agendamento
 */
const MapSection: React.FC = () => {
  const { t } = useI18n();

  const handleScheduleClick = () => {
    openWhatsApp(t.whatsapp.studioVisitMessage);
  };

  return (
    <section id="location" className="map-section">
      <div className="map-section__container">
        <h2 className="map-section__title">{t.map.title}</h2>
        <p className="map-section__description">{t.map.description}</p>

        <div className="map-section__content">
          <div className="map-section__info">
            <div className="map-section__location">
              <h3>{t.map.locationTitle}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{t.map.address}</p>
            </div>

            <button
              onClick={handleScheduleClick}
              className="map-section__cta"
              title={t.map.ctaTitle}
            >
              <WhatsAppIcon size={20} />
              {t.map.ctaButton}
            </button>
          </div>

          <div className="map-section__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.886392920909!2d-8.422062!3d41.550056999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ff5d1450def7%3A0x278d08c027a9465a!2sBrian%20Dantas%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1752101694260!5m2!1spt-BR!2sbr"
              className="google-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.map.mapTitle}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
