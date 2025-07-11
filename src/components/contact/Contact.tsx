// src/components/Contact/Contact.tsx
// 📧 Formulário de contato com validação e integração WhatsApp

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { CONTACT_INFO } from "../../constants";

/**
 * Seção de contato com formulário inteligente
 * Validação em tempo real e envio direto para WhatsApp
 */
const Contact: React.FC = () => {
  const { formData, formValidation, handleInputChange, handleFormSubmit } =
    useContactForm();

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Agende Sua Sessão</h2>

        <div className="contact__info">
          <div className="contact__info-item">
            <MapPin size={20} />
            <span>Rua da Arte, 123 - Centro</span>
          </div>
          <div className="contact__info-item">
            <Phone size={20} />
            <span>+351 911 565 927</span>
          </div>
          <div className="contact__info-item">
            <Mail size={20} />
            <span>{CONTACT_INFO.email}</span>
          </div>
        </div>

        <div className="contact__form">
          <div className="contact__form-row">
            <input
              type="text"
              placeholder="Seu Nome Completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="contact__form-input"
              aria-label="Nome completo"
            />
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`contact__form-input ${
                !formValidation.emailValid ? "contact__form-input--error" : ""
              }`}
              aria-label="Email"
              aria-invalid={!formValidation.emailValid}
            />
          </div>
          <input
            type="tel"
            placeholder="Número de telefone (apenas números)"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`contact__form-input contact__form-input--full ${
              !formValidation.phoneValid ? "contact__form-input--error" : ""
            }`}
            aria-label="Telefone"
            aria-invalid={!formValidation.phoneValid}
          />
          <div className="contact__form-textarea-wrapper">
            <textarea
              placeholder="Descreva sua ideia de tatuagem (estilo, tamanho, localização no corpo, referências...)"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="contact__form-textarea"
              maxLength={500}
              aria-label="Descrição da ideia de tatuagem"
            />
            <div className="contact__form-counter">
              {formData.message.length}/500 caracteres
            </div>
          </div>
          <button
            onClick={handleFormSubmit}
            className="contact__form-submit contact__form-submit--whatsapp"
            type="button"
          >
            Enviar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
