// 📊 Dados e Constantes - Configurações centralizadas e atualizadas

import { PortfolioImage, ContactInfo } from "../types";

export const WHATSAPP_NUMBER = "351911565927";

export const CONTACT_INFO: ContactInfo = {
  whatsappNumber: WHATSAPP_NUMBER,
  email: "briandantas.tattoo@gmail.com",
  address: "Av. da Liberdade, 666 - Braga",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.886392920909!2d-8.422062!3d41.550056999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ff5d1450def7%3A0x278d08c027a9465a!2sBrian%20Dantas%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1752101694260!5m2!1spt-BR!2sbr",
};

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    src: "/img/tattoos/fine_line_4.jpeg",
    category: "Fine Line",
    description: "Traços delicados e minimalistas",
    type: "image",
  },
  {
    src: "/img/tattoos/realismo_1.jpeg",
    category: "Realismo",
    description: "Detalhes hiper-realistas com sombreado profissional",
    type: "image",
  },
  {
    src: "/img/tattoos/fine_line_5.jpeg",
    category: "Fine Line",
    description: "Linhas finas e precisas com elegância",
    type: "image",
  },
  {
    src: "/img/tattoos/realismo_2.jpeg",
    category: "Realismo",
    description: "Texturas realistas e profundidade visual",
    type: "image",
  },
  {
    src: "/img/tattoos/fine_line_6.jpeg",
    category: "Fine Line",
    description: "Arte sutil com traços refinados",
    type: "image",
  },
  {
    src: "/img/tattoos/realismo_3.jpeg",
    category: "Realismo",
    description: "Técnica realista com riqueza de detalhes",
    type: "image",
  },
  {
    src: "/img/brian-dantas.jpeg",
    category: "Ver Mais",
    description: "Confira todos os nossos trabalhos",
    type: "instagram",
    link: "https://www.instagram.com/briandantastattoo/?utm_source=ig_web_button_share_sheet",
  },
];

// =============================================================================
// DADOS DO ESTÚDIO
// =============================================================================
export interface StudioImage {
  src: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StudioFeature {
  icon: string;
  title: string;
  description: string;
}

export const STUDIO_IMAGES: StudioImage[] = [
  {
    src: "/img/studio/studio-3.jpeg",
    title: "Área de Trabalho",
    description:
      "Espaço esterilizado e organizado, seguindo os mais rigorosos protocolos de biossegurança.",
    highlight: "Ambiente 100% esterilizado",
  },
  {
    src: "/img/studio/studio-4.jpeg",
    title: "Onde Braga Pulsa",
    description:
      "Situado na icônica Avenida da Liberdade, no coração de Braga, com acesso facilitado ao transporte público e área comercial movimentada.",
    highlight: "Centro histórico de Braga",
  },
];

export const STUDIO_FEATURES = [
  {
    title: "Biossegurança Total",
    description:
      "Protocolos rigorosos de esterilização e materiais descartáveis",
  },
  {
    title: "Equipamentos Premium",
    description: "Máquinas profissionais e tintas de primeira qualidade",
  },
  {
    title: "Ambiente Acolhedor",
    description:
      "Espaço pensado para proporcionar máximo conforto e relaxamento",
  },
];

// Configurações de idiomas
export const LANGUAGE_CONFIG = {
  defaultLanguage: 'pt' as const,
  supportedLanguages: ['pt', 'en', 'es', 'fr'] as const,
  storageKey: 'bd-tattoo-language',
  
  // Mapeamento de códigos de país para idiomas
  countryToLanguage: {
    'pt': 'pt',
    'br': 'pt',
    'us': 'en',
    'gb': 'en',
    'ca': 'en',
    'au': 'en',
    'es': 'es',
    'mx': 'es',
    'ar': 'es',
    'co': 'es',
    'pe': 'es',
    'fr': 'fr',
    'be': 'fr',
    'ch': 'fr',
    'ma': 'fr'
  }
};

// URLs para diferentes idiomas (se houver subdominios futuros)
export const LANGUAGE_URLS = {
  pt: 'https://bdtattoo.com',
  en: 'https://bdtattoo.com/en',
  es: 'https://bdtattoo.com/es',
  fr: 'https://bdtattoo.com/fr'
};

// Meta tags por idioma para SEO
export const SEO_CONFIG = {
  pt: {
    title: "BD Tattoo - Brian Dantas | Tatuagens Realismo e Fine Line em Braga",
    description: "BD Tattoo - Brian Dantas, tatuador profissional em Braga especializado em Realismo e Fine Line. Mais de 5 anos criando arte única na pele.",
    keywords: "tatuagem, tattoo, realismo, fine line, Braga, Portugal, Brian Dantas, estúdio, arte corporal"
  },
  en: {
    title: "BD Tattoo - Brian Dantas | Realism and Fine Line Tattoos in Braga",
    description: "BD Tattoo - Brian Dantas, professional tattoo artist in Braga specialized in Realism and Fine Line. Over 5 years creating unique skin art.",
    keywords: "tattoo, realism, fine line, Braga, Portugal, Brian Dantas, studio, body art, professional"
  },
  es: {
    title: "BD Tattoo - Brian Dantas | Tatuajes Realismo y Fine Line en Braga",
    description: "BD Tattoo - Brian Dantas, tatuador profesional en Braga especializado en Realismo y Fine Line. Más de 5 años creando arte único en la piel.",
    keywords: "tatuaje, realismo, fine line, Braga, Portugal, Brian Dantas, estudio, arte corporal"
  },
  fr: {
    title: "BD Tattoo - Brian Dantas | Tatouages Réalisme et Fine Line à Braga",
    description: "BD Tattoo - Brian Dantas, tatoueur professionnel à Braga spécialisé en Réalisme et Fine Line. Plus de 5 ans à créer de l'art unique sur la peau.",
    keywords: "tatouage, réalisme, fine line, Braga, Portugal, Brian Dantas, studio, art corporel"
  }
};

// Configurações para analytics por idioma
export const ANALYTICS_CONFIG = {
  // Eventos personalizados para diferentes idiomas
  events: {
    languageChange: 'language_change',
    contactForm: 'contact_form_submit',
    whatsappClick: 'whatsapp_click',
    portfolioView: 'portfolio_view',
    studioVisit: 'studio_visit_request'
  }
};