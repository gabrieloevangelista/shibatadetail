/**
 * Utilitário para rastreamento de conversões do Google Ads em links do WhatsApp
 */

export const trackWhatsAppConversion = (url: string, trackConversion: boolean = false) => {
  // Verifica se estamos no browser
  if (typeof window === 'undefined') return
  
  // Verifica se a função gtag_report_conversion está disponível e se deve rastrear conversão
  if (trackConversion && (window as any).gtag_report_conversion) {
    try {
      // Chama a função de conversão e depois abre o link
      (window as any).gtag_report_conversion(url)
      // Pequeno delay para garantir que a conversão seja registrada
      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer")
      }, 100)
    } catch (error) {
      console.warn('Erro no rastreamento de conversão:', error)
      // Fallback em caso de erro
      window.open(url, "_blank", "noopener,noreferrer")
    }
  } else {
    // Abre o link diretamente sem rastreamento
    window.open(url, "_blank", "noopener,noreferrer")
  }
}

export const openWhatsAppWithTracking = (phoneNumber: string, message: string, trackConversion: boolean = false) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  trackWhatsAppConversion(whatsappUrl, trackConversion)
}