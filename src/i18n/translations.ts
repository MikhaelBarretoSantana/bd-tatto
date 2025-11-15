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
    contact: 'Contato',
    location: 'Localização'
  },
  hero: {
    subtitle: 'Eternizando traços e histórias',
    description: 'Mais de 5 anos criando tatuagens únicas e sofisticadas. Cada traço é pensado para contar sua história com elegância e precisão.',
    cta: 'Agende Sua Consulta'
  },
  about: {
    title: 'O Artista',
    artistName: 'Brian Dantas',
    paragraph1: 'Sou Brian Dantas, tatuador profissional há mais de 5 anos, mas minha relação com a arte vai muito além das agulhas. Engenheiro de formação, encontrei na tatuagem o espaço perfeito para unir técnica, precisão e criatividade.',
    paragraph2: 'Minha especialidade é o Realismo e Fine Line — estilos que exigem sensibilidade, atenção aos detalhes e um olhar apurado para transformar suas ideias em arte permanente.',
    paragraph3: 'Valorizo profundamente o atendimento humanizado, o conforto de cada pessoa que passa pela minha marquesa e, acima de tudo, a biossegurança e higiene em todo o processo.',
    paragraph4: 'Cada tatuagem é feita com cuidado, responsabilidade e respeito pela história que está sendo marcada na pele. Mais do que um trabalho, tatuar é uma paixão vivida todos os dias.',
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
      biosafety: {
        title: 'Biossegurança Total',
        description: 'Protocolos rigorosos de esterilização e materiais descartáveis'
      },
      equipment: {
        title: 'Equipamentos Premium',
        description: 'Máquinas profissionais e tintas de primeira qualidade'
      },
      environment: {
        title: 'Ambiente Acolhedor',
        description: 'Espaço pensado para proporcionar máximo conforto e relaxamento'
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
    contact: 'Contact',
    location: 'Location'
  },
  hero: {
    subtitle: 'Eternizing lines and stories',
    description: 'Over 5 years creating unique and sophisticated tattoos. Each stroke is designed to tell your story with elegance and precision.',
    cta: 'Schedule Your Consultation'
  },
  about: {
    title: 'The Artist',
    artistName: 'Brian Dantas',
    paragraph1: 'I am Brian Dantas, a professional tattoo artist for over 5 years, but my relationship with art goes far beyond needles. An engineer by training, I found in tattooing the perfect space to unite technique, precision and creativity.',
    paragraph2: 'My specialty is Realism and Fine Line — styles that require sensitivity, attention to detail and a keen eye to transform your ideas into permanent art.',
    paragraph3: 'I deeply value humanized service, the comfort of each person who passes through my table and, above all, biosafety and hygiene throughout the process.',
    paragraph4: 'Each tattoo is made with care, responsibility and respect for the story being marked on the skin. More than work, tattooing is a passion lived every day.',
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
      biosafety: {
        title: 'Total Biosafety',
        description: 'Rigorous sterilization protocols and disposable materials'
      },
      equipment: {
        title: 'Premium Equipment',
        description: 'Professional machines and first-quality inks'
      },
      environment: {
        title: 'Welcoming Environment',
        description: 'Space designed to provide maximum comfort and relaxation'
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
    contact: 'Contacto',
    location: 'Ubicación'
  },
  hero: {
    subtitle: 'Eternizando trazos e historias',
    description: 'Más de 5 años creando tatuajes únicos y sofisticados. Cada trazo está pensado para contar tu historia con elegancia y precisión.',
    cta: 'Agenda Tu Consulta'
  },
  about: {
    title: 'El Artista',
    artistName: 'Brian Dantas',
    paragraph1: 'Soy Brian Dantas, tatuador profesional desde hace más de 5 años, pero mi relación con el arte va mucho más allá de las agujas. Ingeniero de formación, encontré en el tatuaje el espacio perfecto para unir técnica, precisión y creatividad.',
    paragraph2: 'Mi especialidad es el Realismo y Fine Line — estilos que requieren sensibilidad, atención al detalle y una mirada aguda para transformar tus ideas en arte permanente.',
    paragraph3: 'Valoro profundamente la atención humanizada, la comodidad de cada persona que pasa por mi camilla y, sobre todo, la bioseguridad e higiene en todo el proceso.',
    paragraph4: 'Cada tatuaje se hace con cuidado, responsabilidad y respeto por la historia que se está marcando en la piel. Más que un trabajo, tatuar es una pasión vivida todos los días.',
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
      biosafety: {
        title: 'Bioseguridad Total',
        description: 'Protocolos rigurosos de esterilización y materiales desechables'
      },
      equipment: {
        title: 'Equipos Premium',
        description: 'Máquinas profesionales y tintas de primera calidad'
      },
      environment: {
        title: 'Ambiente Acogedor',
        description: 'Espacio pensado para proporcionar máxima comodidad y relajación'
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
    contact: 'Contact',
    location: 'Localisation'
  },
  hero: {
    subtitle: 'Éternisant traits et histoires',
    description: 'Plus de 5 ans à créer des tatouages uniques et sophistiqués. Chaque trait est pensé pour raconter votre histoire avec élégance et précision.',
    cta: 'Planifiez Votre Consultation'
  },
  about: {
    title: 'L\'Artiste',
    artistName: 'Brian Dantas',
    paragraph1: 'Je suis Brian Dantas, tatoueur professionnel depuis plus de 5 ans, mais ma relation avec l\'art va bien au-delà des aiguilles. Ingénieur de formation, j\'ai trouvé dans le tatouage l\'espace parfait pour unir technique, précision et créativité.',
    paragraph2: 'Ma spécialité est le Réalisme et Fine Line — des styles qui exigent sensibilité, attention aux détails et un regard aiguisé pour transformer vos idées en art permanent.',
    paragraph3: 'Je valorise profondément le service humanisé, le confort de chaque personne qui passe sur ma table et, surtout, la biosécurité et l\'hygiène dans tout le processus.',
    paragraph4: 'Chaque tatouage est fait avec soin, responsabilité et respect pour l\'histoire qui est marquée sur la peau. Plus qu\'un travail, tatouer est une passion vécue tous les jours.',
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
      biosafety: {
        title: 'Biosécurité Totale',
        description: 'Protocoles rigoureux de stérilisation et matériaux jetables'
      },
      equipment: {
        title: 'Équipements Premium',
        description: 'Machines professionnelles et encres de première qualité'
      },
      environment: {
        title: 'Environnement Accueillant',
        description: 'Espace pensé pour offrir un maximum de confort et de détente'
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