// components/LanguageSwitcher/LanguageSwitcher.tsx
// 🌍 Seletor de idiomas elegante com dropdown

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n } from '../../i18n/I18nContext';
import { SUPPORTED_LANGUAGES } from '../../i18n/translations';
import { Language } from '../../types/i18n';

/**
 * Componente de seleção de idiomas
 * Dropdown elegante com bandeiras e nomes nativos
 */
const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha dropdown ao pressionar Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const currentLangData = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (language: Language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className={`language-switcher__trigger ${isOpen ? 'language-switcher__trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={18} className="language-switcher__icon" />
        <span className="language-switcher__current">
          <span className="language-switcher__flag">{currentLangData?.flag}</span>
          <span className="language-switcher__name">{currentLangData?.nativeName}</span>
        </span>
        <ChevronDown 
          size={16} 
          className={`language-switcher__arrow ${isOpen ? 'language-switcher__arrow--up' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className="language-switcher__dropdown"
          role="listbox"
          aria-label="Lista de idiomas disponíveis"
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <button
              key={language.code}
              className={`language-switcher__option ${
                language.code === currentLanguage ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
              role="option"
              aria-selected={language.code === currentLanguage}
            >
              <span className="language-switcher__option-flag">{language.flag}</span>
              <div className="language-switcher__option-text">
                <span className="language-switcher__option-native">{language.nativeName}</span>
                <span className="language-switcher__option-name">{language.name}</span>
              </div>
              {language.code === currentLanguage && (
                <div className="language-switcher__option-check">✓</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;