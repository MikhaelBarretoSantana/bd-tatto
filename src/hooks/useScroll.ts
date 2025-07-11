// 📜 Hook para detecção de scroll e navegação suave

import { useState, useEffect } from "react";

/**
 * Hook que detecta quando a página foi scrollada além de um threshold
 * @param threshold - Pixels de scroll para ativar (default: 100)
 * @returns boolean indicando se passou do threshold
 */
export const useScroll = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Adiciona listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Função utilitária para navegar suavemente para uma seção
 * @param sectionId - ID da seção para scroll
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: "smooth" });
};
