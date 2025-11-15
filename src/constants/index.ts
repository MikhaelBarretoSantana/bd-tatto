// 📊 Dados e Constantes - Configurações centralizadas e atualizadas

import { PortfolioImage, ContactInfo } from "../types";

export const WHATSAPP_NUMBER = "351911565927";

export const CONTACT_INFO: ContactInfo = {
  whatsappNumber: WHATSAPP_NUMBER,
  email: "briandantas.tattoo@gmail.com",
  address: "Rua do Carmo, 79 - Braga, Portugal - 4700-309",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.9698795913666!2d-8.429054!3d41.549986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24fea882e0d115%3A0x5c6b4c0b8c2b4c0b!2sRua%20do%20Carmo%2079%2C%204700-309%20Braga!5e0!3m2!1spt-BR!2sbr!4v1731687600000!5m2!1spt-BR!2sbr",
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
    src: "/img/tattoos/colorfull_1.jpeg",
    category: "Colorida", // CORRIGIDO: Mudado de "Colorful" para "Colorida"
    description: "Cores vibrantes e técnica impecável", // ATUALIZADO: Descrição correta
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
    src: "/img/studio/studio-5.jpeg",
    title: "Sala de Tatuagem",
    description:
      "Sala privativa com cadeira ergonômica profissional, iluminação LED moderna em padrão hexagonal no teto e equipamentos de última geração para máximo conforto durante a sessão.",
    highlight: "Design moderno e confortável",
  },
  {
    src: "/img/studio/studio-6.jpeg",
    title: "Recepção do Estúdio",
    description:
      "Ambiente de recepção sofisticado com decoração artística de anatomia, balcão de atendimento moderno em madeira ripada, iluminação profissional e espaço acolhedor para consultas.",
    highlight: "Atendimento personalizado",
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
  defaultLanguage: "pt" as const,
  supportedLanguages: ["pt", "en", "es", "fr"] as const,
  storageKey: "bd-tattoo-language",

  // Mapeamento de códigos de país para idiomas
  countryToLanguage: {
    pt: "pt",
    br: "pt",
    us: "en",
    gb: "en",
    ca: "en",
    au: "en",
    es: "es",
    mx: "es",
    ar: "es",
    co: "es",
    pe: "es",
    fr: "fr",
    be: "fr",
    ch: "fr",
    ma: "fr",
  },
};

// URLs para diferentes idiomas (se houver subdominios futuros)
export const LANGUAGE_URLS = {
  pt: "https://bdtattoo.com",
  en: "https://bdtattoo.com/en",
  es: "https://bdtattoo.com/es",
  fr: "https://bdtattoo.com/fr",
};

// Meta tags por idioma para SEO - ATUALIZADAS com endereço completo
export const SEO_CONFIG = {
  pt: {
    title: "BD Tattoo - Brian Dantas | Tatuagens Realismo e Fine Line em Braga",
    description:
      "BD Tattoo - Brian Dantas, tatuador profissional em Braga especializado em Realismo e Fine Line. Mais de 5 anos criando arte única na pele. Rua do Carmo, 79 - Braga - 4700-309.",
    keywords:
      "tatuagem, tattoo, realismo, fine line, colorida, Braga, Portugal, Brian Dantas, estúdio, arte corporal, Rua do Carmo",
  },
  en: {
    title: "BD Tattoo - Brian Dantas | Realism and Fine Line Tattoos in Braga",
    description:
      "BD Tattoo - Brian Dantas, professional tattoo artist in Braga specialized in Realism and Fine Line. Over 5 years creating unique skin art. Rua do Carmo, 79 - Braga - 4700-309.",
    keywords:
      "tattoo, realism, fine line, colorful, Braga, Portugal, Brian Dantas, studio, body art, professional, Rua do Carmo",
  },
  es: {
    title: "BD Tattoo - Brian Dantas | Tatuajes Realismo y Fine Line en Braga",
    description:
      "BD Tattoo - Brian Dantas, tatuador profesional en Braga especializado en Realismo y Fine Line. Más de 5 años creando arte único en la piel. Rua do Carmo, 79 - Braga - 4700-309.",
    keywords:
      "tatuaje, realismo, fine line, colorida, Braga, Portugal, Brian Dantas, estudio, arte corporal, Rua do Carmo",
  },
  fr: {
    title: "BD Tattoo - Brian Dantas | Tatouages Réalisme et Fine Line à Braga",
    description:
      "BD Tattoo - Brian Dantas, tatoueur professionnel à Braga spécialisé en Réalisme et Fine Line. Plus de 5 ans à créer de l'art unique sur la peau. Rua do Carmo, 79 - Braga - 4700-309.",
    keywords:
      "tatouage, réalisme, fine line, colorée, Braga, Portugal, Brian Dantas, studio, art corporel, Rua do Carmo",
  },
};

// Configurações para analytics por idioma
export const ANALYTICS_CONFIG = {
  // Eventos personalizados para diferentes idiomas
  events: {
    languageChange: "language_change",
    contactForm: "contact_form_submit",
    whatsappClick: "whatsapp_click",
    portfolioView: "portfolio_view",
    studioVisit: "studio_visit_request",
    // NOVO: Evento para visualização de tattoos coloridas
    colorfulTattooView: "colorful_tattoo_view",
  },
};