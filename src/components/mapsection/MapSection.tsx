// 🗺️ Seção de localização com mapa e informações

import React from "react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { openWhatsApp } from "../../utils";

/**
 * Seção de localização do estúdio
 * Inclui mapa do Google, endereço, horários e botão de agendamento
 */
const MapSection: React.FC = () => {
  return (
    <section id="location" className="map-section">
      <div className="map-section__container">
        <h2 className="map-section__title">Nossa Localização</h2>
        <p className="map-section__description">
          Venha nos visitar no nosso estúdio. Estamos localizados em um ambiente
          acolhedor e profissional.
        </p>

        <div className="map-section__content">
          <div className="map-section__info">
            <div className="map-section__address">
              <h3>Endereço Completo</h3>
              <p>
                Av. da Liberdade, 666
                <br />
                Braga - Portugal
                <br />
                4710-249
              </p>
            </div>
            <div className="map-section__hours">
              <h3>Horário de Funcionamento</h3>
              <div className="map-section__schedule">
                <div>Terça a Sexta: 10h - 18h</div>
                <div>Sábados: 10h - 13h</div>
                <div>Domingos: Fechado</div>
              </div>
            </div>

            <button
              onClick={() =>
                openWhatsApp("Olá! Gostaria de agendar uma visita ao estúdio.")
              }
              className="map-section__cta"
              title="Agendar Visita pelo WhatsApp"
            >
              <WhatsAppIcon size={20} />
              Agendar Visita
            </button>
          </div>

          <div className="map-section__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.886392920909!2d-8.422062!3d41.550056999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ff5d1450def7%3A0x278d08c027a9465a!2sBrian%20Dantas%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1752101694260!5m2!1spt-BR!2sbr"
              className="google-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BD Tattoo Studio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
