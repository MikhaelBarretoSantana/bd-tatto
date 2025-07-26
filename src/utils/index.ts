// 🛠️ Utilitários gerais - Atualizado com i18n e funções existentes

import { translations } from "../i18n/translations";
import { Language } from "../types/i18n";

// Constante do número do WhatsApp
const WHATSAPP_NUMBER = "351911565927";

/**
 * Abre conversa no WhatsApp com mensagem personalizada
 */
export const openWhatsApp = (customMessage?: string) => {
  const message =
    customMessage ||
    "Olá! Gostaria de agendar uma consulta para tatuagem. Podemos conversar?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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

/**
 * Detecta idioma preferido baseado no navegador
 */
export const detectUserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  
  return 'pt'; // Padrão
};

/**
 * Formata mensagem com parâmetros
 */
export const formatMessage = (template: string, params: Record<string, string | number>): string => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  }, template);
};

/**
 * Valida se um idioma é suportado
 */
export const isLanguageSupported = (lang: string): lang is Language => {
  return ['pt', 'en', 'es', 'fr'].includes(lang);
};

/**
 * Obtém tradução segura (com fallback)
 */
export const getSafeTranslation = (language: Language, key: string): string => {
  const t = translations[language];
  const value = key.split('.').reduce((obj: any, k) => obj?.[k], t);
  
  if (typeof value === 'string') {
    return value;
  }
  
  // Fallback para português se não encontrar
  const fallback = key.split('.').reduce((obj: any, k) => obj?.[k], translations.pt);
  return typeof fallback === 'string' ? fallback : key;
};
