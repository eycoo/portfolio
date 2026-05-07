import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'Languages', id: 'Bahasa Pemrograman' },
    skills: ['Python', 'SQL', 'C++'],
    color: '#6366F1',
  },
  {
    name: { en: 'Frameworks & Libraries', id: 'Framework & Library' },
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'OpenCV', 'HuggingFace Transformers', 'LangChain', 'FastAPI'],
    color: '#8B5CF6',
  },
  {
    name: { en: 'AI / ML Specializations', id: 'Spesialisasi AI / ML' },
    skills: ['Computer Vision', 'NLP', 'RAG', 'Stable Diffusion', 'LoRA', 'LSTM', 'SNN', 'EEG Analysis'],
    color: '#EC4899',
  },
  {
    name: { en: 'Developer Tools', id: 'Developer Tools' },
    skills: ['Git', 'VS Code', 'Google Colab', 'Kaggle', 'REST API'],
    color: '#06B6D4',
  },
  {
    name: { en: 'Soft Skills', id: 'Soft Skills' },
    skills: ['Problem Solving', 'Teamwork', 'Time Management', 'Research'],
    color: '#10B981',
  },
]
