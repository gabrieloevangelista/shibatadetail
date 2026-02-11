"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { trackWhatsAppConversion } from "@/lib/whatsapp-tracking"

const formSchema = z.object({
  fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  whatsapp: z.string().min(10, "Número inválido").max(15, "Número inválido").regex(/^[\d\s\-\(\)]+$/, "Digite apenas números"),
  email: z.string().email("E-mail inválido"),
})

type FormData = z.infer<typeof formSchema>

interface InscriptionModalProps {
  children: React.ReactNode
}

export function InscriptionModal({ children }: InscriptionModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simular um pequeno delay para feedback visual
      await new Promise(resolve => setTimeout(resolve, 1000))

      const phoneNumber = "5541998760734"
      const message = `Quero garantir minha inscrição para próxima turma\n\nNome: ${data.fullName}\nWhatsApp: ${data.whatsapp}\nE-mail: ${data.email}`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      
      // Rastreia o evento de conversão e abre o WhatsApp
      trackWhatsAppConversion(whatsappUrl, true)
      
      setOpen(false)
      reset()
    } catch (error) {
      console.error("Erro ao enviar:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle>Garantir Vaga</DialogTitle>
          <DialogDescription>
            Preencha seus dados para iniciar sua inscrição via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              placeholder="Seu nome completo"
              {...register("fullName")}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              placeholder="(00) 00000-0000"
              {...register("whatsapp")}
              className={errors.whatsapp ? "border-red-500" : ""}
            />
            {errors.whatsapp && (
              <p className="text-sm text-red-500">{errors.whatsapp.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Continuar para WhatsApp"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
