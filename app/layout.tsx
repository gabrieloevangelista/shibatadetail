import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileTabbar } from "@/components/mobile-tabbar"
import { SkipNavigation } from "@/components/skip-navigation"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Shibata Premium Detail - Estética Automotiva Premium em Curitiba",
    template: "%s | Shibata Premium Detail",
  },
  description:
    " Estética automotiva premium em Curitiba com Ronaldo Shibata. Detalhamento profissional, vitrificação cerâmica, polimento, PPF e cursos. Transforme seu veículo com excelência e qualidade garantida.",
  keywords: [
    "estética automotiva",
    "detalhamento automotivo",
    "vitrificação cerâmica",
    "polimento automotivo",
    "enceramento premium",
    "curso detalhamento",
    "lavagem premium",
    "PPF",
    "paint protection film",
    "Shibata Premium Detail",
    "Curitiba",
  ],
  authors: [{ name: "Shibata Premium Detail", url: "https://shibatapremiumdetail.com" }],
  creator: "Shibata Premium Detail",
  publisher: "Shibata Premium Detail",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shibata Premium Detail - Estética Automotiva Premium em Curitiba",
    description:
      "🚗 Estética automotiva premium em Curitiba com Ronaldo Shibata. Detalhamento profissional, vitrificação cerâmica, polimento, PPF e cursos.",
    url: "https://shibatapremiumdetail.com",
    siteName: "Shibata Premium Detail",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Shibata Premium Detail - Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibata Premium Detail - Estética Automotiva Premium em Curitiba",
    description: "🚗 Estética automotiva premium em Curitiba com Ronaldo Shibata. Detalhamento profissional, vitrificação cerâmica, polimento, PPF e cursos.",
    images: ["/favicon.png"],
    creator: "@shibatapremiumdetail",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <SkipNavigation />
        {children}
        <WhatsAppFloat />
        <MobileTabbar />
        <Analytics />
      </body>
    </html>
  )
}
