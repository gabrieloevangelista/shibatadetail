import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const processSteps = [
  {
    step: "01",
    title: "Avaliação da Pintura",
    description: "Análise detalhada dos riscos e imperfeições com medidor de espessura",
  },
  {
    step: "02",
    title: "Preparação",
    description: "Lavagem técnica e descontaminação completa da superfície",
  },
  {
    step: "03",
    title: "Polimento Técnico",
    description: "Correção gradual com abrasivos específicos para cada tipo de defeito",
  },
  {
    step: "04",
    title: "Refino",
    description: "Polimento de acabamento para eliminar micro-riscos e hologramas",
  },
  {
    step: "05",
    title: "Proteção",
    description: "Aplicação de cera ou selante para proteger o trabalho realizado",
  },
]

const defectTypes = [
  {
    title: "Riscos Leves",
    description: "Micro-riscos superficiais causados por lavagem inadequada",
    severity: "Leve",
    color: "text-green-400",
  },
  {
    title: "Riscos Médios",
    description: "Riscos mais profundos que atravessam o verniz",
    severity: "Médio",
    color: "text-yellow-400",
  },
  {
    title: "Riscos Profundos",
    description: "Riscos que atingem a tinta, necessitando repintura localizada",
    severity: "Alto",
    color: "text-red-400",
  },
]

export default function PolimentoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-8">Polimento e Correção</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Restauração profissional da pintura, eliminando riscos, hologramas e imperfeições para devolver o
                  brilho e profundidade originais do seu veículo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 w-full md:w-auto">
                      Agendar Serviço
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                    src="/iloveimg-resized/-03.jpg"
                  alt="Polimento Profissional"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Process Steps */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Processo de Correção</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Defect Types */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Tipos de Defeitos que Corrigimos</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {defectTypes.map((defect, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{defect.title}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full bg-opacity-20 ${defect.color}`}>
                        {defect.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{defect.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Before/After */}
          <AnimatedSection delay={0.4}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Resultados Garantidos</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-white font-semibold">Eliminação de 95% dos Riscos</h3>
                      <p className="text-muted-foreground">Remoção completa de micro-riscos e hologramas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-white font-semibold">Brilho Espelhado</h3>
                      <p className="text-muted-foreground">Reflexo perfeito que valoriza seu veículo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-white font-semibold">Proteção Incluída</h3>
                      <p className="text-muted-foreground">Selante aplicado para manter o resultado por meses</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing */}
          <AnimatedSection delay={0.5}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Investimento</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Polimento Leve</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 500</div>
                  <p className="text-muted-foreground text-sm">Correção de micro-riscos e hologramas</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-lg font-semibold text-white mb-2">Polimento Técnico</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 1.200</div>
                  <p className="text-muted-foreground text-sm">Correção completa e profissional</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                *Preços podem variar conforme o estado da pintura e tamanho do veículo
              </p>
              <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                  Agendar Avaliação Gratuita
                </Button>
              </Link>
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
