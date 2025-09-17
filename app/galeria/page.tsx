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

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryItems.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryItems[nextIndex].id)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryItems[prevIndex].id)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
    setSelectedImage(galleryItems[index].id)
  }

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return
      
      switch (event.key) {
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          closeSlideshow()
          break
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, currentImageIndex])

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

      {/* Stats Section */}
      <AnimatedSection delay={0.3}>
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Números</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Veículos Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Alunos Formados</div>
            </div>
          </div>
           <div className="text-center mt-8">
             <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
               <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                 Agendar Serviço
               </Button>
             </Link>
           </div>
         </div>
       </AnimatedSection>

        {/* Slideshow Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeSlideshow}
                className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Main Image Container */}
              <div className="flex-1 flex items-center justify-center relative min-h-0">
                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Image */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <Image
                    src={galleryItems[currentImageIndex]?.image || "/placeholder.svg"}
                    alt={`Trabalho ${currentImageIndex + 1} da galeria Shibata Premium Detail`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Bullets Navigation */}
              <div className="flex justify-center items-center space-x-2 py-6">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-primary scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 text-white bg-black/50 rounded-full px-3 py-1 text-sm">
                {currentImageIndex + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        )}

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    )
  }
