// 🏷️ Tipos e Interfaces - Base do projeto

export interface PortfolioImage {
  src: string;
  category: string;
  description: string;
  type: 'image' | 'instagram';
  link?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormValidation {
  emailValid: boolean;
  phoneValid: boolean;
}

export interface ContactInfo {
  whatsappNumber: string;
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
}