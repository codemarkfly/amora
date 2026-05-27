"use client"

import { motion } from "framer-motion"
import { Sparkles, TreePine, Leaf, Flower2, Star } from "lucide-react"

const niveisEvolucao = [
  {
    nome: "Descobrindo",
    emoji: "🌱",
    icone: Leaf,
    desc: "Primeiros passos, curiosidade e experimentação.",
    cor: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    progresso: 25,
  },
  {
    nome: "Praticando",
    emoji: "🌿",
    icone: TreePine,
    desc: "Consistência, técnicas e desenvolvimento.",
    cor: "from-teal-400 to-cyan-500",
    bg: "bg-teal-50",
    progresso: 50,
  },
  {
    nome: "Criando",
    emoji: "🌳",
    icone: Flower2,
    desc: "Autonomia, estilo próprio e projetos autorais.",
    cor: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
    progresso: 75,
  },
  {
    nome: "Inspirando",
    emoji: "✨",
    icone: Star,
    desc: "Mentoria, compartilhamento e legado.",
    cor: "from-purple-400 to-pink-500",
    bg: "bg-purple-50",
    progresso: 100,
  },
]

export default function Evolucao() {
  return (
    <section className="relative py-24 sm:py-32 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Sua evolução
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cresça no seu{" "}
            <span className="text-gradient">próprio ritmo</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Cada fase é uma conquista. Celebre seu progresso e inspire outros com sua jornada.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="hidden md:block relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 -translate-y-1/2" />

            <div className="relative flex justify-between">
              {niveisEvolucao.map((nivel, index) => (
                <motion.div
                  key={nivel.nome}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${nivel.cor} flex items-center justify-center shadow-lg mb-3 relative z-10`}>
                    <nivel.icone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{nivel.emoji} {nivel.nome}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:hidden">
            {niveisEvolucao.map((nivel, index) => (
              <motion.div
                key={nivel.nome}
                className={`${nivel.bg} rounded-2xl p-5`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${nivel.cor} flex items-center justify-center`}>
                    <nivel.icone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-gray-900">{nivel.emoji} {nivel.nome}</span>
                    <p className="text-sm text-gray-500">{nivel.desc}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${nivel.cor} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${nivel.progresso}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-4 gap-6 mt-12">
            {niveisEvolucao.map((nivel, index) => (
              <motion.div
                key={nivel.nome}
                className={`${nivel.bg} rounded-2xl p-5 text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm text-gray-600 mb-3">{nivel.desc}</p>
                <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${nivel.cor} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${nivel.progresso}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
