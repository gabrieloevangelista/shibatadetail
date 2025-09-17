"use client"

import { Instagram, Phone, MapPin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 py-10">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-center md:text-left text-foreground text-xl font-semibold">Shibata Premium Detail</div>
          <p className="text-foreground/90 text-sm font-medium text-center md:text-left">Estética automotiva premium em Curitiba</p>
        </div>
        
        {/* Center Section: Contact Info */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-foreground text-sm font-medium">(41) 99876-0734</p>
          <p className="text-muted-foreground text-xs">R. Brasílio Itiberê, 2361 - Curitiba, PR</p>
        </div>
        
        {/* Right Section: Social Links */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/shibatapremiumdetail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-full h-full text-muted-foreground" />
          </a>
          <a 
            href="tel:+5541998760734" 
            aria-label="Telefone" 
            className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Phone className="w-full h-full text-muted-foreground" />
          </a>
          <a 
            href="https://wa.me/5541998760734"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp" 
            className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <svg className="w-full h-full text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Bottom Section: Legal Links and Credits */}
      <div className="border-t border-muted/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a href="/termos-de-uso" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
            Termos de Uso
          </a>
          <a href="/politica-de-privacidade" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
            Política de Privacidade
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs font-medium">Desenvolvido por</span>
          <a
            href="https://bbmspace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="BBM Space - Desenvolvedor"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20White%20vazado-i0mNkhH9Dvllj3PkRUg1FPVOtVWCNH.png"
              alt="BBM Space"
              className="w-6 h-6"
            />
          </a>
        </div>
       </div>
     </footer>
   )
 }
