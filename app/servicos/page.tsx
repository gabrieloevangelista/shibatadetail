import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import Image from "next/image"
import { Droplets, Shield, Sparkles, Star, Car } from "lucide-react"

const services = [
  {
    id: "lavagem-premium",
    title: "Lavagem Completa Premium",
    description: "Lavagem externa com produtos de alta qualidade. Carro pequeno R$250, médio R$350, grande/SUV/caminhonete R$450.",
    image: "/red-luxury-car-premium-washing-service.jpg",
    Icon: Droplets,
  },
  {
    id: "detalhamento-interno",
    title: "Detalhamento Interno",
    description: "Básica R$380 (forro de teto, bancos), Média R$580 (higienização completa), Completa R$750 (com revitalização e hidratação).",
    image: "/drive-download-20250917T151352Z-1-001/ -29.jpg",
    Icon: Sparkles,
  },
  {
    id: "polimento",
    title: "Polimento e Correção",
    description: "Polimento Leve R$500, Técnico R$1.200. Remoção de riscos e restauração do brilho original.",
    image: "/drive-download-20250917T151352Z-1-001/ -03.jpg",
    Icon: Star,
  },
  {
    id: "vitrificacao",
    title: "Vitrificação",
    description: "Proteção cerâmica de alta durabilidade para pintura e vidros. Valor sob consulta.",
    image: "/drive-download-20250917T151352Z-1-001/ -07.jpg",
    Icon: Shield,
  },
  {
    id: "ppf",
    title: "Aplicação de PPF",
    description: "Paint Protection Film. Kit básico (maçaneta, coluna), Kit frontal (para-choque, capô), Kit full (completo). Valor sob consulta.",
    image: "/drive-download-20250917T151352Z-1-001/ -10.jpg",
    Icon: Car,
  },
]

const BentoCard = ({ title, description, image, Icon, id }) => (
  <Link href={`/servicos/${id}`} prefetch={true} className="block">
    <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative group hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(231, 236, 235, 0.08)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

      <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <p className="self-stretch text-white text-lg font-normal leading-7">
            {title} <br />
            <span className="text-gray-300">{description}</span>
          </p>
        </div>
      </div>

      <div className="self-stretch h-56 relative -mt-0.5 z-10 overflow-hidden rounded-b-2xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} - Serviço de estética automotiva da Shibata Premium Detail`}
          width={400}
          height={224}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nossos Serviços</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Serviços premium de estética automotiva com técnicas avançadas e produtos de alta qualidade
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.2 + index * 0.1}>
                <BentoCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
