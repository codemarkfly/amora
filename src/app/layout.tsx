import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "AMORA — Descubra habilidades. Crie objetivos. Evolua com inteligência artificial.",
  description:
    "A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas a desenvolverem novas habilidades no seu próprio ritmo.",
  keywords: ["aprendizado", "criatividade", "IA", "inteligência artificial", "habilidades", "jornadas", "educação"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-[#faf9f6]">
        <Header />
        {children}
      </body>
    </html>
  )
}
