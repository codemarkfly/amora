"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Jornada } from "@/types"

interface JourneyCardProps {
  jornada: Jornada
  index: number
}

export default function JourneyCard({ jornada, index }: JourneyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/jornada/${jornada.slug}`}>
        <motion.div
          className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
          whileHover={{ y: -4 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${jornada.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="relative p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl sm:text-4xl">{jornada.icon}</div>
              <motion.div
                className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
              >
                <ArrowRight className="w-4 h-4 text-purple-600" />
              </motion.div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
              {jornada.title}
            </h3>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
              {jornada.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                <Sparkles className="w-3 h-3" />
                {jornada.category}
              </span>

              <div className="flex items-center gap-1">
                {jornada.levels.map((level, i) => (
                  <span key={i} className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    {level.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-transparent group-hover:from-purple-500 group-hover:via-blue-400 group-hover:to-teal-300 transition-all duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
