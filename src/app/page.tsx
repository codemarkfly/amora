import Hero from "@/components/Hero"
import Jornadas from "@/components/Jornadas"
import ComoFunciona from "@/components/ComoFunciona"
import GeradorPrompts from "@/components/GeradorPrompts"
import Evolucao from "@/components/Evolucao"
import Mural from "@/components/Mural"
import Manifesto from "@/components/Manifesto"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Jornadas />
      <ComoFunciona />
      <GeradorPrompts />
      <Evolucao />
      <Mural />
      <Manifesto />
      <Footer />
    </main>
  )
}
