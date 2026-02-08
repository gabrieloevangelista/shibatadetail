"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* Duplicar as imagens para criar efeito infinito */}
        {[...graduateImages, ...graduateImages].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ width: "280px", height: "373px" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="280px"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
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
  )
}
