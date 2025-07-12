// 📊 Dados e Constantes - Configurações centralizadas

import { PortfolioImage, ContactInfo } from "../types";

export const WHATSAPP_NUMBER = "351911565927";

export const CONTACT_INFO: ContactInfo = {
  whatsappNumber: WHATSAPP_NUMBER,
  email: "briandantastattoo@gmail.com",
  address: "Av. da Liberdade, 666, Braga - Portugal, 4710-249",
  googleMapsEmbedUrl: "https://maps.app.goo.gl/3um8gEnsfk781AH99",
};

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    src: "/img/tattoos/fine_line_1.jpeg",
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
    src: "/img/tattoos/fine_line_2.jpeg",
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
    src: "/img/tattoos/fine_line_3.jpeg",
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

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "portfolio", label: "Portfolio" },
  { id: "studio", label: "Estúdio" },
  { id: "contact", label: "Contato" },
  { id: "location", label: "Localização" },
];

// =============================================================================
// DADOS DO ESTÚDIO - NOVOS
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
    src: "/img/studio/studio-1.jpeg",
    title: "Ambiente Principal",
    description:
      "Estúdio moderno e acolhedor, pensado para seu conforto e tranquilidade durante toda a sessão.",
    highlight: "Equipamentos de última geração",
  },
  {
    src: "/img/studio/studio-2.jpeg",
    title: "Área de Trabalho",
    description:
      "Espaço esterilizado e organizado, seguindo os mais rigorosos protocolos de biossegurança.",
    highlight: "Ambiente 100% esterilizado",
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
