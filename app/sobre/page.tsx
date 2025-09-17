import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre a Shibata Premium Detail</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Excelência em estética automotiva com mais de 10 anos de experiência
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Image
                  src="/iloveimg-resized/ -06.jpg"
                  alt="Workshop Shibata Premium Detail"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Nossa História</h2>
                <p className="text-muted-foreground mb-4">
                  A Shibata Premium Detail nasceu da paixão por transformar veículos em verdadeiras obras de arte. Com
                  mais de uma década de experiência no mercado de estética automotiva, desenvolvemos técnicas exclusivas
                  que garantem resultados excepcionais.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nosso fundador, Ronaldo Shibata, é reconhecido nacionalmente por sua expertise em detalhamento
                  automotivo e por formar os melhores profissionais do setor através de cursos especializados.
                </p>
                <p className="text-muted-foreground">
                  Utilizamos apenas produtos premium e equipamentos de última geração para garantir que cada veículo
                  receba o tratamento que merece.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossa Missão</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Excelência</h3>
                  <p className="text-muted-foreground">
                    Buscar sempre a perfeição em cada detalhe, superando expectativas
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Educação</h3>
                  <p className="text-muted-foreground">
                    Formar profissionais qualificados através de cursos especializados
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Paixão</h3>
                  <p className="text-muted-foreground">
                    Amor genuíno pelo que fazemos, tratando cada veículo com carinho
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Localização</h2>
              <p className="text-muted-foreground mb-6">R. Brasílio Itiberê, 2361 - Eurocar Select</p>
              <div className="bg-card/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Estamos localizados em um espaço moderno e equipado com a melhor infraestrutura para atender veículos
                  de todos os portes com máxima qualidade.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
