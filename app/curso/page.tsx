"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { InscriptionModal } from "@/components/inscription-modal"

const courseModules = [
  {
    title: "Fundamentos do Detalhamento",
    topics: ["Teórica", "Tipos de sujeira", "Produtos e ferramentas", "Segurança no trabalho"],
  },
  {
    title: "Lavagem Técnica",
    topics: ["Lavagem de motor", "Técnicas de lavagem", "Descontaminação", "Remoção de chuva ácida"],
  },
  {
    title: "Polimento e Correção",
    topics: ["Polimento e restauração de farol", "Técnicas de polimento", "Técnica de lixamento em repintura", "Acabamento perfeito"],
  },
  {
    title: "Proteção e Vitrificação",
    topics: ["Ceras e selantes", "Vitrificação cerâmica", "Cristalização de vidro", "Vitrificação de plásticos externos"],
  },
  {
    title: "Interior e Detalhes",
    topics: ["Limpeza de estofados", "Vitrificação de couro", "Hidratação de couros", "Vitrificação de plásticos internos", "Limpeza de vidros"],
  },
  {
    title: "Empreendedorismo",
    topics: ["Como abrir seu negócio", "Precificação", "Indicação de marketing digital", "Fidelização de clientes"],
  },
]

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Certificado Reconhecido",
    description: "Certificado de conclusão reconhecido no mercado de estética automotiva",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Material Didático Completo",
    description: "Apostila digital, vídeos exclusivos e acesso ao grupo VIP no WhatsApp",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Suporte Pós-Curso",
    description: "Acompanhamento VITALÍCIO para tirar dúvidas e orientações de negócio",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Prática Intensiva",
    description: "Todos os alunos recebem 3 dias de treinamento GRÁTIS com veículos reais em nosso workshop",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cortesia PPF",
    description: "Cortesia de PPF de conchas e colunas de portas para todos os alunos",
  },
]

export default function CursoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPreview, setIsPreview] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = true
      videoRef.current.loop = true
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPreview) {
        videoRef.current.currentTime = 0
        videoRef.current.muted = false
        videoRef.current.loop = false
        videoRef.current.play()
        setIsPreview(false)
        setIsPlaying(true)
      } else if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = true
      videoRef.current.loop = true
      videoRef.current.play()
      setIsPreview(true)
      setIsPlaying(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Headline Section & Video */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-8">Curso Profissional de Detalhamento</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Aprenda as técnicas mais avançadas de estética automotiva com Ronaldo Shibata e transforme sua paixão
                por carros em uma profissão lucrativa
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Turmas diurnas e noturnas disponíveis • Mais de 2 mil alunos formados
              </p>
              
              {/* Video Centered */}
              <div className="w-full md:w-fit max-w-4xl mx-auto relative group mt-8">
                <video
                  ref={videoRef}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_2QBODDdI8A8tsCTNZiinY9ticHig/XBJvyM7_SJO2JB0_QCoq6s/public/sobre-video.mp4"
                  className="rounded-lg shadow-2xl w-full h-auto md:w-auto md:max-h-[500px]"
                  controls={!isPreview}
                  preload="auto"
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnded}
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>

                {(isPreview || !isPlaying) && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handlePlayPause}
                  >
                    <div className="w-20 h-20 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Content Section */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* CTA Section */}
              <div className="flex justify-center mb-16">
                <InscriptionModal>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-xl w-full sm:w-auto shadow-lg animate-pulse"
                  >
                    Inscrever-se Agora
                  </Button>
                </InscriptionModal>
              </div>

              {/* Course Overview Details */}
              <AnimatedSection delay={0.2}>
                 <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Por que escolher nosso curso?</h2>
                    <p className="text-muted-foreground mb-4">
                      Com mais de 20 anos de experiência no mercado, Ronaldo Shibata desenvolveu uma metodologia única que
                      combina teoria sólida com prática intensiva.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Nosso curso é reconhecido como um dos mais completos do Brasil, formando profissionais capacitados
                      para atuar no mercado premium de estética automotiva.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
                      <div className="text-center p-4 bg-card/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary">30h</div>
                        <div className="text-sm text-muted-foreground">Carga Horária</div>
                      </div>
                      <div className="text-center p-4 bg-card/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary">2000+</div>
                        <div className="text-sm text-muted-foreground">Alunos Formados</div>
                      </div>
                    </div>
                 </div>
              </AnimatedSection>

              {/* Course Modules */}
              <AnimatedSection delay={0.3}>
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Conteúdo Programático</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courseModules.map((module, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative"
                      >
                        <div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: "rgba(231, 236, 235, 0.08)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                        <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10">
                          <div className="flex justify-between items-start w-full">
                            <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                          </div>
                          <ul className="space-y-2 w-full">
                            {module.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                                <svg
                                  className="w-4 h-4 text-primary flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={0.4}>
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">O que você recebe</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                          {benefit.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Final CTA Section (antigo Investment) */}
              <AnimatedSection delay={0.5}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Garanta sua Vaga</h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Investimento que se paga em poucos serviços. Nossos alunos relatam retorno do investimento em menos de
                    30 dias após a conclusão do curso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <InscriptionModal>
                      <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full sm:w-auto"
                      >
                        Inscrever-se Agora
                      </Button>
                    </InscriptionModal>
                    <Button
                      variant="outline"
                      className="px-8 py-3 text-lg bg-transparent w-full sm:w-auto"
                      onClick={() =>
                        window.open(
                          "https://wa.me/5541998760734?text=Olá! Gostaria de falar com um consultor sobre o curso de detalhamento profissional.",
                          "_blank",
                        )
                      }
                    >
                      Falar com Consultor
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
        </div>
      </main>

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
