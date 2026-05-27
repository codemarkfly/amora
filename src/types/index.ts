export interface Jornada {
  id: string
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  gradient: string
  icon: string
  skills: string[]
  objectives: string[]
  levels: Nivel[]
  gallery: string[]
}

export interface Nivel {
  name: string
  emoji: string
  description: string
  color: string
}

export interface PromptFormData {
  nivel: string
  objetivo: string
  tempo: string
  faixaEtaria: string
  estilo: string
}

export interface PromptResult {
  ferramenta: string
  prompt: string
}
