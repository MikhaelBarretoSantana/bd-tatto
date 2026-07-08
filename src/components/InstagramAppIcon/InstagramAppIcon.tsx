// 📱 Componente de ícone personalizado do WhatsApp

import { Instagram } from "lucide-react";
import React from "react";

interface InstagramAppIconProps {
  size?: number;
}

/**
 * Componente de ícone SVG personalizado do WhatsApp
 * Reutilizável em todo o projeto com tamanho configurável
 */
const InstagramAppIcon: React.FC<InstagramAppIconProps> = ({ size = 24 }) => (
  <Instagram size={24} />
);

export default InstagramAppIcon;
