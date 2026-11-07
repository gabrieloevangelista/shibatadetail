"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const graduateImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.27-Isg456mkQspTFrPpYGNToiCvE9iqhZ.jpeg",
    alt: "Turma de formandos do curso profissional de detalhamento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.28%20%283%29-dDmSohR4w5VRJ2mxnSNZXrQWwUjXjq.jpeg",
    alt: "Aluna formada recebendo certificado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.28-PnOoiuX10oaJRA8nOroDojE0rLtnvQ.jpeg",
    alt: "Turma de formandos do curso",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.29%20%281%29-1JOUyVJ86cYPSuKXBCBV89vu4e8hG7.jpeg",
    alt: "Aluno formado com certificado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.27%20%281%29-3OUpTojmBHaQ42KmrPBm58HzHZwqM3.jpeg",
    alt: "Turma completa de formandos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.29-d7U3cxnkN0Ey9tcvKXmCqZcbnea0zv.jpeg",
    alt: "Aluno formado recebendo certificado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.28%20%281%29-KcFAtB9Imrj6ThkanfqXDgAj9bXf1A.jpeg",
    alt: "Formando com certificado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-06%20at%2012.21.28%20%282%29-vykIGZngB35RBsjgWGifEM6DzJ1aK5.jpeg",
    alt: "Aluno formado com Ronaldo Shibata",
  },
]

export function GraduatesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index % graduateImages.length)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + graduateImages.length) % graduateImages.length
    )
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % graduateImages.length
    )
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let isPaused = false
    const handleMouseEnter = () => {
      isPaused = true
    }
    const handleMouseLeave = () => {
      isPaused = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    const scroll = () => {
      if (isPaused) return
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 20)

    return () => {
      clearInterval(interval)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {[...graduateImages, ...graduateImages].map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary group"
              style={{ width: "280px", height: "373px" }}
              aria-label={`Abrir imagem: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="280px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </button>
          ))}
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Imagem anterior"
            className="absolute left-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Próxima imagem"
            className="absolute right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={graduateImages[lightboxIndex].src}
              alt={graduateImages[lightboxIndex].alt}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
              unoptimized
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm font-medium">
            {lightboxIndex + 1} / {graduateImages.length}
          </div>
        </div>
      )}
    </>
  )
}
