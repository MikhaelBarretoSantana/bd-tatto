// components/contact/Contact.tsx
// 📧 Formulário de contato com validação e integração WhatsApp - Internacionalizado

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Seção de contato com formulário inteligente
 * Validação em tempo real e envio direto para WhatsApp
 * Agora com suporte completo a múltiplos idiomas
 */
const Contact: React.FC = () => {
  const { t } = useI18n();
  const { formData, formValidation, handleInputChange, handleFormSubmit } =
    useContactForm();

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">{t.contact.title}</h2>

        <div className="contact__info">
          <div className="contact__info-item">
            <MapPin size={20} />
            <span>{t.contact.address}</span>
          </div>
          <div className="contact__info-item">
            <Phone size={20} />
            <span>{t.contact.phone}</span>
          </div>
          <div className="contact__info-item">
            <Mail size={20} />
            <span>{t.contact.email}</span>
          </div>
        </div>

        <div className="contact__form">
          <div className="contact__form-row">
            <input
              type="text"
              placeholder={t.contact.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="contact__form-input"
              aria-label={t.contact.form.nameLabel}
            />
            <input
              type="email"
              placeholder={t.contact.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`contact__form-input ${
                !formValidation.emailValid ? "contact__form-input--error" : ""
              }`}
              aria-label={t.contact.form.emailLabel}
              aria-invalid={!formValidation.emailValid}
            />
          </div>
          <input
            type="tel"
            placeholder={t.contact.form.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`contact__form-input contact__form-input--full ${
              !formValidation.phoneValid ? "contact__form-input--error" : ""
            }`}
            aria-label={t.contact.form.phoneLabel}
            aria-invalid={!formValidation.phoneValid}
          />
          <div className="contact__form-textarea-wrapper">
            <textarea
              placeholder={t.contact.form.messagePlaceholder}
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="contact__form-textarea"
              maxLength={500}
              aria-label={t.contact.form.messageLabel}
            />
            <div className="contact__form-counter">
              {formData.message.length}/500 {t.contact.form.characterCount}
            </div>
          </div>
          <button
            onClick={handleFormSubmit}
            className="contact__form-submit contact__form-submit--whatsapp"
            type="button"
          >
            {t.contact.form.submitButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;