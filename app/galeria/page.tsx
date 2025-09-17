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
