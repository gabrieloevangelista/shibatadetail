/**
 * Utilitário para rastreamento de conversões do Google Ads em links do WhatsApp
 */

/**
 * Dispara o evento de conversão no Google Ads
 * Utiliza gtag para enviar o evento de conversão
 */
export const fireConversionEvent = () => {
  if (typeof window === 'undefined') return
  
  try {
    // Dispara o evento de conversão direto sem callback de URL
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-16912435359/a8KCCMrrpZ0bEJ-RvYA_'
    })
    console.log('[v0] Evento de conversão disparado com sucesso')
  } catch (error) {
    console.warn('[v0] Erro ao disparar evento de conversão:', error)
  }
}

export const trackWhatsAppConversion = (url: string, trackConversion: boolean = false) => {
  // Verifica se estamos no browser
  if (typeof window === 'undefined') return
  
  // Se deve rastrear conversão, dispara o evento antes de abrir o link
  if (trackConversion) {
    try {
      fireConversionEvent()
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
