import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "AMORA — Descubra habilidades. Crie objetivos. Evolua com inteligência artificial.",
  description:
    "A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas a desenvolverem novas habilidades no seu próprio ritmo.",
  keywords: ["aprendizado", "criatividade", "IA", "inteligência artificial", "habilidades", "jornadas", "educação"],
  applicationName: "AMORA",
  authors: [{ name: "AMORA" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#7c3aed" },
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AMORA",
    title: "AMORA — Descubra habilidades. Crie objetivos. Evolua com inteligência artificial.",
    description:
      "A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas a desenvolverem novas habilidades no seu próprio ritmo.",
    url: "https://amora-nine-zeta.vercel.app",
    images: [
      {
        url: "/favicon.svg",
        width: 512,
        height: 512,
        alt: "AMORA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMORA — Descubra habilidades. Crie objetivos. Evolua com inteligência artificial.",
    description:
      "A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas a desenvolverem novas habilidades no seu próprio ritmo.",
    images: ["/favicon.svg"],
    creator: "@amora",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#7c3aed" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "AMORA",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="AMORA" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen bg-[#faf9f6]">
        <Header />
        {children}
      </body>
    </html>
  )
}
