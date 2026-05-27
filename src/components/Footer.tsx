"use client"

import { motion } from "framer-motion"
import { Moon, Heart, Instagram, Youtube, Twitter, Github, Mail } from "lucide-react"

const footerLinks = {
  explorar: [
    { name: "Jornadas", href: "#jornadas" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Gerador IA", href: "#gerador-ia" },
    { name: "Comunidade", href: "#comunidade" },
    { name: "Manifesto", href: "#manifesto" },
  ],
  jornadas: [
    { name: "Arte", href: "#" },
    { name: "Música", href: "#" },
    { name: "Movimento", href: "#" },
    { name: "Criação Manual", href: "#" },
    { name: "Tecnologia Criativa", href: "#" },
  ],
  empresa: [
    { name: "Sobre", href: "#" },
    { name: "Filosofia", href: "#manifesto" },
    { name: "Contato", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Blog", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 rounded-xl rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  AMORA
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                A AMORA conecta criatividade, aprendizado e IA para ajudar pessoas
                a desenvolverem novas habilidades no seu próprio ritmo.
              </p>

              <div className="flex items-center gap-3">
                {[Instagram, Youtube, Twitter, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Explorar</h3>
            <ul className="space-y-3">
              {footerLinks.explorar.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Jornadas</h3>
            <ul className="space-y-3">
              {footerLinks.jornadas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">AMORA</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AMORA. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Termos</a>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-3.5 h-3.5 text-pink-400" /> e IA
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
