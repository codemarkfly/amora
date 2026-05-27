"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { jornadas, categorias } from "@/data/jornadas"
import JourneyCard from "./JourneyCard"

export default function Jornadas() {
  return (
    <section id="jornadas" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Explore possibilidades
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha sua{" "}
            <span className="text-gradient">jornada</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Cada jornada é um universo de descobertas. Escolha o que desperta sua curiosidade e comece a explorar.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categorias.map((cat, i) => (
            <motion.button
              key={cat.nome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{cat.icone}</span>
              {cat.nome}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {jornadas.map((jornada, index) => (
            <JourneyCard key={jornada.id} jornada={jornada} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
