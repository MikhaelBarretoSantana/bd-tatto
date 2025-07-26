// App.tsx
// 🚀 Componente principal - Refatorado com internacionalização completa

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import {
  Header,
  Hero,
  About,
  Portfolio,
  Studio,
  Contact,
  MapSection,
  Footer,
  WhatsAppFloat,
} from "./components";
import { useGoogleFonts } from "./hooks/useGoogleFonts";
import { I18nProvider } from "./i18n/I18nContext";

import "./App.scss";

/**
 * Componente principal da aplicação BD Tattoo
 * Refatorado em componentes modulares e reutilizáveis
 * Agora com suporte completo a internacionalização (i18n)
 * Suporta: Português, Inglês, Espanhol e Francês
 */
const BDTattooLanding: React.FC = () => {
  // Carrega fontes do Google automaticamente
  useGoogleFonts();

  return (
    <I18nProvider>
      <div className="bd-tattoo">
        {/* Botão flutuante do WhatsApp */}
        <WhatsAppFloat />

        {/* Estrutura principal da página */}
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Studio />
        <Contact />
        <MapSection />
        <Footer />

        {/* Sistema de notificações */}
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{
            fontSize: "14px",
            fontFamily: "Inter, Arial, sans-serif",
          }}
        />

        <SpeedInsights />
        <Analytics />
      </div>
    </I18nProvider>
  );
};

export default BDTattooLanding;