// i18n/translations.ts
// 🌍 Traduções corrigidas com textos originais do estúdio

import { Translation, LanguageOption } from '../types/i18n';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'pt',
    name: 'Português',
    nativeName: 'Português',
    flag: '🇵🇹'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷'
  }
];

// Tradução em Português (padrão)
const pt: Translation = {
  header: {
    home: 'Início',
    about: 'Sobre',
    portfolio: 'Portfolio',
    studio: 'Estúdio',
    trust: 'Confiança',
    contact: 'Contato',
    location: 'Localização'
  },
  hero: {
    subtitle: 'Sua história transformada em arte para a vida toda.',
    description: 'Projetos personalizados em realismo e fineline, com técnica precisa e acabamento sofisticado.',
    cta: 'Agende Sua Consulta'
  },
  about: {
    title: 'O Artista',
    artistName: 'Brian Dantas',
    paragraph1: 'Sou Brian Dantas, tatuador focado em realismo, fineline e tattoos minimalistas.',
    paragraph2: 'Meu trabalho é transformar ideias em tatuagens autorais, com traços precisos, estética equilibrada e atenção total aos detalhes. Cada projeto é criado de forma única, respeitando a história de quem carrega a arte e a harmonia do corpo.',
    paragraph3: 'Atendo no THE BRIDGE TATTOO, em Braga, com um processo cuidadoso, atendimento individual e padrões rigorosos de segurança e higiene.',
    imageAlt: 'Brian Dantas - Tatuador profissional especializado em Realismo e Fine Line'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Alguns dos nossos trabalhos mais recentes',
    instructions: 'Use as setas do teclado para navegar entre as imagens, ou deslize o dedo em dispositivos touch',
    prevButton: 'Imagem anterior',
    nextButton: 'Próxima imagem',
    slideIndicator: 'Slide {current} de {total}',
    instagram: {
      title: 'Veja mais no Instagram',
      description: 'Acompanhe nossos trabalhos diários e bastidores',
      followButton: 'Seguir no Instagram'
    },
    descriptions: {
      fineLine1: 'Traços delicados e minimalistas',
      fineLine2: 'Linhas finas e precisas com elegância',
      fineLine3: 'Arte sutil com traços refinados',
      realism1: 'Detalhes hiper-realistas com sombreado profissional',
      realism2: 'Texturas realistas e profundidade visual',
      realism3: 'Técnica realista com riqueza de detalhes',
      colorful1: 'Cores vibrantes e técnica impecável',
      colorful2: 'Arte colorida com pigmentação intensa',
      colorful3: 'Explosão de cores com degradês perfeitos'
    }
  },
  studio: {
    title: 'Conheça Nosso Estúdio',
    subtitle: 'Um ambiente profissional, seguro e acolhedor, pensado especialmente para você',
    featuresTitle: 'Nossos Diferenciais',
    features: {
      uniqueAndPerfect: {
        title: 'Arte Única e Impecável',
        description: 'Cada tatuagem criada é pensada para ser única, atemporal e tecnicamente impecável. Meu foco não é quantidade, e sim qualidade, exclusividade e confiança em cada etapa do processo.'
      },
      personalizedArt: {
        title: 'Arte 100% Personalizada',
        description: 'Cada projeto é desenvolvido do zero, respeitando sua ideia, estilo e a anatomia do corpo.'
      },
      specialization: {
        title: 'Especialização em Realismo, Fine Line e Minimalismo',
        description: 'Traços precisos, detalhes sutis e composições que envelhecem bem com o tempo.'
      },
      internationalExperience: {
        title: 'Experiência Internacional',
        description: 'Referências e padrões profissionais adquiridos no Brasil, Holanda e Portugal.'
      },
      premiumService: {
        title: 'Atendimento Premium e Individual',
        description: 'Processo próximo, transparente e totalmente focado em você — do primeiro contato ao pós-tattoo.'
      },
      exclusiveStudio: {
        title: 'Estúdio Exclusivo e Seguro em Braga',
        description: 'Ambiente confortável, controlado, materiais descartáveis e protocolos rigorosos de higiene.'
      }
    },
    ctaTitle: 'Venha Conhecer Pessoalmente',
    ctaDescription: 'Agende uma visita e veja de perto onde sua arte será criada',
    ctaButton: 'Agendar Visita ao Estúdio',
    images: {
      workspace: {
        title: 'Sala de Tatuagem',
        description: 'Sala privativa com cadeira ergonômica profissional, iluminação LED moderna em padrão hexagonal no teto e equipamentos de última geração para máximo conforto durante a sessão.',
        highlight: 'Design moderno e confortável'
      },
      reception: {
        title: 'Recepção do Estúdio',
        description: 'Ambiente de recepção sofisticado com decoração artística de anatomia, balcão de atendimento moderno em madeira ripada, iluminação profissional e espaço acolhedor para consultas.',
        highlight: 'Atendimento personalizado'
      }
    }
  },
  trust: {
    title: 'Confiança e Segurança',
    subtitle: 'Compromisso com qualidade e segurança',
    items: [
      {
        title: 'Compromisso com qualidade e segurança',
        description: ''
      },
      {
        title: 'Atendimento individual e com hora marcada',
        description: ''
      },
      {
        title: 'Materiais descartáveis e esterilização rigorosa',
        description: ''
      },
      {
        title: 'Orientações completas de cuidados pós-tattoo',
        description: ''
      },
      {
        title: 'Suporte mesmo após a sessão',
        description: ''
      }
    ]
  },
  contact: {
    title: 'Agende Sua Sessão',
    address: 'Rua do Carmo, 79 - Braga, Portugal - 4700-309',
    phone: '+351 911 565 927',
    email: 'briandantas.tattoo@gmail.com',
    form: {
      namePlaceholder: 'Seu Nome Completo',
      emailPlaceholder: 'seu.email@exemplo.com',
      phonePlaceholder: 'Número de telefone (apenas números)',
      messagePlaceholder: 'Descreva sua ideia de tatuagem (estilo, tamanho, localização no corpo, referências...)',
      characterCount: 'caracteres',
      submitButton: 'Enviar via WhatsApp',
      nameLabel: 'Nome completo',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      messageLabel: 'Descrição da ideia de tatuagem'
    }
  },
  map: {
    title: 'Nossa Localização',
    description: 'Venha nos visitar no nosso estúdio. Estamos localizados em um ambiente acolhedor e profissional.',
    locationTitle: 'Localização',
    address: 'Rua do Carmo, 79\nBraga - Portugal\n4700-309',
    ctaButton: 'Agendar pelo WhatsApp',
    ctaTitle: 'Agendar pelo WhatsApp',
    mapTitle: 'Localização BD Tattoo Studio'
  },
  footer: {
    copyright: '© 2025 BD Tattoo. Todos os direitos reservados.',
    followInstagram: 'Seguir no Instagram',
    contactWhatsApp: 'Contatar via WhatsApp'
  },
  whatsapp: {
    defaultMessage: 'Olá! Gostaria de agendar uma consulta para tatuagem.',
    studioVisitMessage: 'Olá! Gostaria de agendar uma visita ao estúdio.',
    contactFormMessage: 'Olá! Tenho interesse em fazer uma tatuagem.\n\nNome: {name}\nEmail: {email}\nTelefone: {phone}\n\nDescrição da ideia:\n{message}'
  },
  accessibility: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    openWhatsApp: 'Abrir conversa no WhatsApp',
    previousImage: 'Imagem anterior',
    nextImage: 'Próxima imagem',
    goToSlide: 'Ir para slide {number}',
    scheduleVisit: 'Agendar visita'
  },
  portfolioCategories: {
    realism: 'Realismo',
    fineLine: 'Fine Line',
    geometric: 'Geométrico',
    minimalist: 'Minimalista',
    blackwork: 'Blackwork',
    colorful: 'Colorida'
  }
};

// Tradução em Inglês
const en: Translation = {
  header: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    studio: 'Studio',
    trust: 'Trust',
    contact: 'Contact',
    location: 'Location'
  },
  hero: {
    subtitle: 'Your story transformed into art for life.',
    description: 'Personalized projects in realism and fine line, with precise technique and sophisticated finish.',
    cta: 'Schedule Your Consultation'
  },
  about: {
    title: 'The Artist',
    artistName: 'Brian Dantas',
    paragraph1: "I'm Brian Dantas, a tattoo artist focused on realism, fine line and minimalist tattoos.",
    paragraph2: "My work is to transform ideas into original tattoos, with precise lines, balanced aesthetics and total attention to detail. Each project is created in a unique way, respecting the story of those who carry the art and the harmony of the body.",
    paragraph3: "I work at THE BRIDGE TATTOO, in Braga, with a careful process, individual service and rigorous standards of safety and hygiene.",
    imageAlt: 'Brian Dantas - Professional tattoo artist specialized in Realism and Fine Line'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Some of our most recent work',
    instructions: 'Use keyboard arrows to navigate between images, or swipe on touch devices',
    prevButton: 'Previous image',
    nextButton: 'Next image',
    slideIndicator: 'Slide {current} of {total}',
    instagram: {
      title: 'See more on Instagram',
      description: 'Follow our daily work and behind the scenes',
      followButton: 'Follow on Instagram'
    },
    descriptions: {
      fineLine1: 'Delicate and minimalist strokes',
      fineLine2: 'Fine and precise lines with elegance',
      fineLine3: 'Subtle art with refined strokes',
      realism1: 'Hyper-realistic details with professional shading',
      realism2: 'Realistic textures and visual depth',
      realism3: 'Realistic technique with rich details',
      colorful1: 'Vibrant colors and impeccable technique',
      colorful2: 'Colorful art with intense pigmentation',
      colorful3: 'Color explosion with perfect gradients'
    }
  },
  studio: {
    title: 'Meet Our Studio',
    subtitle: 'A professional, safe and welcoming environment, designed especially for you',
    featuresTitle: 'Our Differentials',
    features: {
      uniqueAndPerfect: {
        title: 'Unique and Impeccable Art',
        description: 'Every tattoo created is designed to be unique, timeless and technically impeccable. My focus is not on quantity, but on quality, exclusivity and trust at every stage of the process.'
      },
      personalizedArt: {
        title: '100% Personalized Art',
        description: 'Each project is developed from scratch, respecting your idea, style and body anatomy.'
      },
      specialization: {
        title: 'Specialization in Realism, Fine Line and Minimalism',
        description: 'Precise lines, subtle details and compositions that age well over time.'
      },
      internationalExperience: {
        title: 'International Experience',
        description: 'Professional references and standards acquired in Brazil, Netherlands and Portugal.'
      },
      premiumService: {
        title: 'Premium and Individual Service',
        description: 'Close, transparent process and totally focused on you — from first contact to post-tattoo.'
      },
      exclusiveStudio: {
        title: 'Exclusive and Safe Studio in Braga',
        description: 'Comfortable, controlled environment, disposable materials and rigorous hygiene protocols.'
      }
    },
    ctaTitle: 'Come Visit in Person',
    ctaDescription: 'Schedule a visit and see up close where your art will be created',
    ctaButton: 'Schedule Studio Visit',
    images: {
      workspace: {
        title: 'Tattoo Room',
        description: 'Private room with professional ergonomic chair, modern LED lighting in hexagonal pattern on the ceiling and state-of-the-art equipment for maximum comfort during the session.',
        highlight: 'Modern and comfortable design'
      },
      reception: {
        title: 'Studio Reception',
        description: 'Sophisticated reception area with artistic anatomy decoration, modern slatted wood service counter, professional lighting and welcoming space for consultations.',
        highlight: 'Personalized service'
      }
    }
  },
  trust: {
    title: 'Trust and Safety',
    subtitle: 'Commitment to quality and safety',
    items: [
      {
        title: 'Commitment to quality and safety',
        description: ''
      },
      {
        title: 'Individual and appointment-based service',
        description: ''
      },
      {
        title: 'Disposable materials and rigorous sterilization',
        description: ''
      },
      {
        title: 'Complete post-tattoo care guidance',
        description: ''
      },
      {
        title: 'Support even after the session',
        description: ''
      }
    ]
  },
  contact: {
    title: 'Schedule Your Session',
    address: 'Rua do Carmo, 79 - Braga, Portugal - 4700-309',
    phone: '+351 911 565 927',
    email: 'briandantas.tattoo@gmail.com',
    form: {
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'your.email@example.com',
      phonePlaceholder: 'Phone number (numbers only)',
      messagePlaceholder: 'Describe your tattoo idea (style, size, body location, references...)',
      characterCount: 'characters',
      submitButton: 'Send via WhatsApp',
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      messageLabel: 'Tattoo idea description'
    }
  },
  map: {
    title: 'Our Location',
    description: 'Come visit us at our studio. We are located in a welcoming and professional environment.',
    locationTitle: 'Location',
    address: 'Rua do Carmo, 79\nBraga - Portugal\n4700-309',
    ctaButton: 'Schedule via WhatsApp',
    ctaTitle: 'Schedule via WhatsApp',
    mapTitle: 'BD Tattoo Studio Location'
  },
  footer: {
    copyright: '© 2025 BD Tattoo. All rights reserved.',
    followInstagram: 'Follow on Instagram',
    contactWhatsApp: 'Contact via WhatsApp'
  },
  whatsapp: {
    defaultMessage: 'Hello! I would like to schedule a tattoo consultation.',
    studioVisitMessage: 'Hello! I would like to schedule a studio visit.',
    contactFormMessage: 'Hello! I am interested in getting a tattoo.\n\nName: {name}\nEmail: {email}\nPhone: {phone}\n\nIdea description:\n{message}'
  },
  accessibility: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    openWhatsApp: 'Open WhatsApp conversation',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    goToSlide: 'Go to slide {number}',
    scheduleVisit: 'Schedule visit'
  },
  portfolioCategories: {
    realism: 'Realism',
    fineLine: 'Fine Line',
    geometric: 'Geometric',
    minimalist: 'Minimalist',
    blackwork: 'Blackwork',
    colorful: 'Colorful'
  }
};

// Tradução em Espanhol
const es: Translation = {
  header: {
    home: 'Inicio',
    about: 'Acerca',
    portfolio: 'Portfolio',
    studio: 'Estudio',
    trust: 'Confianza',
    contact: 'Contacto',
    location: 'Ubicación'
  },
  hero: {
    subtitle: 'Tu historia transformada en arte para toda la vida.',
    description: 'Proyectos personalizados en realismo y fineline, con técnica precisa y acabado sofisticado.',
    cta: 'Agenda Tu Consulta'
  },
  about: {
    title: 'El Artista',
    artistName: 'Brian Dantas',
    paragraph1: "Soy Brian Dantas, tatuador enfocado en realismo, fine line y tatuajes minimalistas.",
    paragraph2: "Mi trabajo es transformar ideas en tatuajes originales, con trazos precisos, estética equilibrada y atención total a los detalles. Cada proyecto es creado de forma única, respetando la historia de quienes portan el arte y la armonía del cuerpo.",
    paragraph3: "Trabajo en THE BRIDGE TATTOO, en Braga, con un proceso cuidadoso, atención individual y estándares rigurosos de seguridad e higiene.",
    imageAlt: 'Brian Dantas - Tatuador profesional especializado en Realismo y Fine Line'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Algunos de nuestros trabajos más recientes',
    instructions: 'Usa las flechas del teclado para navegar entre las imágenes, o desliza el dedo en dispositivos táctiles',
    prevButton: 'Imagen anterior',
    nextButton: 'Siguiente imagen',
    slideIndicator: 'Diapositiva {current} de {total}',
    instagram: {
      title: 'Ver más en Instagram',
      description: 'Sigue nuestros trabajos diarios y bastidores',
      followButton: 'Seguir en Instagram'
    },
    descriptions: {
      fineLine1: 'Trazos delicados y minimalistas',
      fineLine2: 'Líneas finas y precisas con elegancia',
      fineLine3: 'Arte sutil con trazos refinados',
      realism1: 'Detalles hiper-realistas con sombreado profesional',
      realism2: 'Texturas realistas y profundidad visual',
      realism3: 'Técnica realista con riqueza de detalles',
      colorful1: 'Colores vibrantes y técnica impecable',
      colorful2: 'Arte colorido con pigmentación intensa',
      colorful3: 'Explosión de colores con degradados perfectos'
    }
  },
  studio: {
    title: 'Conoce Nuestro Estudio',
    subtitle: 'Un ambiente profesional, seguro y acogedor, pensado especialmente para ti',
    featuresTitle: 'Nuestros Diferenciales',
    features: {
      uniqueAndPerfect: {
        title: 'Arte Único e Impecable',
        description: 'Cada tatuaje creado está pensado para ser único, atemporal y técnicamente impecable. Mi enfoque no es cantidad, sino calidad, exclusividad y confianza en cada paso del proceso.'
      },
      personalizedArt: {
        title: 'Arte 100% Personalizado',
        description: 'Cada proyecto se desarrolla desde cero, respetando tu idea, estilo y la anatomía del cuerpo.'
      },
      specialization: {
        title: 'Especialización en Realismo, Fine Line y Minimalismo',
        description: 'Trazos precisos, detalles sutiles y composiciones que envejecen bien con el tiempo.'
      },
      internationalExperience: {
        title: 'Experiencia Internacional',
        description: 'Referencias y estándares profesionales adquiridos en Brasil, Holanda y Portugal.'
      },
      premiumService: {
        title: 'Atención Premium e Individual',
        description: 'Proceso cercano, transparente y totalmente enfocado en ti — desde el primer contacto hasta el post-tatuaje.'
      },
      exclusiveStudio: {
        title: 'Estudio Exclusivo y Seguro en Braga',
        description: 'Ambiente cómodo, controlado, materiales desechables y protocolos rigurosos de higiene.'
      }
    },
    ctaTitle: 'Ven a Conocer en Persona',
    ctaDescription: 'Agenda una visita y ve de cerca donde se creará tu arte',
    ctaButton: 'Agendar Visita al Estudio',
    images: {
      workspace: {
        title: 'Sala de Tatuaje',
        description: 'Sala privada con silla ergonómica profesional, iluminación LED moderna en patrón hexagonal en el techo y equipos de última generación para máximo confort durante la sesión.',
        highlight: 'Diseño moderno y confortable'
      },
      reception: {
        title: 'Recepción del Estudio',
        description: 'Ambiente de recepción sofisticado con decoración artística de anatomía, mostrador de atención moderno en madera ranurada, iluminación profesional y espacio acogedor para consultas.',
        highlight: 'Atención personalizada'
      }
    }
  },
  trust: {
    title: 'Confianza y Seguridad',
    subtitle: 'Compromiso con calidad y seguridad',
    items: [
      {
        title: 'Compromiso con calidad y seguridad',
        description: ''
      },
      {
        title: 'Atención individual y con cita programada',
        description: ''
      },
      {
        title: 'Materiales desechables y esterilización rigurosa',
        description: ''
      },
      {
        title: 'Orientaciones completas de cuidados post-tatuaje',
        description: ''
      },
      {
        title: 'Apoyo incluso después de la sesión',
        description: ''
      }
    ]
  },
  contact: {
    title: 'Agenda Tu Sesión',
    address: 'Rua do Carmo, 79 - Braga, Portugal - 4700-309',
    phone: '+351 911 565 927',
    email: 'briandantas.tattoo@gmail.com',
    form: {
      namePlaceholder: 'Tu Nombre Completo',
      emailPlaceholder: 'tu.email@ejemplo.com',
      phonePlaceholder: 'Número de teléfono (solo números)',
      messagePlaceholder: 'Describe tu idea de tatuaje (estilo, tamaño, ubicación en el cuerpo, referencias...)',
      characterCount: 'caracteres',
      submitButton: 'Enviar por WhatsApp',
      nameLabel: 'Nombre completo',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      messageLabel: 'Descripción de la idea de tatuaje'
    }
  },
  map: {
    title: 'Nuestra Ubicación',
    description: 'Ven a visitarnos en nuestro estudio. Estamos ubicados en un ambiente acogedor y profesional.',
    locationTitle: 'Ubicación',
    address: 'Rua do Carmo, 79\nBraga - Portugal\n4700-309',
    ctaButton: 'Agendar por WhatsApp',
    ctaTitle: 'Agendar por WhatsApp',
    mapTitle: 'Ubicación BD Tattoo Studio'
  },
  footer: {
    copyright: '© 2025 BD Tattoo. Todos los derechos reservados.',
    followInstagram: 'Seguir en Instagram',
    contactWhatsApp: 'Contactar por WhatsApp'
  },
  whatsapp: {
    defaultMessage: '¡Hola! Me gustaría agendar una consulta para tatuaje.',
    studioVisitMessage: '¡Hola! Me gustaría agendar una visita al estudio.',
    contactFormMessage: '¡Hola! Tengo interés en hacerme un tatuaje.\n\nNombre: {name}\nEmail: {email}\nTeléfono: {phone}\n\nDescripción de la idea:\n{message}'
  },
  accessibility: {
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    openWhatsApp: 'Abrir conversación de WhatsApp',
    previousImage: 'Imagen anterior',
    nextImage: 'Siguiente imagen',
    goToSlide: 'Ir a la diapositiva {number}',
    scheduleVisit: 'Agendar visita'
  },
  portfolioCategories: {
    realism: 'Realismo',
    fineLine: 'Fine Line',
    geometric: 'Geométrico',
    minimalist: 'Minimalista',
    blackwork: 'Blackwork',
    colorful: 'Colorida'
  }
};

// Tradução em Francês
const fr: Translation = {
  header: {
    home: 'Accueil',
    about: 'À propos',
    portfolio: 'Portfolio',
    studio: 'Studio',
    trust: 'Confiance',
    contact: 'Contact',
    location: 'Localisation'
  },
  hero: {
    subtitle: 'Votre histoire transformée en art pour la vie.',
    description: 'Projets personnalisés en réalisme et fineline, avec une technique précise et une finition sophistiquée.',
    cta: 'Planifiez Votre Consultation'
  },
  about: {
    title: 'L\'Artiste',
    artistName: 'Brian Dantas',
    paragraph1: "Je suis Brian Dantas, tatoueur spécialisé en réalisme, fine line et tatouages minimalistes.",
    paragraph2: "Mon travail est de transformer les idées en tatouages originaux, avec des traits précis, une esthétique équilibrée et une attention totale aux détails. Chaque projet est créé de manière unique, en respectant l'histoire de ceux qui portent l'art et l'harmonie du corps.",
    paragraph3: "Je travaille chez THE BRIDGE TATTOO, à Braga, avec un processus soigné, un service individuel et des normes rigoureuses de sécurité et d'hygiène.",
    imageAlt: 'Brian Dantas - Tatoueur professionnel spécialisé en Réalisme et Fine Line'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Quelques-uns de nos travaux les plus récents',
    instructions: 'Utilisez les flèches du clavier pour naviguer entre les images, ou glissez le doigt sur les appareils tactiles',
    prevButton: 'Image précédente',
    nextButton: 'Image suivante',
    slideIndicator: 'Diapositive {current} de {total}',
    instagram: {
      title: 'Voir plus sur Instagram',
      description: 'Suivez nos travaux quotidiens et les coulisses',
      followButton: 'Suivre sur Instagram'
    },
    descriptions: {
      fineLine1: 'Traits délicats et minimalistes',
      fineLine2: 'Lignes fines et précises avec élégance',
      fineLine3: 'Art subtil avec traits raffinés',
      realism1: 'Détails hyper-réalistes avec ombrage professionnel',
      realism2: 'Textures réalistes et profondeur visuelle',
      realism3: 'Technique réaliste avec richesse des détails',
      colorful1: 'Couleurs vibrantes et technique impeccable',
      colorful2: 'Art coloré avec pigmentation intense',
      colorful3: 'Explosion de couleurs avec dégradés parfaits'
    }
  },
  studio: {
    title: 'Découvrez Notre Studio',
    subtitle: 'Un environnement professionnel, sûr et accueillant, pensé spécialement pour vous',
    featuresTitle: 'Nos Différentiels',
    features: {
      uniqueAndPerfect: {
        title: 'Art Unique et Impeccable',
        description: 'Chaque tatouage créé est pensé pour être unique, intemporel et techniquement impeccable. Mon focus n\'est pas la quantité, mais la qualité, l\'exclusivité et la confiance à chaque étape du processus.'
      },
      personalizedArt: {
        title: 'Art 100% Personnalisé',
        description: 'Chaque projet est développé à partir de zéro, en respectant votre idée, votre style et l\'anatomie du corps.'
      },
      specialization: {
        title: 'Spécialisation en Réalisme, Fine Line et Minimalisme',
        description: 'Traits précis, détails subtils et compositions qui vieillissent bien au fil du temps.'
      },
      internationalExperience: {
        title: 'Expérience Internationale',
        description: 'Références et normes professionnelles acquises au Brésil, aux Pays-Bas et au Portugal.'
      },
      premiumService: {
        title: 'Service Premium et Individuel',
        description: 'Processus proche, transparent et totalement orienté vers vous — du premier contact au suivi post-tatouage.'
      },
      exclusiveStudio: {
        title: 'Studio Exclusif et Sûr à Braga',
        description: 'Environnement confortable, contrôlé, matériaux jetables et protocoles rigoureux d\'hygiène.'
      }
    },
    ctaTitle: 'Venez Nous Rendre Visite en Personne',
    ctaDescription: 'Planifiez une visite et voyez de près où votre art sera créé',
    ctaButton: 'Planifier Visite du Studio',
    images: {
      workspace: {
        title: 'Salle de Tatouage',
        description: 'Salle privée avec fauteuil ergonomique professionnel, éclairage LED moderne en motif hexagonal au plafond et équipements de dernière génération pour un confort maximal pendant la séance.',
        highlight: 'Design moderne et confortable'
      },
      reception: {
        title: 'Réception du Studio',
        description: 'Espace de réception sophistiqué avec décoration artistique d\'anatomie, comptoir d\'accueil moderne en bois rainuré, éclairage professionnel et espace accueillant pour consultations.',
        highlight: 'Service personnalisé'
      }
    }
  },
  trust: {
    title: 'Confiance et Sécurité',
    subtitle: 'Engagement envers la qualité et la sécurité',
    items: [
      {
        title: 'Engagement envers la qualité et la sécurité',
        description: ''
      },
      {
        title: 'Service individuel et sur rendez-vous',
        description: ''
      },
      {
        title: 'Matériaux jetables et stérilisation rigoureuse',
        description: ''
      },
      {
        title: 'Conseils complets de soins post-tatouage',
        description: ''
      },
      {
        title: 'Support même après la séance',
        description: ''
      }
    ]
  },
  contact: {
    title: 'Planifiez Votre Séance',
    address: 'Rua do Carmo, 79 - Braga, Portugal - 4700-309',
    phone: '+351 911 565 927',
    email: 'briandantas.tattoo@gmail.com',
    form: {
      namePlaceholder: 'Votre Nom Complet',
      emailPlaceholder: 'votre.email@exemple.com',
      phonePlaceholder: 'Numéro de téléphone (chiffres seulement)',
      messagePlaceholder: 'Décrivez votre idée de tatouage (style, taille, emplacement sur le corps, références...)',
      characterCount: 'caractères',
      submitButton: 'Envoyer par WhatsApp',
      nameLabel: 'Nom complet',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      messageLabel: 'Description de l\'idée de tatouage'
    }
  },
  map: {
    title: 'Notre Localisation',
    description: 'Venez nous rendre visite dans notre studio. Nous sommes situés dans un environnement accueillant et professionnel.',
    locationTitle: 'Localisation',
    address: 'Rua do Carmo, 79\nBraga - Portugal\n4700-309',
    ctaButton: 'Planifier par WhatsApp',
    ctaTitle: 'Planifier par WhatsApp',
    mapTitle: 'Localisation BD Tattoo Studio'
  },
  footer: {
    copyright: '© 2025 BD Tattoo. Tous droits réservés.',
    followInstagram: 'Suivre sur Instagram',
    contactWhatsApp: 'Contacter par WhatsApp'
  },
  whatsapp: {
    defaultMessage: 'Bonjour ! J\'aimerais planifier une consultation pour un tatouage.',
    studioVisitMessage: 'Bonjour ! J\'aimerais planifier une visite du studio.',
    contactFormMessage: 'Bonjour ! Je suis intéressé(e) par un tatouage.\n\nNom: {name}\nEmail: {email}\nTéléphone: {phone}\n\nDescription de l\'idée:\n{message}'
  },
  accessibility: {
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    openWhatsApp: 'Ouvrir conversation WhatsApp',
    previousImage: 'Image précédente',
    nextImage: 'Image suivante',
    goToSlide: 'Aller à la diapositive {number}',
    scheduleVisit: 'Planifier visite'
  },
  portfolioCategories: {
    realism: 'Réalisme',
    fineLine: 'Fine Line',
    geometric: 'Géométrique',
    minimalist: 'Minimaliste',
    blackwork: 'Blackwork',
    colorful: 'Colorée'
  }
};

export const translations = {
  pt,
  en,
  es,
  fr
};