"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Brain, Compass, Share2, Heart } from "lucide-react"

const passos = [
  {
    numero: "01",
    icone: Compass,
    titulo: "Escolha uma jornada",
    descricao: "Explore diferentes áreas e encontre o que desperta sua curiosidade.",
    cor: "from-purple-500 to-blue-500",
  },
  {
    numero: "02",
    icone: Target,
    titulo: "Defina seus objetivos",
    descricao: "Estabeleça metas pessoais que fazem sentido para sua história.",
    cor: "from-blue-500 to-teal-400",
  },
  {
    numero: "03",
    icone: Brain,
    titulo: "Receba orientação IA",
    descricao: "Prompts inteligentes criados sob medida para sua jornada única.",
    cor: "from-teal-400 to-emerald-400",
  },
  {
    numero: "04",
    icone: Heart,
    titulo: "Pratique no mundo real",
    descricao: "Aplique o que aprendeu em projetos e experiências reais.",
    cor: "from-amber-400 to-orange-400",
  },
  {
    numero: "05",
    icone: Share2,
    titulo: "Compartilhe evolução",
    descricao: "Inspire outros compartilhando sua jornada e descobertas.",
    cor: "from-pink-400 to-rose-400",
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Como funciona
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sua jornada em{" "}
            <span className="text-gradient-warm">5 passos</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Um processo simples e orgânico para transformar curiosidade em habilidade real.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {passos.map((passo, index) => (
              <motion.div
                key={passo.numero}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${passo.cor} flex items-center justify-center shadow-lg`}>
                    <passo.icone className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm text-sm font-bold text-gray-700">
                    {passo.numero}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{passo.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{passo.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
