/**
 * Utilitário para rastreamento de conversões do Google Ads em links do WhatsApp
 */

export const trackWhatsAppConversion = (url: string) => {
  // Verifica se a função gtag_report_conversion está disponível
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion(url)
  } else {
    // Fallback caso a função não esteja disponível
    window.open(url, "_blank")
  }
}

export const openWhatsAppWithTracking = (phoneNumber: string, message: string) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  trackWhatsAppConversion(whatsappUrl)
}