import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const processSteps = [
  {
    step: "01",
    title: "Aspiração Completa",
    description: "Remoção de toda sujeira e detritos do interior com equipamentos profissionais",
  },
  {
    step: "02",
    title: "Limpeza de Superfícies",
    description: "Limpeza detalhada de painel, console central e todas as superfícies internas",
  },
  {
    step: "03",
    title: "Higienização de Bancos",
    description: "Limpeza profunda dos bancos com produtos específicos para cada tipo de material",
  },
  {
    step: "04",
    title: "Tratamento de Couro",
    description: "Hidratação e proteção do couro com produtos premium (quando aplicável)",
  },
  {
    step: "05",
    title: "Vitrificação de Plásticos",
    description: "Proteção e revitalização de todos os plásticos internos",
  },
]

export default function DetalhamentoInternoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Detalhamento Interno</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Limpeza e revitalização completa do interior do seu veículo com técnicas profissionais e produtos de
                  alta qualidade para garantir máximo conforto e higiene.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 w-full md:w-auto">
                      Agendar Serviço
                    </Button>
                  </Link>
                  <Button variant="outline" className="px-8 py-3 w-full md:w-auto bg-transparent">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
              <div>
                <Image
                    src="/red-luxury-car-interior-detailing-service.jpg"
                  alt="Detalhamento Interno Shibata"
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Nosso Processo</h2>
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
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Benefícios do Detalhamento Interno</h2>
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
                      <h3 className="text-white font-semibold">Higienização Completa</h3>
                      <p className="text-muted-foreground">Eliminação de bactérias, fungos e odores indesejados</p>
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
                      <h3 className="text-white font-semibold">Revitalização de Materiais</h3>
                      <p className="text-muted-foreground">Restauração da aparência original de couros e plásticos</p>
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
                      <h3 className="text-white font-semibold">Proteção Duradoura</h3>
                      <p className="text-muted-foreground">Aplicação de produtos que protegem contra desgaste futuro</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/red-luxury-car-interior-detailing-service.jpg"
                  alt="Processo de Detalhamento Interno"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing */}
          <AnimatedSection delay={0.4}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Investimento</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Básica</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 380</div>
                  <p className="text-muted-foreground text-sm">Forro de teto e bancos</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-lg font-semibold text-white mb-2">Média</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 580</div>
                  <p className="text-muted-foreground text-sm">Higienização completa</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Completa</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 750</div>
                  <p className="text-muted-foreground text-sm">
                    Higienização + revitalização de plásticos + hidratação de couro
                  </p>
                </div>
              </div>
              <Link href="https://wa.me/5541998760734" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg w-full md:w-auto">
                  Agendar Agora
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
