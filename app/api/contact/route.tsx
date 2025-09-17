import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, vehicle, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Here you would integrate with Resend or another email service
    // For now, we'll simulate a successful response

    // Example Resend integration (when available):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'shibataesteticaatm@hotmail.com',
      to: 'shibataesteticaatm@hotmail.com',
      subject: `Novo contato: ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Serviço:</strong> ${service || 'Não especificado'}</p>
        <p><strong>Veículo:</strong> ${vehicle || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    })
    */

    // Log the contact form submission (in a real app, you'd save to database)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      vehicle,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
