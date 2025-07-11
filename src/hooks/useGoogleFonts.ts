// 🔤 Hook para carregamento de fontes do Google

import { useEffect } from "react";

/**
 * Hook que carrega as fontes do Google Fonts de forma otimizada
 * Carrega Playfair Display e Oswald usadas no projeto
 */
export const useGoogleFonts = () => {
  useEffect(() => {
    // Evita carregar múltiplas vezes se já existe
    const existingLink = document.querySelector(
      'link[href*="fonts.googleapis.com"]'
    );
    if (existingLink) return;

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Oswald:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup: remove o link quando o componente for desmontado
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
};
