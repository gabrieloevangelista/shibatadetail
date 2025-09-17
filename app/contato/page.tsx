import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Endereço",
    content: "R. Brasílio Itiberê, 2361 - Eurocar Select",
    subtitle: "Curitiba, PR",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Telefone",
    content: "(41) 99876-0734",
    subtitle: "WhatsApp resposta imediata",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Horário de Funcionamento",
    content: "Segunda a Sexta: 8:30 às 18:00",
    subtitle: "Sábado: 09:00 às 13:00",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "E-mail",
    content: "shibataesteticaatm@hotmail.com",
    subtitle: "Resposta em até 24h",
  },
]

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pt-8">Entre em Contato</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos prontos para atender você e transformar seu veículo. Entre em contato conosco para agendar seu
                serviço ou tirar suas dúvidas.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Info Cards */}
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  {info.title === "E-mail" ? (
                    <a 
                      href={`mailto:${info.content}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : info.title === "Telefone" ? (
                    <a 
                      href={`tel:${info.content.replace(/[^0-9]/g, '')}`}
                      className="text-muted-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-medium">{info.content}</p>
                  )}
                  <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={0.3}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Envie sua Mensagem</h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível para agendar seu serviço ou
                  responder suas dúvidas.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.4}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Nossa Localização</h2>
                <p className="text-muted-foreground mb-6">
                  Estamos localizados na Eurocar Select, um espaço dedicado aos amantes de carros premium.
                </p>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0234567890123!2d-49.2734567890123!3d-25.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI0LjQiUyA0OcKwMTYnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Como Chegar</h3>
                  <p className="text-muted-foreground text-sm">
                    Localizado na R. Brasílio Itiberê, 2361, dentro da Eurocar Select. Estacionamento gratuito
                    disponível no local.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
        <FooterSection />
      </AnimatedSection>
    </div>
  )
}
