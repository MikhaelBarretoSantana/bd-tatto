// 🛠️ Funções Utilitárias - Helpers e validações

import { WHATSAPP_NUMBER } from "../constants";

/**
 * Abre conversa no WhatsApp com mensagem personalizada
 */
export const openWhatsApp = (customMessage?: string) => {
  const message =
    customMessage ||
    "Olá! Gostaria de agendar uma consulta para tatuagem. Podemos conversar?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

/**
 * Remove todos os caracteres não numéricos do telefone
 */
export const formatPhoneNumbers = (value: string): string => {
  return value.replace(/\D/g, "");
};

/**
 * Valida formato de email
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida telefone (mínimo 8 dígitos)
 */
export const validatePhone = (phone: string): boolean => {
  return phone.length >= 8;
};

/**
 * Capitaliza primeira letra de cada palavra
 */
export const capitalizeName = (name: string): string => {
  return name.replace(/\b\w/g, (l) => l.toUpperCase());
};
