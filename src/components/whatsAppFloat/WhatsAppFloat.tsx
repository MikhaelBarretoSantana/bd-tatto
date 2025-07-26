import React from "react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";

/**
 * Botão flutuante do WhatsApp que fica fixo na tela
 * Aparece em todas as páginas para contato rápido
 */
const WhatsAppFloat: React.FC = () => {
  const { t } = useI18n();

  const handleClick = () => {
    openWhatsApp(t.whatsapp.defaultMessage);
  };

  return (
    <button
      className="whatsapp-float"
      onClick={handleClick}
      title={t.footer.contactWhatsApp}
      aria-label={t.accessibility.openWhatsApp}
    >
      <WhatsAppIcon size={28} />
    </button>
  );
};

export default WhatsAppFloat;