// 📝 Hook para gerenciamento completo do formulário de contato

import { useState } from "react";
import { toast } from "react-toastify";
import { FormData, FormValidation } from "../types";
import {
  validateEmail,
  validatePhone,
  capitalizeName,
  formatPhoneNumbers,
  openWhatsApp,
} from "../utils";

/**
 * Hook que gerencia todo o estado e lógica do formulário de contato
 * Inclui validação em tempo real, formatação e integração com WhatsApp
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formValidation, setFormValidation] = useState<FormValidation>({
    emailValid: true,
    phoneValid: true,
  });

  /**
   * Manipula mudanças nos campos do formulário com validação e formatação
   */
  const handleInputChange = (field: keyof FormData, value: string) => {
    let processedValue = value;

    switch (field) {
      case "name":
        // Capitaliza primeira letra de cada palavra
        processedValue = capitalizeName(value);
        break;

      case "phone":
        // Remove caracteres especiais, só números
        processedValue = formatPhoneNumbers(value);
        // Valida telefone em tempo real
        setFormValidation((prev) => ({
          ...prev,
          phoneValid: value === "" || validatePhone(processedValue),
        }));
        break;

      case "email":
        // Valida email em tempo real
        setFormValidation((prev) => ({
          ...prev,
          emailValid: value === "" || validateEmail(value),
        }));
        break;
    }

    // Atualiza o estado do formulário
    setFormData((prev) => ({ ...prev, [field]: processedValue }));
  };

  /**
   * Submete o formulário com validação completa e integração WhatsApp
   */
  const handleFormSubmit = () => {
    // Validações finais
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    setFormValidation({
      emailValid: isEmailValid,
      phoneValid: isPhoneValid,
    });

    // Verifica se todos os campos estão preenchidos
    if (formData.name && formData.email && formData.phone && formData.message) {
      if (!isEmailValid) {
        toast.error("Por favor, insira um email válido!");
        return;
      }

      if (!isPhoneValid) {
        toast.error("Por favor, insira um telefone válido (mínimo 8 dígitos)!");
        return;
      }

      // Monta mensagem formatada para WhatsApp
      const whatsappMessage = `Olá! Meu nome é ${formData.name}.

✉️ Email: ${formData.email}
📱 Telefone: ${formData.phone}

💭 Minha ideia de tatuagem:
${formData.message}

Gostaria de agendar uma consulta!`;

      // Envia para WhatsApp e limpa formulário
      openWhatsApp(whatsappMessage);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormValidation({ emailValid: true, phoneValid: true });
      toast.success("Redirecionando para o WhatsApp...");
    } else {
      toast.error("Por favor, preencha todos os campos!");
    }
  };

  return {
    formData,
    formValidation,
    handleInputChange,
    handleFormSubmit,
  };
};
