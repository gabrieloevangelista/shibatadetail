import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSummarySection() {
  return (
    <AnimatedSection className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Conheça a Shibata Premium Detail</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Com mais de 15 anos de experiência no mercado automotivo, a Shibata Premium Detail nasceu da paixão por
          transformar veículos em verdadeiras obras de arte. Fundada por Ronaldo Shibata, nossa empresa se tornou
          referência em estética automotiva premium, oferecendo serviços de alta qualidade e cursos profissionais que
          formam os melhores detailers do mercado.
        </p>
        <p className="text-muted-foreground mb-8">
          Utilizamos apenas produtos e técnicas de última geração, garantindo resultados excepcionais que superam as
          expectativas dos nossos clientes mais exigentes.
        </p>
        <Link href="/sobre">
          <Button
            variant="outline"
            className="px-8 py-3"
          >
            Conheça Nossa História Completa
          </Button>
        </Link>
      </div>
    </AnimatedSection>
  )
}
