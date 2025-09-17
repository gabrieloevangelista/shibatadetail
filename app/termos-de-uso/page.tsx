import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16" role="main">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <section className="text-center mb-16" aria-labelledby="main-heading">
              <h1 id="main-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 pt-8">Termos de Uso</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Condições gerais de uso dos serviços da Shibata Premium Detail
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8" aria-labelledby="acceptance-heading">
              <article className="prose prose-invert max-w-none">
                <h2 id="acceptance-heading" className="text-2xl font-bold text-white mb-6">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Ao utilizar os serviços da Shibata Premium Detail, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground mb-4">
                  A Shibata Premium Detail oferece serviços de estética automotiva premium, incluindo:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Lavagem premium e detalhamento completo</li>
                  <li>Polimento e correção de pintura</li>
                  <li>Vitrificação cerâmica</li>
                  <li>Aplicação de Paint Protection Film (PPF)</li>
                  <li>Detalhamento interno</li>
                  <li>Cursos profissionais de detalhamento</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">3. Agendamento e Cancelamento</h2>
                <p className="text-muted-foreground mb-4">
                  Os agendamentos devem ser feitos através dos canais oficiais (WhatsApp, telefone ou formulário de contato). Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">4. Responsabilidades do Cliente</h2>
                <p className="text-muted-foreground mb-4">
                  O cliente é responsável por:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Fornecer informações precisas sobre o veículo</li>
                  <li>Remover objetos pessoais do veículo antes do serviço</li>
                  <li>Informar sobre danos preexistentes</li>
                  <li>Cumprir os horários agendados</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">5. Garantias</h2>
                <p className="text-muted-foreground mb-4">
                  Oferecemos garantia nos serviços realizados conforme especificado em cada tipo de serviço. A garantia não cobre danos causados por uso inadequado, acidentes ou fatores externos.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">6. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  Nossa responsabilidade está limitada ao valor pago pelo serviço. Não nos responsabilizamos por danos indiretos, lucros cessantes ou danos consequenciais.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">7. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Todo o conteúdo deste site, incluindo textos, imagens, logos e materiais de curso, são propriedade da Shibata Premium Detail e estão protegidos por direitos autorais.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">8. Modificações dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">9. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Telefone: (41) 99876-0734</li>
                  <li>Email: shibataesteticaatm@hotmail.com</li>
                  <li>Endereço: R. Brasílio Itiberê, 2361 - Curitiba, PR</li>
                </ul>
                
                <p className="text-muted-foreground text-sm mt-8">
                  Última atualização: Janeiro de 2024
                </p>
              </article>
            </section>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}