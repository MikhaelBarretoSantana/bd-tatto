// types/index.ts - Tipos principais do projeto

// Tipo para categorias de portfolio - ATUALIZADO com Colorida
export type PortfolioCategory = 
  | 'Fine Line' 
  | 'Realismo' 
  | 'Colorida'    
  | 'Geométrico' 
  | 'Minimalista' 
  | 'Blackwork' 
  | 'Ver Mais';

// Tipo para imagens do portfolio
export interface PortfolioImage {
  src: string;
  category: PortfolioCategory;
  description: string;
  type: 'image' | 'instagram';
  link?: string; // Apenas para tipo instagram
}

// Tipo para informações de contato
export interface ContactInfo {
  whatsappNumber: string;
  email: string;
  address: string; // Agora inclui "1º andar"
  googleMapsEmbedUrl: string;
}

// Tipo para features do estúdio
export interface StudioFeature {
  title: string;
  description: string;
}

// Tipo para imagens do estúdio
export interface StudioImage {
  src: string;
  title: string;
  description: string;
  highlight: string;
}

// Tipos para formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Tipo para dados de navegação
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Tipo para configuração de idiomas
export interface LanguageConfig {
  defaultLanguage: string;
  supportedLanguages: readonly string[];
  storageKey: string;
  countryToLanguage: Record<string, string>;
}

// Tipo para configuração de SEO
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
}

// Tipo para configuração de analytics
export interface AnalyticsEvents {
  languageChange: string;
  contactForm: string;
  whatsappClick: string;
  portfolioView: string;
  studioVisit: string;
  colorfulTattooView: string; // NOVO: Evento para tattoos coloridas
}

// Tipo para validação de formulários
export interface FormValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

// Tipo para estado do carrossel
export interface CarouselState {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
  isPaused: boolean;
}

// Tipo para mapeamento de descrições traduzidas
export interface TranslatedDescriptions {
  [originalDescription: string]: string;
}

// Tipo para mapeamento de categorias traduzidas
export interface TranslatedCategories {
  [originalCategory: string]: string;
}