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
            <option value="enceramento">Enceramento e Proteção</option>
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

      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg" role="alert" aria-live="polite">
          <p className="text-green-400 text-sm">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
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
