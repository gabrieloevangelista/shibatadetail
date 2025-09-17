"use client"
import { Home, Settings, GraduationCap, Phone } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function MobileTabbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const controlTabbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlTabbar)
    return () => window.removeEventListener("scroll", controlTabbar)
  }, [lastScrollY])

  const tabItems = [
    { name: "Início", href: "/", icon: Home },
    { name: "Serviços", href: "/servicos", icon: Settings },
    { name: "Curso", href: "/curso", icon: GraduationCap },
    { name: "Contato", href: "/contato", icon: Phone },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Let Next.js handle page navigation normally
    return
  }

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      role="navigation"
      aria-label="Navegação principal móvel"
    >
      <div className="bg-background/80 backdrop-blur-lg px-4 py-2">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          {tabItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors ${
                  isActive ? "text-primary" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} aria-hidden="true" />
                <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
