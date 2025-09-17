"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Categorias removidas - galeria simplificada

const galleryItems = [
  // Polimento
  {
    id: 1,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -01.jpg",
  },
  {
    id: 2,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -02.jpg",
  },
  {
    id: 3,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -03.jpg",
  },
  {
    id: 4,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -04.jpg",
  },
  {
    id: 5,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -05.jpg",
    title: "Polimento e Correção de Pintura",
    description: "Polimento técnico com remoção de 95% dos riscos",
    image: "/red-sports-car-paint-correction-polishing.jpg",
  },
  {
    id: 2,
    category: "vitrificacao",
    title: "Vitrificação Cerâmica",
    description: "Coating cerâmico 5 anos com proteção UV",
    image: "/red-luxury-car-ceramic-coating-application.jpg",
  },
  {
    id: 3,
    category: "lavagem",
    title: "Lavagem Premium",
    description: "Descontaminação completa e enceramento",
    image: "/red-luxury-car-premium-washing-service.jpg",
  },
  {
    id: 4,
    category: "interior",
    title: "Limpeza de Interior",
    description: "Tratamento completo de couro e tecidos",
    image: "/red-luxury-car-interior-detailing-service.jpg",
  },
  {
    id: 5,
    category: "ppf",
    title: "Paint Protection Film",
    description: "PPF completo para máxima proteção",
    image: "/luxury-red-sports-car-ppf-installation-professional.jpg",
  },
  {
    id: 6,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -06.jpg",
  },
  {
    id: 7,
    category: "polimento",
    title: "Trabalho Realizado",
    description: "Serviço de polimento executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -07.jpg",
    title: "Restauração de Pintura",
    description: "Polimento de alta performance",
    image: "/red-sports-car-paint-restoration-detailing.jpg",
  },
  {
    id: 7,
    category: "vitrificacao",
    title: "Coating Premium",
    description: "Vitrificação com tecnologia de ponta",
    image: "/red-luxury-sedan-premium-coating-application.jpg",
  },
  // Vitrificação
  {
    id: 8,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -08.jpg",
  },
  {
    id: 9,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -09.jpg",
  },
  {
    id: 10,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -10.jpg",
  },
  {
    id: 11,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -11.jpg",
  },
  {
    id: 12,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -12.jpg",
  },
  {
    id: 13,
    category: "vitrificacao",
    title: "Trabalho Realizado",
    description: "Serviço de vitrificação executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -13.jpg",
  },
  // Lavagem
  {
    id: 14,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -14.jpg",
  },
  {
    id: 15,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -15.jpg",
  },
  {
    id: 16,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -16.jpg",
  },
  {
    id: 17,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -17.jpg",
  },
  {
    id: 18,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -18.jpg",
  },
  {
    id: 19,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -19.jpg",
  },
  {
    id: 20,
    category: "lavagem",
    title: "Trabalho Realizado",
    description: "Serviço de lavagem executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -20.jpg",
  },
  // Interior
  {
    id: 21,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -21.jpg",
  },
  {
    id: 22,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -22.jpg",
  },
  {
    id: 23,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -23.jpg",
  },
  {
    id: 24,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -24.jpg",
  },
  {
    id: 25,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -25.jpg",
  },
  {
    id: 26,
    category: "interior",
    title: "Trabalho Realizado",
    description: "Serviço de detalhamento interno executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -26.jpg",
  },
  // PPF
  {
    id: 27,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -27.jpg",
  },
  {
    id: 28,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -28.jpg",
  },
  {
    id: 29,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -29.jpg",
  },
  {
    id: 30,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -30.jpg",
  },
  {
    id: 31,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -31.jpg",
  },
  {
    id: 32,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -32.jpg",
  },
  {
    id: 33,
    category: "ppf",
    title: "Trabalho Realizado",
    description: "Serviço de PPF executado com excelência",
    image: "/drive-download-20250917T151352Z-1-001/ -33.jpg",
    title: "Detalhamento Completo",
    description: "Lavagem técnica e proteção",
    image: "/red-sports-car-complete-detailing-service.jpg",
  },
]

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [slideshowLoadedImages, setSlideshowLoadedImages] = useState<Set<number>>(new Set())

  const openSlideshow = (imageId: number) => {
    const index = galleryItems.findIndex(item => item.id === imageId)
    setCurrentImageIndex(index)
    setSelectedImage(imageId)
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

  const closeSlideshow = () => {
    setSelectedImage(null)
  }

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }

  const handleSlideshowImageLoad = (imageId: number) => {
    setSlideshowLoadedImages(prev => new Set([...prev, imageId]))
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
      document.body.style.overflow = 'hidden' // Prevent background scroll
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
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Galeria de Trabalhos</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Conheça alguns dos nossos trabalhos realizados com excelência e dedicação. Cada projeto é único e recebe
                nossa atenção especial para resultados excepcionais.
              </p>
              <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                  Agendar Seu Projeto
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Grid Gallery */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {galleryItems.map((item, index) => {
                const isLoaded = loadedImages.has(item.id)
                return (
                  <div key={item.id} className="group cursor-pointer" onClick={() => openSlideshow(item.id)}>
                    <div className="relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm transition-transform duration-300 hover:scale-105 aspect-square">
                      {/* Animated Skeleton Loader */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                          
                          {/* Floating Dots Animation */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                            </div>
                          </div>
                          
                          {/* Pulsing Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 animate-pulse"></div>
                        </div>
                      )}
                      
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`Trabalho realizado pela Shibata Premium Detail`}
                        width={400}
                        height={400}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                          isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(item.id)}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/50 text-muted-foreground hover:bg-card/70 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item.id)}>
                  <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} - ${item.description} realizado pela Shibata Premium Detail`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                        !isLoaded ? 'pointer-events-none' : ''
                      }`}>
                        <svg
                          className="w-8 h-8 text-white"
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="Ampliar imagem"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection delay={0.3}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Números</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-muted-foreground">Veículos Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Satisfação dos Clientes</div>
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
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Pronto para Transformar Seu Veículo?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos valorizar seu veículo com nossos serviços premium de
                estética automotiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                    Agendar Serviço
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button variant="outline" className="px-8 py-3 text-lg w-full md:w-auto bg-transparent">
                    Falar Conosco
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

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
                {/* Animated Slideshow Loader */}
                {!slideshowLoadedImages.has(galleryItems[currentImageIndex]?.id) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    
                    {/* Floating Dots Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                    
                    {/* Pulsing Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse"></div>
                  </div>
                )}
                
                <Image
                  src={galleryItems[currentImageIndex]?.image || "/placeholder.svg"}
                  alt={`Trabalho ${currentImageIndex + 1} da galeria Shibata Premium Detail`}
                  width={1200}
                  height={800}
                  className={`w-full h-full object-contain rounded-lg transition-opacity duration-300 ${
                    slideshowLoadedImages.has(galleryItems[currentImageIndex]?.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleSlideshowImageLoad(galleryItems[currentImageIndex]?.id)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
            <Image
              src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
              alt={`Imagem ampliada: ${galleryItems.find((item) => item.id === selectedImage)?.title || "Trabalho da galeria"}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
