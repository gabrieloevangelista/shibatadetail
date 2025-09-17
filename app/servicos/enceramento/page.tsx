import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const processSteps = [
  {
    step: "01",
    title: "Preparação",
    description: "Lavagem completa e descontaminação da superfície para máxima aderência",
  },
  {
    step: "02",
    title: "Aplicação da Cera",
    description: "Aplicação uniforme de cera premium com movimentos circulares controlados",
  },
  {
    step: "03",
    title: "Tempo de Cura",
    description: "Aguardo do tempo ideal para a cera formar uma camada protetora eficaz",
  },
  {
    step: "04",
    title: "Remoção",
    description: "Remoção cuidadosa dos resíduos com microfibra de alta qualidade",
  },
  {
    step: "05",
    title: "Inspeção Final",
    description: "Verificação da uniformidade e aplicação de quick detailer se necessário",
  },
]

export default function EnceramentoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enceramento e Proteção</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Proteção superior com ceras premium que realçam o brilho natural da pintura e criam uma barreira
                  contra agentes externos por até 6 meses.
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
                  src="/red-sports-car-waxing-protection-service.jpg"
                  alt="Enceramento Profissional"
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Processo de Enceramento</h2>
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

          {/* Types of Wax */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Tipos de Cera Disponíveis</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Cera Sintética</h3>
                  <p className="text-muted-foreground mb-4">Proteção duradoura com facilidade de aplicação</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Durabilidade: 3-4 meses</li>
                    <li>• Resistente à água</li>
                    <li>• Brilho intenso</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-primary">
                  <h3 className="text-xl font-semibold text-white mb-4">Cera de Carnaúba</h3>
                  <p className="text-muted-foreground mb-4">Brilho natural incomparável e profundidade única</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Durabilidade: 2-3 meses</li>
                    <li>• Brilho natural</li>
                    <li>• Profundidade excepcional</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Selante Híbrido</h3>
                  <p className="text-muted-foreground mb-4">Combinação perfeita de durabilidade e brilho</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Durabilidade: 4-6 meses</li>
                    <li>• Resistência UV</li>
                    <li>• Fácil manutenção</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing */}
          <AnimatedSection delay={0.4}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Investimento</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Cera Sintética</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 200</div>
                  <p className="text-muted-foreground text-sm">+ Lavagem Premium</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border-2 border-primary">
                  <h3 className="text-lg font-semibold text-white mb-2">Cera de Carnaúba</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 280</div>
                  <p className="text-muted-foreground text-sm">+ Lavagem Premium</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Selante Híbrido</h3>
                  <div className="text-2xl font-bold text-primary mb-2">R$ 350</div>
                  <p className="text-muted-foreground text-sm">+ Lavagem Premium</p>
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
