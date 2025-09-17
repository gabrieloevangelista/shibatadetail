"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/iloveimg-resized/-01.jpg",
  },
  {
    id: 2,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/iloveimg-resized/-02.jpg",
  },
  {
    id: 3,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/iloveimg-resized/-03.jpg",
  },
  {
    id: 4,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/iloveimg-resized/-04.jpg",
  },
  {
    id: 5,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/iloveimg-resized/-05.jpg",
  },
  {
    id: 6,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/iloveimg-resized/ -06.jpg",
  },
  {
    id: 7,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/iloveimg-resized/ -07.jpg",
  },
  {
    id: 8,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/iloveimg-resized/ -08.jpg",
  },
  {
    id: 9,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -09.jpg",
  },
  {
    id: 10,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -10.jpg",
  },
  {
    id: 11,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -11.jpg",
  },
  {
    id: 12,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -12.jpg",
  },
  {
    id: 13,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -13.jpg",
  },
  {
    id: 14,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -14.jpg",
  },
  {
    id: 15,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -15.jpg",
  },
  {
    id: 16,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -16.jpg",
  },
  {
    id: 17,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -17.jpg",
  },
  {
    id: 18,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -18.jpg",
  },
  {
    id: 19,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -19.jpg",
  },
  {
    id: 20,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/iloveimg-resized/ -20.jpg",
  },
  {
    id: 21,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/ -21.jpg",
  },
  {
    id: 22,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/-22.jpg",
  },
  {
    id: 23,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/ -23.jpg",
  },
  {
    id: 24,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/-24.jpg",
  },
  {
    id: 25,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/-25.jpg",
  },
  {
    id: 26,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/iloveimg-resized/ -26.jpg",
  },
  {
    id: 27,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/-27.jpg",
  },
  {
    id: 28,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/-28.jpg",
  },
  {
    id: 29,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/ -29.jpg",
  },
  {
    id: 30,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/ -30.jpg",
  },
  {
    id: 31,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/ -31.jpg",
  },
  {
    id: 32,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/ -32.jpg",
  },
  {
    id: 33,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/iloveimg-resized/ -33.jpg",
  },
]

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const openSlideshow = (imageId: number) => {
    const index = galleryItems.findIndex(item => item.id === imageId)
    setCurrentImageIndex(index)
    setSelectedImage(imageId)
  }

  const closeSlideshow = () => {
    setSelectedImage(null)
  }

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Galeria de Trabalhos</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Confira alguns dos nossos trabalhos realizados com excelência e dedicação
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => {
              const isLoaded = loadedImages.has(item.id)
              return (
                <AnimatedSection key={item.id} delay={0.1 + index * 0.05}>
                  <div 
                    className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => openSlideshow(item.id)}
                  >
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                    )}
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Trabalho realizado pela Shibata Premium Detail`}
                      width={400}
                      height={400}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(item.id)}
                      loading="lazy"
                    />
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </main>

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
