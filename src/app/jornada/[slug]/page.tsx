"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, Clock, Target, Heart, Star } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { jornadas } from "@/data/jornadas"
import GeradorPrompts from "@/components/GeradorPrompts"
import Footer from "@/components/Footer"

export default function JornadaPage() {
  const params = useParams()
  const slug = params.slug as string
  const jornada = jornadas.find((j) => j.slug === slug)

  if (!jornada) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Jornada não encontrada</h1>
          <Link href="/#jornadas" className="text-purple-600 hover:text-purple-700">
            ← Voltar para jornadas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="relative pt-20">
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-b ${jornada.gradient} opacity-30`} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/20 via-blue-100/20 to-teal-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#jornadas"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para jornadas
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl sm:text-6xl">{jornada.icon}</span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm text-purple-700 text-xs font-medium rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {jornada.category}
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {jornada.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              {jornada.longDescription}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Target, label: "Objetivos", value: jornada.objectives.length },
              { icon: Star, label: "Níveis", value: jornada.levels.length },
              { icon: Heart, label: "Habilidades", value: jornada.skills.length },
              { icon: Clock, label: "Duração", value: "Livre" },
            ].map((item, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <item.icon className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              O que você pode <span className="text-gradient">desenvolver</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {jornada.skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Objetivos <span className="text-gradient-warm">possíveis</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {jornada.objectives.map((obj, index) => (
              <motion.div
                key={obj}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl mb-2">
                  {["🎯", "🌟", "💼", "🎨"][index]}
                </div>
                <h3 className="font-bold text-gray-900">{obj}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Níveis de <span className="text-gradient">evolução</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {jornada.levels.map((level, index) => (
              <motion.div
                key={level.name}
                className="relative bg-white rounded-2xl p-6 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color}`} />
                <div className="text-3xl mb-3">{level.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{level.name}</h3>
                <p className="text-sm text-gray-500">{level.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Galeria de <span className="text-gradient-warm">inspiração</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4 mb-16">
            {jornada.gallery.map((item, index) => (
              <motion.div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GeradorPrompts />
      <Footer />
    </main>
  )
}
