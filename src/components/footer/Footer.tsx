import React from "react";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { useI18n } from "../../i18n/I18nContext";
import { openWhatsApp } from "../../utils";

/**
 * Footer da página com logo, copyright e links sociais
 * Links para Instagram e WhatsApp
 */
const Footer: React.FC = () => {
  const { t } = useI18n();

  const handleWhatsAppClick = () => {
    openWhatsApp(t.whatsapp.defaultMessage);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">BD TATTOO</div>
        <p className="footer__copyright">{t.footer.copyright}</p>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/briandantastattoo/?utm_source=ig_web_button_share_sheet"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.followInstagram}
          >
            <Instagram size={24} />
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="footer__social-link footer__social-link--whatsapp"
            title={t.footer.contactWhatsApp}
            aria-label={t.footer.contactWhatsApp}
          >
            <WhatsAppIcon size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;