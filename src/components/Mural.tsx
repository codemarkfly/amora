"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, MessageCircle, Share2 } from "lucide-react"

const posts = [
  { id: 1, autor: "Ana Clara", avatar: "🎨", texto: "Completei meu primeiro quadro a óleo! A jornada de pintura me ajudou a encontrar uma nova forma de expressão.", cor: "from-violet-500 to-fuchsia-500", reacoes: 24, comentarios: 8, nivel: "🌳 Criando" },
  { id: 2, autor: "Lucas Mendes", avatar: "🎹", texto: "Consegui tocar minha primeira música completa no piano. Cada dia de prática valeu a pena!", cor: "from-blue-500 to-indigo-500", reacoes: 31, comentarios: 12, nivel: "🌿 Praticando" },
  { id: 3, autor: "Carla Souza", avatar: "📷", texto: "Meu ensaio fotográfico sobre luz natural ficou lindo! Obrigada AMORA pelas dicas.", cor: "from-amber-500 to-orange-500", reacoes: 18, comentarios: 5, nivel: "✨ Inspirando" },
  { id: 4, autor: "Rafael Oliveira", avatar: "🧶", texto: "Nunca imaginei que conseguiria fazer um cachecol inteiro de crochê. Estou tão orgulhosa!", cor: "from-pink-500 to-rose-500", reacoes: 15, comentarios: 6, nivel: "🌱 Descobrindo" },
  { id: 5, autor: "Juliana Costa", avatar: "🤖", texto: "Usei IA para criar uma série de ilustrações para meu livro infantil. Tecnologia e criatividade se encontrando!", cor: "from-purple-500 to-pink-500", reacoes: 42, comentarios: 15, nivel: "🌳 Criando" },
  { id: 6, autor: "Pedro Santos", avatar: "🏐", texto: "Meu time ganhou o campeonato amador! A jornada de vôlei me ensinou muito sobre trabalho em equipe.", cor: "from-cyan-500 to-blue-500", reacoes: 27, comentarios: 9, nivel: "🌿 Praticando" },
  { id: 7, autor: "Marina Lima", avatar: "🍳", texto: "Fiz meu primeiro jantar completo para a família! Cada receita foi uma descoberta.", cor: "from-red-500 to-rose-500", reacoes: 33, comentarios: 11, nivel: "🌱 Descobrindo" },
  { id: 8, autor: "Thiago Alves", avatar: "✏️", texto: "Meu retrato realista em carvão ficou melhor do que eu esperava. A prática realmente faz a diferença!", cor: "from-gray-500 to-slate-500", reacoes: 21, comentarios: 7, nivel: "🌳 Criando" },
  { id: 9, autor: "Larissa Franco", avatar: "🧘", texto: "30 dias de alongamento diário transformaram minha postura e minha relação com meu corpo.", cor: "from-emerald-500 to-teal-500", reacoes: 39, comentarios: 14, nivel: "✨ Inspirando" },
]

export default function Mural() {
  return (
    <section id="comunidade" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 text-sm font-medium rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Mural da Comunidade
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Evoluções que{" "}
            <span className="text-gradient-warm">inspiram</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Veja o que outras pessoas estão criando e compartilhe sua própria evolução.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${index === 0 ? "sm:col-span-2 sm:row-span-1" : ""} ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className={`h-2 bg-gradient-to-r ${post.cor}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl sm:text-3xl">{post.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900">{post.autor}</p>
                    <span className="text-xs text-gray-400">{post.nivel}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {post.texto}
                </p>

                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.reacoes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comentarios}</span>
                    </button>
                  </div>
                  <button className="flex items-center gap-1.5 hover:text-purple-500 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
