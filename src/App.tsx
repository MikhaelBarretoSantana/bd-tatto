// 🚀 Componente principal - Refatorado e organizado com Studio

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"

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

import "./App.scss";

/**
 * Componente principal da aplicação BD Tattoo
 * Refatorado em componentes modulares e reutilizáveis
 * Agora incluindo o showcasing do estúdio físico
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

      <Analytics/>
    </div>
  );
};

export default BDTattooLanding;
