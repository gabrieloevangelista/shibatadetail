import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const processSteps = [
  {
    step: "01",
    title: "Preparação Completa",
    description: "Lavagem técnica, descontaminação e polimento para superfície perfeita",
  },
  {
    step: "02",
    title: "Aplicação Base",
    description: "Primeira camada de coating cerâmico aplicada com precisão milimétrica",
  },
  {
    step: "03",
    title: "Cura Controlada",
    description: "Processo de cura em ambiente controlado para máxima aderência",
  },
  {
    step: "04",
    title: "Segunda Camada",
    description: "Aplicação da segunda camada para durabilidade e brilho superiores",
  },
  {
    step: "05",
    title: "Inspeção e Garantia",
    description: "Verificação final e emissão de certificado de garantia",
  },
]

const benefits = [
  {
    title: "Proteção UV",
    description: "Bloqueia 99% dos raios UV prejudiciais à pintura",
    icon: "☀️",
  },
  {
    title: "Hidrofobicidade",
    description: "Efeito repelente à água facilita a limpeza",
    icon: "💧",
  },
  {
    title: "Resistência Química",
    description: "Proteção contra chuva ácida e contaminantes",
    icon: "🧪",
  },
  {
    title: "Brilho Duradouro",
    description: "Mantém o brilho intenso por anos",
    icon: "✨",
  },
]

export default function VitrificacaoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vitrificação Cerâmica</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A mais avançada proteção para seu veículo. Coating cerâmico de última geração que oferece proteção
                  superior por até 5 anos com garantia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 w-full md:w-auto">
                      Agendar Consulta
                    </Button>
                  </Link>
                  <Button variant="outline" className="px-8 py-3 w-full md:w-auto bg-transparent">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
              <div>
                <Image
                    src="/red-luxury-car-ceramic-coating-application.jpg"
                  alt="Vitrificação Cerâmica"
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Processo de Vitrificação</h2>
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefícios da Vitrificação</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Comparison */}
          <AnimatedSection delay={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Vitrificação vs Cera Tradicional</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Cera Tradicional</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Durabilidade: 2-6 meses
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Proteção limitada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Requer reaplicação frequente
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Brilho temporário
                    </li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-xl font-semibold text-white mb-4">Vitrificação Cerâmica</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Durabilidade: 3-5 anos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Proteção máxima
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Manutenção mínima
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Brilho permanente
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
              <div className="bg-background/50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Vitrificação Cerâmica</h3>
                <div className="text-3xl font-bold text-primary mb-4">Valor sob consulta</div>
                <p className="text-muted-foreground mb-4">
                  O valor varia conforme o tamanho do veículo, estado da pintura e tipo de coating escolhido
                </p>
                <ul className="text-left text-muted-foreground space-y-2 max-w-md mx-auto">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Avaliação gratuita da pintura
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Orçamento personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Garantia de até 5 anos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Certificado de aplicação
                  </li>
                </ul>
              </div>
              <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                  Solicitar Orçamento Gratuito
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
