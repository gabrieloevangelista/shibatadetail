import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16" role="main">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <section className="text-center mb-16" aria-labelledby="main-heading">
              <h1 id="main-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 pt-8">Política de Privacidade</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Como coletamos, usamos e protegemos suas informações pessoais
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8" aria-labelledby="privacy-heading">
              <article className="prose prose-invert max-w-none">
                <h2 id="privacy-heading" className="text-2xl font-bold text-white mb-6">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos informações que você nos fornece diretamente, incluindo:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Nome completo e informações de contato</li>
                  <li>Número de telefone e endereço de email</li>
                  <li>Informações sobre seu veículo (marca, modelo, ano)</li>
                  <li>Histórico de serviços realizados</li>
                  <li>Preferências de comunicação</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">2. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Processar agendamentos e pagamentos</li>
                  <li>Comunicar sobre serviços e promoções</li>
                  <li>Manter registros de serviços para garantia</li>
                  <li>Responder a suas dúvidas e solicitações</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">3. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e propriedade</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">4. Segurança dos Dados</h2>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">5. Retenção de Dados</h2>
                <p className="text-muted-foreground mb-4">
                  Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados de garantia são mantidos conforme o período de garantia de cada serviço.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">6. Seus Direitos</h2>
                <p className="text-muted-foreground mb-4">
                  Você tem o direito de:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar o consentimento para processamento</li>
                  <li>Receber uma cópia de seus dados</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">7. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground mb-4">
                  Nosso site pode usar cookies para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">8. Comunicações de Marketing</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos enviar comunicações promocionais via WhatsApp, email ou SMS. Você pode cancelar essas comunicações a qualquer momento através dos links de descadastro ou entrando em contato conosco.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">9. Alterações nesta Política</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através de nossos canais de comunicação.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">10. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside">
                  <li>Telefone: (41) 99876-0734</li>
                  <li>Email: shibataesteticaatm@hotmail.com</li>
                  <li>Endereço: R. Brasílio Itiberê, 2361 - Curitiba, PR</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-6 mt-8">11. Lei Geral de Proteção de Dados (LGPD)</h2>
                <p className="text-muted-foreground mb-4">
                  Esta política está em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018). Processamos seus dados com base em consentimento, execução de contrato e interesses legítimos.
                </p>
                
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