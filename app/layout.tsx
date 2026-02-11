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
  metadataBase: new URL("https://shibatapremiumdetail.com.br"),
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
  authors: [{ name: "Shibata Premium Detail", url: "https://shibatapremiumdetail.com.br" }],
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
    url: "https://shibatapremiumdetail.com.br",
    siteName: "Shibata Premium Detail",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
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
    images: ["/apple-touch-icon.png"],
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
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Função para disparar evento de conversão
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-16912435359/a8KCCMrrpZ0bEJ-RvYA_',
    'event_callback': callback
  });
  return false;
}
          `
        }} />
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVPWC4XV');`
        }} />
        {/* End Google Tag Manager */}
        
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVPWC4XV"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SkipNavigation />
        {children}
        <WhatsAppFloat />
        <MobileTabbar />
        <Analytics />
      </body>
    </html>
  )
}
