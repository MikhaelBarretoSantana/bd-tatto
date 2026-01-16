// 🎠 Hook complexo para gerenciamento completo do carrossel

import { useState, useEffect, useCallback } from "react";

interface UseCarouselProps {
  totalSlides: number;
  autoPlayInterval?: number;
}

/**
 * Hook completo para carrossel com todas as funcionalidades:
 * - Auto-play com controle de pausa
 * - Navegação por touch/swipe
 * - Navegação por teclado
 * - Controles manuais
 */
export const useCarousel = ({
  totalSlides,
  autoPlayInterval = 5000,
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Navegação manual
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Controles de touch/swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play (pausa quando hover ou touch)
  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoPlayInterval, totalSlides, nextSlide]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Só funciona se o carrossel estiver em foco
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".portfolio__carousel-container")
      ) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            prevSlide();
            break;
          case "ArrowRight":
            e.preventDefault();
            nextSlide();
            break;
          case "Home":
            e.preventDefault();
            goToSlide(0);
            break;
          case "End":
            e.preventDefault();
            goToSlide(totalSlides - 1);
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides, nextSlide, prevSlide]);

  return {
    currentSlide,
    isPaused,
    setIsPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
