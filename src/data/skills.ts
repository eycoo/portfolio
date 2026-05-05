import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'Languages', id: 'Bahasa Pemrograman' },
    skills: ['Python', 'SQL', 'C++'],
    color: '#FF6B6B',
  },
  {
    name: { en: 'Frameworks & Libraries', id: 'Framework & Library' },
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'OpenCV', 'HuggingFace', 'LangChain'],
    color: '#4D96FF',
  },
  {
    name: { en: 'AI / ML Specializations', id: 'Spesialisasi AI / ML' },
    skills: ['Computer Vision', 'NLP', 'RAG', 'Stable Diffusion', 'LoRA', 'LSTM', 'CNN'],
    color: '#6BCB77',
  },
  {
    name: { en: 'Developer Tools', id: 'Developer Tools' },
    skills: ['Git', 'VS Code', 'Google Colab', 'Docker', 'REST API'],
    color: '#FFD93D',
  },
  {
    name: { en: 'Soft Skills', id: 'Soft Skills' },
    skills: ['Problem Solving', 'Teamwork', 'Time Management', 'Research'],
    color: '#C77DFF',
  },
]
