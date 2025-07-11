// 🚀 Componente principal - Refatorado e organizado

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Header,
  Hero,
  About,
  Portfolio,
  Contact,
  MapSection,
  Footer,
  WhatsAppFloat,
} from "./components";
import { useGoogleFonts } from "./hooks/useGoogleFonts";

import "./App.scss";

/**
 * Componente principal da aplicação BD Tattoo
 * Refatorado em componentes modulares e reutilizáveis
 */
const BDTattooLanding: React.FC = () => {
  // Carrega fontes do Google automaticamente
  useGoogleFonts();

  return (
    <div className="bd-tattoo">
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppFloat />

      {/* Estrutura principal da página */}
      <Header />
      <Hero />
      <About />
      <Portfolio />
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
    </div>
  );
};

export default BDTattooLanding;
