// types/i18n.ts
export type Language = 'pt' | 'en' | 'es' | 'fr';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export interface HeaderTranslation {
  home: string;
  about: string;
  portfolio: string;
  studio: string;
  trust: string;
  contact: string;
  location: string;
}

export interface HeroTranslation {
  subtitle: string;
  description: string;
  cta: string;
}

export interface AboutTranslation {
  title: string;
  artistName: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  imageAlt: string;
}

export interface PortfolioTranslation {
  title: string;
  subtitle: string;
  instructions: string;
  prevButton: string;
  nextButton: string;
  slideIndicator: string;
  instagram: {
    title: string;
    description: string;
    followButton: string;
  };
  descriptions: {
    fineLine1: string;
    fineLine2: string;
    fineLine3: string;
    realism1: string;
    realism2: string;
    realism3: string;
    colorful1: string;
    colorful2: string;
    colorful3: string;
  };
}

export interface StudioTranslation {
  title: string;
  subtitle: string;
  featuresTitle: string;
  features: {
    uniqueAndPerfect: {
      title: string;
      description: string;
    };
    personalizedArt: {
      title: string;
      description: string;
    };
    specialization: {
      title: string;
      description: string;
    };
    internationalExperience: {
      title: string;
      description: string;
    };
    premiumService: {
      title: string;
      description: string;
    };
    exclusiveStudio: {
      title: string;
      description: string;
    };
  };
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  images: {
    workspace: {
      title: string;
      description: string;
      highlight: string;
    };
    reception: {
      title: string;
      description: string;
      highlight: string;
    };
  };
}

export interface TrustTranslation {
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface ContactTranslation {
  title: string;
  address: string;
  phone: string;
  email: string;
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    characterCount: string;
    submitButton: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
  };
}

export interface MapTranslation {
  title: string;
  description: string;
  locationTitle: string;
  address: string;
  ctaButton: string;
  ctaTitle: string;
  mapTitle: string;
}

export interface FooterTranslation {
  copyright: string;
  followInstagram: string;
  contactWhatsApp: string;
}

export interface WhatsAppTranslation {
  defaultMessage: string;
  studioVisitMessage: string;
  contactFormMessage: string;
}

export interface AccessibilityTranslation {
  openMenu: string;
  closeMenu: string;
  openWhatsApp: string;
  previousImage: string;
  nextImage: string;
  goToSlide: string;
  scheduleVisit: string;
}

export interface PortfolioCategoriesTranslation {
  realism: string;
  fineLine: string;
  geometric: string;
  minimalist: string;
  blackwork: string;
  colorful: string;
}

export interface Translation {
  header: HeaderTranslation;
  hero: HeroTranslation;
  about: AboutTranslation;
  portfolio: PortfolioTranslation;
  studio: StudioTranslation;
  trust: TrustTranslation;
  contact: ContactTranslation;
  map: MapTranslation;
  footer: FooterTranslation;
  whatsapp: WhatsAppTranslation;
  accessibility: AccessibilityTranslation;
  portfolioCategories: PortfolioCategoriesTranslation;
}