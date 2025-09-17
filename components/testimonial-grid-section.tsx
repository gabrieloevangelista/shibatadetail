import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Fiz o curso com o Shibata e hoje tenho uma das melhores lojas da cidade. Profissional de confiança total, pode fazer o curso sem medo. O cara é ponta firme e ensina com excelência!",
    name: "Passok de Paula",
    type: "large-teal",
  },
  {
    quote:
      "Um privilégio participar do curso com o Shibata. Depois do curso você vai ver os carros com outra visão e muito mais profissionalismo. Parabéns pelo espaço e empenho!",
    name: "Auto Mecanica Bordignon",
    type: "small-dark",
  },
  {
    quote:
      "Curso incrível! Ministrado em situação real. Instrutores sempre acompanhando e explicando cada etapa detalhadamente. Foi 100% prático.",
    name: "Vanderlei Bitner",
    type: "small-dark",
  },
  {
    quote:
      "Foi o melhor investimento! Excelentes profissionais que sabem explicar e tirar dúvidas. Recomendo tanto para cursos quanto serviços. Trabalho excelente!",
    name: "Alanys Jhany Camargo",
    type: "small-dark",
  },
  {
    quote:
      "Melhor escola de detalhamento de Curitiba! Graças ao Professor Shibata tenho minha empresa. Aprendi rápido todos os processos para um trabalho de excelência!",
    name: "Ivo Bacci",
    type: "small-dark",
  },
  {
    quote:
      "A melhor experiência que já tive! Descobri coisas que nunca tinha ouvido falar. Ótimo aprendizado com um grande profissional. Super recomendo!",
    name: "João Paulo",
    type: "small-dark",
  },
  {
    quote:
      "Vim do Amapá só para fazer o curso na Shibata Premium Detail. Lá tem o melhor tratamento e o melhor aprendizado que existe!",
    name: "Reis.r",
    type: "large-light",
  },
]

const TestimonialCard = ({ quote, name, type }) => {
  const isLargeCard = type.startsWith("large")
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-white"
    quoteClasses += " text-slate-900 text-2xl font-medium leading-8"
    nameClasses += " text-slate-900 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = null
  } else if (type === "large-light") {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-white text-2xl font-medium leading-8"
    nameClasses += " text-white text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = null
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-white text-[17px] font-normal leading-6"
    nameClasses += " text-white text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex flex-col justify-start items-start gap-2">
        <div className={nameClasses}>{name}</div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Clientes Satisfeitos
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Veja como nossos clientes mantêm seus veículos impecáveis,"} <br />{" "}
            {"protegidos e com aparência de novo usando nossos serviços premium"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
