/**
 * Utilitário para rastreamento de conversões do Google Ads em links do WhatsApp
 */

export const trackWhatsAppConversion = (url: string) => {
  // Verifica se a função gtag_report_conversion está disponível
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
    // Chama a função de conversão e depois abre o link
    (window as any).gtag_report_conversion(url)
    // Pequeno delay para garantir que a conversão seja registrada
    setTimeout(() => {
      window.open(url, "_blank")
    }, 100)
  } else {
    // Fallback caso a função não esteja disponível
    window.open(url, "_blank")
  }
}

export const openWhatsAppWithTracking = (phoneNumber: string, message: string) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  trackWhatsAppConversion(whatsappUrl)
}