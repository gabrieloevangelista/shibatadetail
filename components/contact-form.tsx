"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmittedData({ ...formData }) // Armazena os dados antes de limpar
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          vehicle: "",
          message: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background/50 border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.name ? "border-red-500" : "border-muted"
            }`}
            placeholder="Seu nome completo"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background/50 border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.email ? "border-red-500" : "border-muted"
            }`}
            placeholder="seu@email.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Telefone/WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/50 border border-muted rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(41) 99999-9999"
            aria-describedby="phone-help"
          />
          <p id="phone-help" className="mt-1 text-xs text-muted-foreground">
            Opcional - para contato via WhatsApp
          </p>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
            Serviço de Interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/50 border border-muted rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-describedby="service-help"
          >
            <option value="">Selecione um serviço</option>
            <option value="lavagem-premium">Lavagem Premium</option>
            <option value="polimento">Polimento e Correção</option>
            <option value="vitrificacao">Vitrificação Cerâmica</option>
            <option value="interior">Limpeza de Interior</option>
            <option value="ppf">Paint Protection Film</option>
            <option value="curso">Curso de Detalhamento</option>
            <option value="outros">Outros</option>
          </select>
          <p id="service-help" className="mt-1 text-xs text-muted-foreground">
            Opcional - nos ajuda a preparar uma proposta personalizada
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-medium text-white mb-2">
          Veículo
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background/50 border border-muted rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Ex: BMW 320i 2020"
          aria-describedby="vehicle-help"
        />
        <p id="vehicle-help" className="mt-1 text-xs text-muted-foreground">
          Opcional - marca, modelo e ano do seu veículo
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
            errors.message ? "border-red-500" : "border-muted"
          }`}
          placeholder="Conte-nos mais sobre o que você precisa..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        ) : (
          <p id="message-help" className="mt-1 text-xs text-muted-foreground">
            Descreva seus objetivos, dúvidas ou necessidades específicas
          </p>
        )}
      </div>

      {submitStatus === "success" && submittedData && (
        <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl" role="alert" aria-live="polite">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-400">Mensagem Enviada com Sucesso!</h3>
          </div>
          
          <div className="bg-background/30 rounded-lg p-4 mb-4">
            <h4 className="text-white font-medium mb-3">Resumo dos seus dados:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Nome:</span>
                <p className="text-white font-medium">{submittedData.name}</p>
              </div>
              <div>
                <span className="text-muted-foreground">E-mail:</span>
                <p className="text-white font-medium">{submittedData.email}</p>
              </div>
              {submittedData.phone && (
                <div>
                  <span className="text-muted-foreground">Telefone:</span>
                  <p className="text-white font-medium">{submittedData.phone}</p>
                </div>
              )}
              {submittedData.service && (
                <div>
                  <span className="text-muted-foreground">Serviço:</span>
                  <p className="text-white font-medium">
                    {submittedData.service === "lavagem-premium" && "Lavagem Premium"}
                    {submittedData.service === "polimento" && "Polimento e Correção"}
                    {submittedData.service === "vitrificacao" && "Vitrificação Cerâmica"}
                    {submittedData.service === "interior" && "Limpeza de Interior"}
                    {submittedData.service === "ppf" && "Paint Protection Film"}
                    {submittedData.service === "curso" && "Curso de Detalhamento"}
                    {submittedData.service === "outros" && "Outros"}
                  </p>
                </div>
              )}
              {submittedData.vehicle && (
                <div className="md:col-span-2">
                  <span className="text-muted-foreground">Veículo:</span>
                  <p className="text-white font-medium">{submittedData.vehicle}</p>
                </div>
              )}
              <div className="md:col-span-2">
                <span className="text-muted-foreground">Mensagem:</span>
                <p className="text-white font-medium mt-1">{submittedData.message}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <p className="text-green-400 text-sm mb-2">
                ✅ Recebemos sua solicitação e entraremos em contato em breve!
              </p>
              <p className="text-muted-foreground text-xs">
                Tempo de resposta: até 2 horas em horário comercial
              </p>
            </div>
            <div className="flex gap-2">
              <a 
                href="https://wa.me/5541998760734" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
              >
                WhatsApp
              </a>
              <button 
                onClick={() => {
                  setSubmitStatus("idle")
                  setSubmittedData(null)
                }}
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm rounded-lg transition-colors"
              >
                Nova Mensagem
              </button>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg" role="alert" aria-live="polite">
          <p className="text-red-400 text-sm">
            Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-describedby={submitStatus !== "idle" ? "submit-status" : undefined}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>

      <p className="text-muted-foreground text-sm text-center">
        Ao enviar este formulário, você concorda com nossa política de privacidade.
      </p>
    </form>
  )
}
