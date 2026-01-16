// components/trust/TrustAndSecurity.tsx
// 🛡️ Seção de Confiança e Segurança

import React from "react";
import {
  CheckCircle,
  Shield,
  Droplets,
  BookOpen,
  Handshake,
} from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

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

  return (
    <section id="trust" className="trust">
      <div className="trust__container">
        <div className="trust__header">
          <h2 className="trust__title">{t.trust.title}</h2>
          <p className="trust__subtitle">{t.trust.subtitle}</p>
        </div>

        <div className="trust__items-grid">
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
      </div>
    </section>
  );
};

export default TrustAndSecurity;
