// 🧭 Componente de navegação principal

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll, scrollToSection } from "../../hooks/useScroll";
import { NAVIGATION_ITEMS } from "../../constants";

/**
 * Header com navegação responsiva
 * Inclui menu desktop, mobile e efeito de scroll
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHeaderScrolled = useScroll(100);

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
            {NAVIGATION_ITEMS.map((item) => (
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

          {/* Mobile Menu Button */}
          <button
            className="header__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`header__menu header__menu--mobile ${
            isMenuOpen ? "header__menu--open" : ""
          }`}
        >
          <ul className="header__menu-list">
            {NAVIGATION_ITEMS.map((item) => (
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
