// components/about/About.tsx
// 👨‍🎨 Seção sobre o artista Brian Dantas - VERSÃO FINAL PERFEITA

import React from "react";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Função helper para renderizar texto com formatação específica em qualquer idioma
 */
const renderFormattedText = (text: string, artistName: string) => {
  // Substitui o nome do artista por versão em negrito
  let formattedText = text.replace(
    new RegExp(artistName, 'gi'),
    `<strong>${artistName}</strong>`
  );
  
  // Aplica formatações específicas baseadas em palavras-chave para TODOS os idiomas
  const formatRules = [
    // Engenheiro/Engineer/Ingeniero/Ingénieur
    { pattern: /Engenheiro de formação/gi, replacement: '<strong>Engenheiro de formação</strong>' },
    { pattern: /engineer by training/gi, replacement: '<strong>engineer by training</strong>' },
    { pattern: /Ingeniero de formación/gi, replacement: '<strong>Ingeniero de formación</strong>' },
    { pattern: /Ingénieur de formation/gi, replacement: '<strong>Ingénieur de formation</strong>' },
    
    // Realismo e Fine Line
    { pattern: /Realismo e Fine Line/gi, replacement: '<strong>Realismo e Fine Line</strong>' },
    { pattern: /Realism and Fine Line/gi, replacement: '<strong>Realism and Fine Line</strong>' },
    { pattern: /Realismo y Fine Line/gi, replacement: '<strong>Realismo y Fine Line</strong>' },
    { pattern: /Réalisme et Fine Line/gi, replacement: '<strong>Réalisme et Fine Line</strong>' },
    
    // Atendimento humanizado/Humanized service/etc
    { pattern: /atendimento humanizado/gi, replacement: '<strong>atendimento humanizado</strong>' },
    { pattern: /humanized service/gi, replacement: '<strong>humanized service</strong>' },
    { pattern: /atención humanizada/gi, replacement: '<strong>atención humanizada</strong>' },
    { pattern: /service humanisé/gi, replacement: '<strong>service humanisé</strong>' },
    
    // Biossegurança e higiene
    { pattern: /biossegurança e higiene/gi, replacement: '<strong>biossegurança e higiene</strong>' },
    { pattern: /biosafety and hygiene/gi, replacement: '<strong>biosafety and hygiene</strong>' },
    { pattern: /bioseguridad e higiene/gi, replacement: '<strong>bioseguridad e higiene</strong>' },
    { pattern: /biosécurité et l'hygiène/gi, replacement: "<strong>biosécurité et l'hygiène</strong>" },
    { pattern: /biosécurité et l'hygiène/gi, replacement: "<strong>biosécurité et l'hygiène</strong>" },
  ];

  // Aplica todas as regras de formatação
  formatRules.forEach(rule => {
    formattedText = formattedText.replace(rule.pattern, rule.replacement);
  });

  return formattedText;
};

/**
 * Seção About - Informações sobre o artista
 * Layout responsivo com texto e foto
 * VERSÃO FINAL: Todos os parágrafos traduzidos + formatados dinamicamente
 */
const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">{t.about.title}</h2>
            <div className="about__description">
              {/* Parágrafo 1: Nome + Engenheiro de formação */}
              <p 
                dangerouslySetInnerHTML={{ 
                  __html: renderFormattedText(t.about.paragraph1, t.about.artistName)
                }} 
              />
              
              {/* Parágrafo 2: Realismo e Fine Line */}
              <p 
                dangerouslySetInnerHTML={{ 
                  __html: renderFormattedText(t.about.paragraph2, t.about.artistName)
                }} 
              />
              
              {/* Parágrafo 3: Atendimento humanizado + biossegurança */}
              <p 
                dangerouslySetInnerHTML={{ 
                  __html: renderFormattedText(t.about.paragraph3, t.about.artistName)
                }} 
              />
            </div>
          </div>

          <div className="about__image">
            <div className="about__image-wrapper">
              <img
                src="/img/brian-dantas.jpeg"
                alt={t.about.imageAlt}
                className="about__image-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;