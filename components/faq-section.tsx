"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "O que é o Shibata Premium Detail e para quem é indicado?",
    answer:
      "O Shibata Premium Detail é uma empresa especializada em estética automotiva premium, oferecendo serviços de lavagem, detalhamento interno, polimento, vitrificação e PPF para todos os tipos de veículos. Nossos serviços são ideais para proprietários que valorizam a aparência e conservação de seus automóveis.",
  },
  {
    question: "Quais produtos são utilizados nos serviços?",
    answer:
      "Utilizamos apenas produtos de alta qualidade e marcas reconhecidas no mercado automotivo. Nossos produtos de limpeza, polimento e proteção são importados e específicos para cada tipo de superfície, garantindo resultados superiores e duradouros.",
  },
  {
    question: "Vocês oferecem atendimento domiciliar?",
    answer:
      "NÃO ATENDEMOS em domicílio. Todos os nossos serviços são realizados em nossa oficina especializada, onde temos todo o equipamento e estrutura necessária para garantir a máxima qualidade dos serviços.",
  },
  {
    question: "O que está incluído no plano Básico?",
    answer:
      "O plano Básico inclui lavagem externa completa, aspiração interna básica, limpeza de vidros, aplicação de pneu pretinho e 1 lavagem por mês. É perfeito para quem quer manter o carro limpo com um investimento acessível.",
  },
  {
    question: "Vocês trabalham com carros de todas as marcas?",
    answer:
      "Sim, atendemos veículos de todas as marcas e modelos, desde carros populares até veículos de luxo e esportivos. Nossa equipe é treinada para trabalhar com diferentes tipos de pintura e acabamentos, garantindo o melhor cuidado para cada veículo.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Funcionamos de segunda à sexta das 8:30 às 18:00 e aos sábados das 09:00 às 13:00. Para agendamentos e informações, entre em contato pelo WhatsApp para resposta imediata ou pelo e-mail shibataesteticaatm@hotmail.com.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={`w-full bg-white/10 backdrop-blur-md shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-white/20 outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer hover:bg-white/15 focus-within:bg-white/15`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question.slice(0, 20)}`}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-white text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-gray-300 transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
            aria-hidden="true"
          />
        </div>
      </div>
      <div
        id={`faq-answer-${question.slice(0, 20)}`}
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        aria-hidden={!isOpen}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-gray-200 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Perguntas Frequentes
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Tudo que você precisa saber sobre nossos serviços de estética automotiva premium
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
