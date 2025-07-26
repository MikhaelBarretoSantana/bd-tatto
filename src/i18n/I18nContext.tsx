// i18n/I18nContext.tsx
// 🌍 Context de internacionalização com persistência e suporte completo

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translation } from '../types/i18n';
import { translations } from './translations';

interface I18nContextType {
  currentLanguage: Language;
  t: Translation;
  changeLanguage: (language: Language) => void;
  formatMessage: (message: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

// Detecta idioma preferido do usuário
const getPreferredLanguage = (): Language => {
  // 1. Verifica localStorage
  const stored = localStorage.getItem('bd-tattoo-language') as Language;
  if (stored && ['pt', 'en', 'es', 'fr'].includes(stored)) {
    return stored;
  }

  // 2. Detecta idioma do navegador
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';

  // 3. Padrão português
  return 'pt';
};

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getPreferredLanguage);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('bd-tattoo-language', language);
    
    // Atualiza meta tags da página
    document.documentElement.lang = language;
    
    // Atualiza título da página baseado no idioma
    const titles = {
      pt: 'BD Tattoo - Brian Dantas | Tatuagens Realismo e Fine Line em Braga',
      en: 'BD Tattoo - Brian Dantas | Realism and Fine Line Tattoos in Braga',
      es: 'BD Tattoo - Brian Dantas | Tatuajes Realismo y Fine Line en Braga',
      fr: 'BD Tattoo - Brian Dantas | Tatouages Réalisme et Fine Line à Braga'
    };
    document.title = titles[language];
  };

  // Função para formatar mensagens com parâmetros
  const formatMessage = (message: string, params?: Record<string, string | number>): string => {
    if (!params) return message;
    
    return Object.entries(params).reduce((acc, [key, value]) => {
      return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
    }, message);
  };

  // Atualiza meta tags no carregamento inicial
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    
    // Define meta description baseada no idioma
    const descriptions = {
      pt: 'BD Tattoo - Brian Dantas, tatuador profissional em Braga especializado em Realismo e Fine Line. Mais de 5 anos criando arte única na pele.',
      en: 'BD Tattoo - Brian Dantas, professional tattoo artist in Braga specialized in Realism and Fine Line. Over 5 years creating unique skin art.',
      es: 'BD Tattoo - Brian Dantas, tatuador profesional en Braga especializado en Realismo y Fine Line. Más de 5 años creando arte único en la piel.',
      fr: 'BD Tattoo - Brian Dantas, tatoueur professionnel à Braga spécialisé en Réalisme et Fine Line. Plus de 5 ans à créer de l\'art unique sur la peau.'
    };

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[currentLanguage]);
  }, [currentLanguage]);

  const value: I18nContextType = {
    currentLanguage,
    t: translations[currentLanguage],
    changeLanguage,
    formatMessage
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

// Hook personalizado para usar internacionalização
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Hook específico para tradução simples
export const useTranslation = () => {
  const { t, formatMessage } = useI18n();
  
  const translate = (key: string, params?: Record<string, string | number>): string => {
    // Navega através do objeto de tradução usando a chave
    const value = key.split('.').reduce((obj: any, k) => obj?.[k], t);
    
    if (typeof value === 'string') {
      return formatMessage(value, params);
    }
    
    // Se não encontrar a tradução, retorna a chave
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return { t, translate, formatMessage };
};