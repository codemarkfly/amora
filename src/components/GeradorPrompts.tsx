"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Copy, RefreshCw, Check, ChevronDown } from "lucide-react"

interface PromptOption {
  label: string
  value: string
}

const niveis: PromptOption[] = [
  { label: "🌱 Descobrindo", value: "iniciante" },
  { label: "🌿 Praticando", value: "intermediario" },
  { label: "🌳 Criando", value: "avancado" },
  { label: "✨ Inspirando", value: "expert" },
]

const objetivos: PromptOption[] = [
  { label: "Hobby e diversão", value: "hobby" },
  { label: "Relaxamento", value: "relaxamento" },
  { label: "Desenvolvimento profissional", value: "profissional" },
  { label: "Expressão criativa", value: "criatividade" },
]

const tempos: PromptOption[] = [
  { label: "⏱️ 15 minutos/dia", value: "15min" },
  { label: "⏱️ 30 minutos/dia", value: "30min" },
  { label: "⏱️ 1 hora/dia", value: "1h" },
  { label: "⏱️ 2+ horas/dia", value: "2h" },
]

const faixasEtarias: PromptOption[] = [
  { label: "🧒 Crianças (7-12)", value: "crianca" },
  { label: "🧑 Adolescentes (13-17)", value: "adolescente" },
  { label: "👩 Adultos (18-40)", value: "adulto" },
  { label: "👴 Adultos 40+", value: "adulto+" },
]

const estilos: PromptOption[] = [
  { label: "🎯 Prático e direto", value: "pratico" },
  { label: "🎨 Criativo e aberto", value: "criativo" },
  { label: "📚 Estruturado e didático", value: "didatico" },
  { label: "🧘 Reflexivo e filosófico", value: "reflexivo" },
]

const ferramentas = [
  { nome: "ChatGPT", cor: "from-green-400 to-emerald-500", icone: "💬" },
  { nome: "Gemini", cor: "from-blue-400 to-indigo-500", icone: "🌟" },
  { nome: "Claude", cor: "from-amber-400 to-orange-500", icone: "🤖" },
  { nome: "Midjourney", cor: "from-purple-400 to-pink-500", icone: "🎨" },
]

function generatePrompt(nivel: string, objetivo: string, tempo: string, faixaEtaria: string, estilo: string) {
  const prompts: Record<string, string[]> = {
    chatgpt: [
      `Você é um mentor criativo especializado em desenvolvimento pessoal e aprendizado de habilidades. 

Meu nível atual é: ${nivel}
Meu objetivo é: ${objetivo}
Tenho disponível: ${tempo}
Minha faixa etária: ${faixaEtaria}
Prefiro um estilo: ${estilo}

Crie um plano de aprendizado personalizado para mim que inclua:

1. **Missão da Semana**: Um desafio prático e inspirador para começar
2. **Roteiro Diário**: Passos simples para cada dia, respeitando meu tempo disponível
3. **Exercício Criativo**: Uma atividade que estimule minha expressão pessoal
4. **Pergunta Reflexiva**: Algo para me fazer pensar sobre minha relação com esta habilidade
5. **Recurso Recomendado**: Um livro, vídeo, podcast ou ferramenta que possa me inspirar

Seja humano, motivador e prático. Use linguagem acolhedora e inspiradora. Lembre-se: o objetivo não é a perfeição, mas a jornada de descoberta.`,
    ],
    gemini: [
      `Atue como um guia de aprendizagem criativa e personalizada.

Perfil do aprendiz:
- Nível: ${nivel}
- Objetivo: ${objetivo}
- Tempo disponível: ${tempo}
- Faixa etária: ${faixaEtaria}
- Estilo preferido: ${estilo}

Com base neste perfil, gere:

📌 **Um projeto prático semanal** que a pessoa possa realizar com os recursos que tem em casa

📌 **3 micro-desafios diários** (cada um cabendo no tempo disponível)

📌 **Uma curadoria de inspiração**: 3 referências artísticas, técnicas ou filosóficas relacionadas a esta habilidade

📌 **Um exercício de criatividade** para conectar esta habilidade com outras áreas da vida

📌 **Uma mensagem motivacional** personalizada para começar hoje

Importante: cada recomendação deve considerar o nível atual e o objetivo declarado. A progressão deve ser natural e prazerosa.`,
    ],
    claude: [
      `You are a warm, insightful creative mentor helping someone discover and develop a new skill.

Learner Profile:
- Level: ${nivel}
- Goal: ${objetivo}
- Available time: ${tempo}
- Age group: ${faixaEtaria}
- Preferred style: ${estilo}

Please create a personalized learning journey that includes:

1. **A Weekly Creative Mission** — one inspiring, achievable project
2. **Daily Micro-Practices** — small actions (fitting their time budget) that build momentum
3. **A Reflection Prompt** — a question to deepen their connection with the practice
4. **A Breakthrough Challenge** — something slightly outside their comfort zone
5. **A Playful Experiment** — an exercise with no "right" outcome, just exploration

Tone: warm, encouraging, human. Avoid generic advice. Make it feel personal and alive.`,
    ],
    midjourney: [
      `/imagine prompt: A visual representation of a creative learning journey at ${nivel} level — artistic style, ${estilo} approach, showing growth and discovery — soft gradients, ethereal atmosphere, warm lighting, organic forms blending with technological elements — cinematic composition, dreamlike quality — inspired by nature meets future creativity — 8K resolution, emotional, inspiring, peaceful yet dynamic — aspect ratio 16:9 --ar 16:9 --v 6.0 --s 750

Alternative composition: A person surrounded by floating creative tools and glowing particles, representing the ${objetivo} goal — ${tempo} of daily practice visualized as light growing around them — fantasy realism, magical atmosphere, warm color palette — photorealistic face, abstract elements around — depth of field, volumetric lighting --ar 16:9 --v 6.0 --s 500`,
    ],
  }

  return prompts
}

type FerramentaKey = "chatgpt" | "gemini" | "claude" | "midjourney"

export default function GeradorPrompts() {
  const [selectedNivel, setSelectedNivel] = useState("iniciante")
  const [selectedObjetivo, setSelectedObjetivo] = useState("hobby")
  const [selectedTempo, setSelectedTempo] = useState("30min")
  const [selectedFaixa, setSelectedFaixa] = useState("adulto")
  const [selectedEstilo, setSelectedEstilo] = useState("criativo")
  const [generated, setGenerated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [prompts, setPrompts] = useState<Record<FerramentaKey, string[]> | null>(null)

  const handleGenerate = () => {
    setIsLoading(true)
    setGenerated(false)

    setTimeout(() => {
      const result = generatePrompt(selectedNivel, selectedObjetivo, selectedTempo, selectedFaixa, selectedEstilo) as Record<FerramentaKey, string[]>
      setPrompts(result)
      setGenerated(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    }
  }

  const SelectGroup = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string
    options: PromptOption[]
    value: string
    onChange: (v: string) => void
  }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300 transition-all cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  )

  return (
    <section id="gerador-ia" className="relative py-24 sm:py-32 bg-white/30">
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
            Gerador de Prompts IA
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seu mentor{" "}
            <span className="text-gradient">inteligente</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Responda algumas perguntas e receba prompts personalizados para ChatGPT, Gemini, Claude e Midjourney.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <SelectGroup label="Nível" options={niveis} value={selectedNivel} onChange={setSelectedNivel} />
              <SelectGroup label="Objetivo" options={objetivos} value={selectedObjetivo} onChange={setSelectedObjetivo} />
              <SelectGroup label="Tempo disponível" options={tempos} value={selectedTempo} onChange={setSelectedTempo} />
              <SelectGroup label="Faixa etária" options={faixasEtarias} value={selectedFaixa} onChange={setSelectedFaixa} />
              <SelectGroup label="Estilo" options={estilos} value={selectedEstilo} onChange={setSelectedEstilo} />
            </div>

            <motion.button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-medium rounded-2xl shadow-lg shadow-purple-200/50 hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Gerando prompts...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Gerar Prompts Personalizados
                </span>
              )}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto mt-12"
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 animate-pulse" />
                    <Sparkles className="w-6 h-6 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="space-y-3 w-full max-w-md">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-full animate-shimmer" style={{ backgroundSize: "200% 100%", width: `${70 + i * 10}%`, marginLeft: `${i * 5}%` }} />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">Criando seus prompts personalizados...</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {generated && prompts && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-5xl mx-auto mt-16"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  <span className="text-gradient">Seus prompts</span> estão prontos
                </h3>
                <p className="text-gray-500">Copie e cole na ferramenta desejada para começar sua jornada.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(Object.entries(prompts) as [FerramentaKey, string[]][]).map(([key, promptList], groupIndex) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.1 }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-4 bg-gradient-to-r ${ferramentas.find(f => f.nome.toLowerCase() === key)?.cor || "from-purple-400 to-pink-400"} flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{ferramentas.find(f => f.nome.toLowerCase() === key)?.icone}</span>
                        <span className="text-white font-bold">{ferramentas.find(f => f.nome.toLowerCase() === key)?.nome || key}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(promptList[0], groupIndex)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-lg hover:bg-white/30 transition-all"
                      >
                        {copiedIndex === groupIndex ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-4 max-h-60 overflow-y-auto">
                      <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
                        {promptList[0]}
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={handleGenerate}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:shadow-md transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Gerar Novamente
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
