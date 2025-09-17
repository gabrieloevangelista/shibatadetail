"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Básico",
      monthlyPrice: "R$ 129",
      annualPrice: "R$ 98",
      description: "Perfeito para manutenção regular do seu veículo.",
      features: [
        "Lavagem externa completa",
        "Aspiração interna básica",
        "Limpeza de vidros",
        "Pneus pretinhos",
        "2 lavagens por mês",
      ],
      buttonText: "Assinar agora",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
      whatsappLink:
        "https://wa.me/5541998760734?text=Olá! Gostaria de assinar o plano Básico do Shibata Premium Detail.",
    },
    {
      name: "Premium",
      monthlyPrice: "R$ 349",
      annualPrice: "R$ 269",
      description: "Ideal para quem quer o carro sempre impecável.",
      features: [
        "Lavagem externa e interna completa",
        "Enceramento com cera premium",
        "Detalhamento interno profundo",
        "Limpeza do motor",
        "Proteção de pneus e plásticos",
        "Aromatização",
        "4 lavagens por mês",
        "Atendimento prioritário",
      ],
      buttonText: "Assinar agora",
      buttonClass:
        "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
      whatsappLink:
        "https://wa.me/5541998760734?text=Olá! Gostaria de assinar o plano Premium do Shibata Premium Detail.",
    },
    {
      name: "VIP",
      monthlyPrice: "R$ 699",
      annualPrice: "R$ 549",
      description: "Tratamento exclusivo para veículos de luxo.",
      features: [
        "Todos os serviços Premium",
        "Polimento e correção de pintura",
        "Aplicação de cera carnaúba premium",
        "Higienização com ozônio",
        "Lavagens ilimitadas",
        "Atendimento domiciliar",
        "Garantia de satisfação",
      ],
      buttonText: "Assinar agora",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
      whatsappLink: "https://wa.me/5541998760734?text=Olá! Gostaria de assinar o plano VIP do Shibata Premium Detail.",
    },
  ]

  const handleToggleKeyDown = (e: React.KeyboardEvent, value: boolean) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setIsAnnual(value)
    }
  }

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Planos para Todos os Perfis
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Escolha o plano ideal para manter seu veículo sempre limpo e protegido, <br /> desde cuidados básicos até
            tratamentos VIP.
          </p>
        </div>
        <div className="pt-4">
          <div
            className="p-0.5 bg-muted rounded-lg outline outline-1 outline-[#0307120a] outline-offset-[-1px] flex justify-start items-center gap-1 md:mt-0"
            role="tablist"
            aria-label="Seleção de período de cobrança"
          >
            <button
              onClick={() => setIsAnnual(true)}
              onKeyDown={(e) => handleToggleKeyDown(e, true)}
              className={`pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all ${isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
              role="tab"
              aria-selected={isAnnual}
              aria-controls="pricing-content"
              tabIndex={0}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Anual
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              onKeyDown={(e) => handleToggleKeyDown(e, false)}
              className={`px-2 py-1 flex justify-start items-start rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all ${!isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
              role="tab"
              aria-selected={!isAnnual}
              aria-controls="pricing-content"
              tabIndex={0}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${!isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Mensal
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="pricing-content"
        className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto"
        role="tabpanel"
      >
        {pricingPlans.map((plan, index) => (
          <article
            key={plan.name}
            className={`flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]" : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"}`}
            style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
            role="region"
            aria-labelledby={`plan-${index}-title`}
            aria-describedby={`plan-${index}-description`}
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div
                  id={`plan-${index}-title`}
                  className={`w-full h-5 text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                      <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1.5">
                    <div
                      className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: isAnnual ? 1 : 0,
                          transform: `scale(${isAnnual ? 1 : 0.8})`,
                          filter: `blur(${isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={!isAnnual}
                      >
                        {plan.annualPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: !isAnnual ? 1 : 0,
                          transform: `scale(${!isAnnual ? 1 : 0.8})`,
                          filter: `blur(${!isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={isAnnual}
                      >
                        {plan.monthlyPrice}
                      </span>
                    </div>
                    <div
                      className={`text-center text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                    >
                      /mês
                    </div>
                  </div>
                  <div
                    id={`plan-${index}-description`}
                    className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${plan.buttonClass}`}
                onClick={() => window.open(plan.whatsappLink, "_blank")}
                aria-label={`Assinar plano ${plan.name} - ${isAnnual ? plan.annualPrice : plan.monthlyPrice} por mês`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-sm font-medium leading-tight ${plan.name === "Básico" ? "text-gray-800" : plan.name === "Premium" ? "text-primary" : "text-zinc-950"}`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.name === "Básico" ? "Inclui:" : `Tudo do ${plan.name === "Premium" ? "Básico" : "Premium"} +`}
              </div>
              <ul className="self-stretch flex flex-col justify-start items-start gap-3" role="list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={feature} className="self-stretch flex justify-start items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
