"use client"

import { Instagram, Phone, MapPin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">Shibata Premium Detail</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Estética automotiva premium</p>
        <div className="flex justify-start items-start gap-3">
          <a
            href="https://www.instagram.com/shibatapremiumdetail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-4 h-4 flex items-center justify-center"
          >
            <Instagram className="w-full h-full text-muted-foreground" />
          </a>
          <a href="tel:+5541998760734" aria-label="Telefone" className="w-4 h-4 flex items-center justify-center">
            <Phone className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="Localização" className="w-4 h-4 flex items-center justify-center">
            <MapPin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
        <div className="flex items-center gap-2 mt-4">
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
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>
      {/* Right Section: Services, Company, Contact */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Serviços</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Lavagem Premium
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Detalhamento
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Polimento
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Empresa</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Sobre nós
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Nossa equipe
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Trabalhe conosco
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Parceiros
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Contato
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Contato</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="tel:+5541998760734" className="text-foreground text-sm font-normal leading-5 hover:underline">
              (41) 99876-0734
            </a>
            <a
              href="https://wa.me/5541998760734"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-sm font-normal leading-5 hover:underline"
            >
              Agendamento
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Orçamento
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Localização
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
