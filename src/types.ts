export interface Bilingual {
  en: string
  id: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: Bilingual
  period: string
  location: string
  bullets: Bilingual[]
  current?: boolean
}

export interface ProjectItem {
  id: string
  title: string
  year: number
  tags: string[]
  bullets: Bilingual[]
  image: string
  links: {
    github?: string
    demo?: string
    paper?: string
  }
  award?: string
}

export interface AwardItem {
  medal: 'gold' | 'silver' | 'bronze' | 'special'
  title: Bilingual
  event: string
  year: number
}

export interface SkillCategory {
  name: Bilingual
  skills: string[]
  color: string
}
