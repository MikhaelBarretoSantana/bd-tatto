// 🦶 Rodapé com informações e links sociais

import React from "react";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { openWhatsApp } from "../../utils";

/**
 * Footer da página com logo, copyright e links sociais
 * Links para Instagram e WhatsApp
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">BD TATTOO</div>
        <p className="footer__copyright">
          &copy; 2025 BD Tattoo. Todos os direitos reservados.
        </p>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/briandantastattoo/?utm_source=ig_web_button_share_sheet"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir no Instagram"
          >
            <Instagram size={24} />
          </a>
          <button
            onClick={() => openWhatsApp()}
            className="footer__social-link footer__social-link--whatsapp"
            title="Fale conosco no WhatsApp"
            aria-label="Contatar via WhatsApp"
          >
            <WhatsAppIcon size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
