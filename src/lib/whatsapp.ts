const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number

const PREFILLED_MESSAGE = `Olá. Tenho uma operação acima de R$400k/mês e gostaria de solicitar uma avaliação operacional com o sistema Omni-Control.`;

export function getWhatsAppUrl(): string {
  const encodedMessage = encodeURIComponent(PREFILLED_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
