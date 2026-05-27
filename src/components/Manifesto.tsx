"use client"

import { motion } from "framer-motion"
import { Sparkles, Quote } from "lucide-react"

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/20 via-blue-100/20 to-teal-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 text-sm font-medium rounded-full mb-6">
            <Quote className="w-4 h-4" />
            Nosso manifesto
          </span>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-200 mx-auto mb-8" />

          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] text-gray-900 mb-8">
            &ldquo;Acreditamos que toda pessoa pode
            <br />
            <span className="text-gradient">desenvolver novas habilidades</span>
            <br />
            quando recebe
            <span className="text-gradient-warm"> inspiração</span>,
            <span className="text-gradient-warm"> direção</span>
            <br />
            e{" "}
            <span className="text-gradient">liberdade</span> para explorar
            <br />
            seu próprio caminho.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3 text-gray-500">
            <span className="w-8 h-px bg-gray-300" />
            <span className="text-sm font-medium">AMORA — Filosofia</span>
            <span className="w-8 h-px bg-gray-300" />
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { titulo: "Inspiração", desc: "Despertar a curiosidade que existe em cada pessoa.", cor: "from-purple-500 to-blue-500" },
            { titulo: "Criatividade", desc: "Valorizar o processo criativo como ferramenta de descoberta.", cor: "from-blue-500 to-teal-400" },
            { titulo: "Evolução", desc: "Celebrar cada passo, não apenas o destino final.", cor: "from-teal-400 to-emerald-400" },
            { titulo: "Humanidade", desc: "Colocar a tecnologia a serviço do potencial humano.", cor: "from-amber-400 to-orange-400" },
          ].map((item, index) => (
            <motion.div
              key={item.titulo}
              className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.cor} flex items-center justify-center mb-4`}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titulo}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
