import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'Languages', id: 'Bahasa Pemrograman' },
    skills: ['Python', 'SQL', 'C++'],
    color: '#0A0A0A',
  },
  {
    name: { en: 'Frameworks & Libraries', id: 'Framework & Library' },
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'OpenCV', 'HuggingFace Transformers', 'LangChain', 'FastAPI'],
    color: '#262626',
  },
  {
    name: { en: 'AI / ML Specializations', id: 'Spesialisasi AI / ML' },
    skills: ['Computer Vision', 'NLP', 'RAG', 'Stable Diffusion', 'LoRA', 'LSTM', 'SNN', 'EEG Analysis'],
    color: '#525252',
  },
  {
    name: { en: 'Developer Tools', id: 'Developer Tools' },
    skills: ['Git', 'VS Code', 'Google Colab', 'Kaggle', 'REST API'],
    color: '#737373',
  },
  {
    name: { en: 'Soft Skills', id: 'Soft Skills' },
    skills: ['Problem Solving', 'Teamwork', 'Time Management', 'Research'],
    color: '#A3A3A3',
  },
]
