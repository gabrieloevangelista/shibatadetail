"use client"

import type React from "react"
import { useState, useEffect, useCallback, memo } from "react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { trackWhatsAppConversion } from "@/lib/whatsapp-tracking"

const ShibataLogo = ({ className }: { className?: string }) => (
  <img src="/shibata.png" alt="Shibata Premium Detail" className={className} />
)

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Curso", href: "/curso" },
  { name: "Galeria", href: "/galeria" },
  { name: "Contato", href: "/contato" },
]

export const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/5541998760734?text=Olá! Gostaria de agendar um serviço de estética automotiva na Shibata Premium Detail."
    trackWhatsAppConversion(whatsappUrl)
  }

  const handleWhatsAppKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleWhatsAppClick()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-md shadow-sm" : "bg-black/20 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="hover:opacity-80 focus:opacity-80 transition-opacity rounded"
          >
            <ShibataLogo className="h-[70px] w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Navegação principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-4 py-2 rounded-full font-medium transition-colors outline-none ${
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-white hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
          <Button
            className="bg-primary text-white hover:bg-primary/90 focus:bg-primary/90 px-6 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            onClick={handleWhatsAppClick}
            onKeyDown={handleWhatsAppKeyDown}
          >
            Agendar Serviço
          </Button>
        </nav>
      </div>
    </header>
  )
})
