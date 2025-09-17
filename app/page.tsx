import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { AboutSummarySection } from "@/components/about-summary-section"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <header role="banner">
          <HeroSection />
        </header>
        <main id="main-content" role="main" className="max-w-[1320px] mx-auto relative">
          {/* Dashboard Preview Wrapper */}
        </main>
        {/* Gradiente suave entre hero e seção de marcas */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-background pointer-events-none relative z-10"></div>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6" delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8" delay={0.15}>
          <AboutSummarySection />
        </AnimatedSection>
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-8" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <footer role="contentinfo">
          <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
            <FooterSection />
          </AnimatedSection>
        </footer>
      </div>
    </div>
  )
}
