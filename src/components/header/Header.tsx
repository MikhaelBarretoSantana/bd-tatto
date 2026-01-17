// components/header/Header.tsx
// 🧭 Componente de navegação principal com seletor de idiomas

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll, scrollToSection } from "../../hooks/useScroll";
import { useI18n } from "../../i18n/I18nContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

// Items de navegação agora são dinâmicos baseados no idioma
const getNavigationItems = (t: any) => [
  { id: 'home', label: t.header.home },
  { id: 'portfolio', label: t.header.portfolio },
  { id: 'studio', label: t.header.studio },
  { id: 'trust', label: t.header.trust },
  { id: 'contact', label: t.header.contact },
  { id: 'location', label: t.header.location },
  { id: 'about', label: t.header.about },
];

/**
 * Header com navegação responsiva e seletor de idiomas
 * Inclui menu desktop, mobile, efeito de scroll e troca de idiomas
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHeaderScrolled = useScroll(100);
  const { t } = useI18n();
  
  const navigationItems = getNavigationItems(t);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isHeaderScrolled ? "header--scrolled" : ""}`}>
      <nav className="header__nav">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <span className="header__logo-bd">BD</span>
            <span className="header__logo-tattoo">TATTOO</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="header__menu header__menu--desktop">
            {navigationItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className="header__menu-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Language Switcher + Mobile Menu Button */}
          <div className="header__actions">
            <LanguageSwitcher />
            
            <button
              className="header__menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`header__menu header__menu--mobile ${
            isMenuOpen ? "header__menu--open" : ""
          }`}
        >
          <ul className="header__menu-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className="header__menu-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Language Switcher Mobile */}
          <div className="header__mobile-language">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;