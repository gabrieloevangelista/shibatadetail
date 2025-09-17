import { Car, Droplets, Shield, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"

const BentoCard = ({ title, description, Icon, href }) => (
  <Link href={href} prefetch={true} className="block">
  <Link href={href} className="block">
    <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="absolute inset-0 rounded-2xl bg-black/30 backdrop-blur-md shadow-[0px_2px_4px_rgba(0,0,0,0.16)] outline outline-1 outline-white/20 outline-offset-[-1px] hover:bg-black/40 transition-all duration-500 ease-out" />

      <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <p className="self-stretch text-white text-lg font-normal leading-7">
            {title} <br />
            <span className="text-white">{description}</span>
          </p>
        </div>
      </div>
      <div className="self-stretch h-56 relative -mt-0.5 z-10 flex items-center justify-center">
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
          <Icon className="w-16 h-16 text-primary" />
        </div>
      </div>
    </div>
  </Link>
)

export function BentoSection() {
  const cards = [
    {
      title: "Lavagem Completa Premium",
      description: "Lavagem externa com produtos de alta qualidade.",
      Icon: Droplets,
      href: "/servicos/lavagem-premium",
    },
    {
      title: "Detalhamento Interno",
      description: "Higienização completa de estofados, painéis e acabamentos.",
      Icon: Sparkles,
      href: "/servicos/detalhamento-interno",
      href: "/servicos",
    },
    {
      title: "Polimento e Correção",
      description: "Remoção de riscos e restauração do brilho original.",
      Icon: Star,
      href: "/servicos/polimento",
    },
    {
      title: "Vitrificação",
      description: "Proteção cerâmica de alta durabilidade para pintura e vidros.",
      Icon: Shield,
      href: "/servicos/vitrificacao",
    },
    {
      title: "Aplicação de PPF",
      description: "Paint Protection Film para máxima proteção da pintura.",
      Icon: Car,
      href: "/servicos/ppf",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[800px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Nossos Serviços Premium
            </h2>
            <p className="w-full max-w-[600px] text-center text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
              Oferecemos uma gama completa de serviços de estética automotiva para manter seu veículo sempre impecável e
              protegido.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
