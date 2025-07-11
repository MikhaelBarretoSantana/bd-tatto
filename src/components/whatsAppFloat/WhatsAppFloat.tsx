// 🟢 Botão flutuante fixo do WhatsApp

import React from "react";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import { openWhatsApp } from "../../utils";

/**
 * Botão flutuante do WhatsApp que fica fixo na tela
 * Aparece em todas as páginas para contato rápido
 */
const WhatsAppFloat: React.FC = () => {
  return (
    <button
      className="whatsapp-float"
      onClick={() => openWhatsApp()}
      title="Fale conosco no WhatsApp"
      aria-label="Abrir conversa no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </button>
  );
};

export default WhatsAppFloat;
