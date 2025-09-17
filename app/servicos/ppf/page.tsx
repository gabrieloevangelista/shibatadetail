import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Eye, RotateCcw, FileText } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Análise Técnica",
    description: "Avaliação completa da pintura e medição de espessura para aplicação perfeita",
  },
  {
    step: "02",
    title: "Preparação da Superfície",
    description: "Lavagem técnica, clay bar e polimento para superfície impecável",
  },
  {
    step: "03",
    title: "Corte Personalizado",
    description: "Corte preciso do filme usando templates específicos do veículo",
  },
  {
    step: "04",
    title: "Aplicação Profissional",
    description: "Instalação com técnicas avançadas e ferramentas especializadas",
  },
  {
    step: "05",
    title: "Acabamento Final",
    description: "Remoção de bolhas, alinhamento perfeito e inspeção de qualidade",
  },
]

const benefits = [
  {
    title: "Proteção Total",
    description: "Protege contra riscos, pedradas e desgaste natural",
    icon: Shield,
  },
  {
    title: "Invisível",
    description: "Transparência total, mantém a cor original",
    icon: Eye,
  },
  {
    title: "Auto-Regeneração",
    description: "Micro riscos desaparecem com calor do sol",
    icon: RotateCcw,
  },
  {
    title: "Garantia 10 Anos",
    description: "Cobertura completa contra defeitos e amarelamento",
    icon: FileText,
  },
]

export default function PPFPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Paint Protection Film</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A proteção definitiva para sua pintura. Filme transparente de poliuretano que preserva a beleza
                  original do seu veículo contra todos os tipos de danos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 w-full md:w-auto">
                      Agendar Serviço
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                    src="/iloveimg-resized/ -17.jpg"
                  alt="Aplicação de PPF"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                  query="luxury red sports car getting paint protection film installation by professional detailer"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Process Steps */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Processo de Aplicação PPF</h2>
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

          {/* Benefits */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Vantagens do PPF</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <benefit.icon className="w-12 h-12 text-red-500 stroke-2" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Coverage Options */}
          <AnimatedSection delay={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Opções de Cobertura</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Kit Básico</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Maçanetas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Colunas de porta
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Entrada de portas
                    </li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-xl font-semibold text-white mb-4">Kit Frontal</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Para-choque dianteiro
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Capô completo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Paralamas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Faróis e retrovisores
                    </li>
                  </ul>
                </div>
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Kit Full</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Veículo completo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Todas as superfícies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Proteção máxima
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Melhor custo-benefício
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing */}
          <AnimatedSection delay={0.5}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Investimento</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Kit Básico</h3>
                  <div className="text-2xl font-bold text-primary mb-2">Valor sob consulta</div>
                  <p className="text-muted-foreground text-sm">Maçanetas, colunas e entrada de portas</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-lg font-semibold text-white mb-2">Kit Frontal</h3>
                  <div className="text-2xl font-bold text-primary mb-2">Valor sob consulta</div>
                  <p className="text-muted-foreground text-sm">Para-choque, capô, paralamas, farol, retrovisor</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Kit Full</h3>
                  <div className="text-2xl font-bold text-primary mb-2">Valor sob consulta</div>
                  <p className="text-muted-foreground text-sm">Proteção completa do veículo</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                *O valor varia conforme o modelo do veículo e complexidade da aplicação. Inclui garantia de 10 anos.
              </p>
              <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                  Agendar Serviço
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
