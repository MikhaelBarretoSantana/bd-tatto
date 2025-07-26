// hooks/useContactForm.ts
// 📧 Hook para gerenciar formulário de contato - Versão final com i18n

import { useState } from "react";
import { toast } from "react-toastify";
import { useI18n } from "../i18n/I18nContext";
import { openWhatsApp } from "../utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormValidation {
  emailValid: boolean;
  phoneValid: boolean;
}

/**
 * Hook personalizado para gerenciar o formulário de contato
 * Inclui validação em tempo real e envio via WhatsApp
 * Versão corrigida com todas as funcionalidades de i18n
 */
export const useContactForm = () => {
  const { t, formatMessage, currentLanguage } = useI18n();
  
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

  // Validação de email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === "" || emailRegex.test(email);
  };

  // Validação de telefone
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\+\-\(\)]{0,20}$/;
    return phone === "" || phoneRegex.test(phone);
  };

  // Atualiza campo e valida em tempo real
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Validação em tempo real
    if (field === "email") {
      setFormValidation(prev => ({
        ...prev,
        emailValid: validateEmail(value),
      }));
    }

    if (field === "phone") {
      setFormValidation(prev => ({
        ...prev,
        phoneValid: validatePhone(value),
      }));
    }
  };

  // Submete formulário via WhatsApp
  const handleFormSubmit = () => {
    const { name, email, phone, message } = formData;

    // Mensagens de erro baseadas no idioma atual
    const errorMessages = {
      nameRequired: currentLanguage === 'pt' ? 'Por favor, preencha seu nome' : 
                   currentLanguage === 'en' ? 'Please fill in your name' :
                   currentLanguage === 'es' ? 'Por favor, complete su nombre' :
                   'Veuillez remplir votre nom',
      emailInvalid: currentLanguage === 'pt' ? 'Por favor, insira um email válido' :
                   currentLanguage === 'en' ? 'Please enter a valid email' :
                   currentLanguage === 'es' ? 'Por favor, ingrese un email válido' :
                   'Veuillez saisir un email valide',
      messageRequired: currentLanguage === 'pt' ? 'Por favor, descreva sua ideia de tatuagem' :
                      currentLanguage === 'en' ? 'Please describe your tattoo idea' :
                      currentLanguage === 'es' ? 'Por favor, describa su idea de tatuaje' :
                      'Veuillez décrire votre idée de tatouage'
    };

    // Validações
    if (!name.trim()) {
      toast.error(errorMessages.nameRequired);
      return;
    }

    if (email && !validateEmail(email)) {
      toast.error(errorMessages.emailInvalid);
      return;
    }

    if (!message.trim()) {
      toast.error(errorMessages.messageRequired);
      return;
    }

    // Texto padrão para campos não informados baseado no idioma
    const notInformedText = currentLanguage === 'pt' ? 'Não informado' :
                           currentLanguage === 'en' ? 'Not provided' :
                           currentLanguage === 'es' ? 'No informado' :
                           'Non renseigné';

    // Formatar mensagem para WhatsApp
    const whatsappMessage = formatMessage(t.whatsapp.contactFormMessage, {
      name: name.trim(),
      email: email.trim() || notInformedText,
      phone: phone.trim() || notInformedText,
      message: message.trim()
    });

    // Enviar via WhatsApp
    openWhatsApp(whatsappMessage);

    // Mensagem de sucesso
    const successMessage = currentLanguage === 'pt' ? 'Redirecionando para o WhatsApp...' :
                          currentLanguage === 'en' ? 'Redirecting to WhatsApp...' :
                          currentLanguage === 'es' ? 'Redirigiendo a WhatsApp...' :
                          'Redirection vers WhatsApp...';
    
    toast.success(successMessage);

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return {
    formData,
    formValidation,
    handleInputChange,
    handleFormSubmit,
  };
};