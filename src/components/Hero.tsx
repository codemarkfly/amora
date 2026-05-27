"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import ParticlesBackground from "./ParticlesBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 via-blue-100/20 to-teal-100/20 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/20 shadow-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600">
              Onde criatividade e inteligência se encontram
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <span className="block">Descubra habilidades.</span>
          <span className="block mt-2">
            <span className="text-gradient">Crie objetivos.</span>
          </span>
          <span className="block mt-2">
            Evolua com{" "}
            <span className="text-gradient-warm">inteligência artificial.</span>
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas
          a desenvolverem novas habilidades no seu próprio ritmo.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <motion.a
            href="#jornadas"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-medium rounded-full shadow-lg shadow-purple-200/50 hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explorar Jornadas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#gerador-ia"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-md text-gray-800 font-medium rounded-full border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            Criar Minha Jornada
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-24 flex items-center justify-center gap-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {["Inspiração", "Criatividade", "Evolução", "IA Humana"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-purple-400 to-blue-400" />
        </div>
      </motion.div>
    </section>
  )
}
