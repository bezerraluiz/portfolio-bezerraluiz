import emailjs from "@emailjs/browser";

// Configurações do EmailJS - usando variáveis de ambiente
export const EMAILJS_CONFIG = {
  serviceId: "service_krl5ht7",
  templateId: "template_urfzj78",
  publicKey: "yYBW8wUXTNgWgsPJq",
};

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const now = new Date();
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      time: now.toLocaleString("pt-BR", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "America/Sao_Paulo",
      }),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error("Falha ao enviar email");
    }
  } catch (error) {
    throw new Error("Erro ao enviar email. Tente novamente.");
  }
};
