"use client"

import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="flex flex-col items-center justify-center text-center relative overflow-hidden py-0 px-4
         w-full h-[650px] lg:h-[750px] md:px-0"
      style={{
        /* Enhanced parallax effect with custom scroll speed */
        backgroundImage: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%),
          url('/bg.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollY * 0.5}px`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="flex-1 flex flex-col items-center relative z-10 max-w-lg md:max-w-[800px] lg:max-w-[940px] px-4 pt-24 justify-center my-0 mx-0 lg:space-y-0 gap-4 md:pt-9">
        <h1 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight py-0 my-0">
          Excelência em <span className="text-primary">Detalhamento Automotivo</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Cuidamos de cada detalhe de seu veículo. Proteção, beleza e valorização em cada serviço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10 w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://wa.me/5541998760734?text=Olá! Gostaria de agendar um serviço de estética automotiva na Shibata Premium Detail.",
                "_blank",
              )
            }
          >
            Agendar Serviço
          </Button>
          <Link href="/curso" className="w-full sm:w-auto">
            <Button variant="outline" className="px-8 py-3 font-medium text-base w-full sm:w-auto bg-transparent">
              Conhecer Cursos
            </Button>
          </Link>
        </div>
      </div>

      {/* Overlay gradiente para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#141414] pointer-events-none z-10"></div>
    </section>
  )
}
