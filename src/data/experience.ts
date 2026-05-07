import type { ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    id: 'mengasihi',
    company: 'MengAsihi RAG Based AI Chatbot',
    role: { en: 'Freelance AI Engineer', id: 'AI Engineer Freelance' },
    period: 'May 2026 to Present',
    location: 'Surabaya, Indonesia',
    current: true,
    bullets: [
      {
        en: 'Designing a Retrieval Augmented Generation (RAG) pipeline for a breastfeeding guidance chatbot, with tech stack selection covering LLM, vector database, and retrieval strategy for a sensitive health domain.',
        id: 'Merancang pipeline Retrieval Augmented Generation (RAG) untuk chatbot panduan menyusui, mencakup pemilihan LLM, vector database, dan strategi retrieval untuk domain kesehatan sensitif.',
      },
      {
        en: 'Architecting a microservice backend with REST API and native Android frontend, focused on low inference latency and response guardrails to mitigate hallucination risks.',
        id: 'Merancang arsitektur microservice backend dengan REST API dan frontend Android native, berfokus pada latensi inferensi rendah dan guardrail respons untuk mengurangi risiko halusinasi.',
      },
    ],
  },
  {
    id: 'avalon',
    company: 'Avalon AI Corporation',
    role: { en: 'AI Research Assistant', id: 'Asisten Peneliti AI' },
    period: 'Apr 2026 to Present',
    location: 'Surabaya, Indonesia',
    current: true,
    bullets: [
      {
        en: 'Conducting proprietary foundational model research under NDA, focusing on neuromorphic vision and spike based image classification using Izhikevich neuron dynamics and temporal encoding schemes.',
        id: 'Melakukan penelitian foundational model proprietary di bawah NDA, berfokus pada neuromorphic vision dan klasifikasi gambar berbasis spike menggunakan dinamika neuron Izhikevich dan skema temporal encoding.',
      },
      {
        en: 'Implemented a custom SNN training pipeline from scratch in pure PyTorch, including custom layers, surrogate gradient functions, and temporal encoders, without reliance on existing SNN frameworks.',
        id: 'Mengimplementasikan pipeline training SNN kustom dari nol menggunakan PyTorch murni, termasuk custom layer, fungsi surrogate gradient, dan temporal encoder, tanpa bergantung pada framework SNN yang ada.',
      },
    ],
  },
  {
    id: 'schematics',
    company: 'Schematics ITS',
    role: { en: 'Expert Staff, Data Science Sub Division', id: 'Staf Ahli, Sub Divisi Data Science' },
    period: 'Feb 2026 to Present',
    location: 'Surabaya, Indonesia',
    current: true,
    bullets: [
      {
        en: 'Pioneered the technical foundation of Schematics newly established Data Science competition division, contributing as one of the first expert staff to define its structure and standards.',
        id: 'Memelopori fondasi teknis divisi kompetisi Data Science Schematics yang baru dibentuk, berkontribusi sebagai salah satu staf ahli pertama dalam mendefinisikan struktur dan standarnya.',
      },
      {
        en: 'Conducted technical review and validation of competition datasets to ensure data quality, integrity, and suitability for competitive use.',
        id: 'Melakukan review teknis dan validasi dataset kompetisi untuk memastikan kualitas data, integritas, dan kesesuaian untuk penggunaan kompetitif.',
      },
    ],
  },
  {
    id: 'innovillage',
    company: 'Innovillage',
    role: { en: 'AI Engineer', id: 'AI Engineer' },
    period: 'Jan 2026 to Present',
    location: 'Sidoarjo, Indonesia',
    current: true,
    bullets: [
      {
        en: 'Secured funding to develop a digital village solution focused on optimizing Tilapia farming.',
        id: 'Mendapatkan pendanaan untuk mengembangkan solusi desa digital yang berfokus pada optimasi budidaya ikan Nila.',
      },
      {
        en: 'Engineered a Computer Vision model using Custom CNNs with CBAM attention modules to detect fish diseases and classify health status.',
        id: 'Mengembangkan model Computer Vision menggunakan Custom CNN dengan modul attention CBAM untuk mendeteksi penyakit ikan dan mengklasifikasikan status kesehatan.',
      },
    ],
  },
  {
    id: 'pskatd',
    company: 'Pusat Studi Kecerdasan Artifisial dan Teknologi Digital',
    role: { en: 'AI Research Intern', id: 'Magang Penelitian AI' },
    period: 'Jan 2026 to Feb 2026',
    location: 'Surabaya, Indonesia',
    bullets: [
      {
        en: 'Developed an EEG signal analysis pipeline to classify ALS vs Normal subjects across 1,809 EDF recordings (6 ALS, 150 Normal subjects) with 9 task scenarios.',
        id: 'Mengembangkan pipeline analisis sinyal EEG untuk mengklasifikasikan subjek ALS vs Normal dari 1.809 rekaman EDF (6 subjek ALS, 150 Normal) dengan 9 skenario tugas.',
      },
      {
        en: 'Engineered a chunking and chain encoding pipeline extracting time domain features (MAV, Variance, STD) per subband (Delta, Theta, Alpha, Beta, Gamma) from segmented EEG tasks (Resting, Thinking, Typing).',
        id: 'Mengembangkan pipeline chunking dan chain encoding yang mengekstrak fitur domain waktu (MAV, Variance, STD) per subband (Delta, Theta, Alpha, Beta, Gamma) dari segmen tugas EEG (Istirahat, Berpikir, Mengetik).',
      },
    ],
  },
  {
    id: 'rextra',
    company: 'REXTRA',
    role: { en: 'AI Engineer', id: 'AI Engineer' },
    period: 'Aug 2025 to Feb 2026',
    location: 'Surabaya, Indonesia',
    bullets: [
      {
        en: 'Maintained and optimized REST API integration for LLM inference calls, ensuring reliable communication between the backend service and external model providers.',
        id: 'Memelihara dan mengoptimalkan integrasi REST API untuk panggilan inferensi LLM, memastikan komunikasi yang andal antara layanan backend dan penyedia model eksternal.',
      },
      {
        en: 'Monitored API response handling, error management, and latency to maintain system reliability.',
        id: 'Memantau penanganan respons API, manajemen error, dan latensi untuk menjaga keandalan sistem.',
      },
    ],
  },
  {
    id: 'its-challenge',
    company: 'ITS Challenge',
    role: { en: 'Staff, Data Center', id: 'Staf, Data Center' },
    period: 'Jun 2025 to Sep 2025',
    location: 'Surabaya, Indonesia',
    bullets: [
      {
        en: 'Managed collection, validation, and integrity of participant databases for university events.',
        id: 'Mengelola pengumpulan, validasi, dan integritas database peserta untuk acara universitas.',
      },
      {
        en: 'Optimized data workflows using spreadsheet tools to ensure efficient information retrieval.',
        id: 'Mengoptimalkan alur kerja data menggunakan spreadsheet untuk memastikan pengambilan informasi yang efisien.',
      },
    ],
  },
  {
    id: 'inclenation',
    company: 'INCLENATION',
    role: { en: 'Staff, Data Management', id: 'Staf, Manajemen Data' },
    period: 'Jun 2025 to Aug 2025',
    location: 'Surabaya, Indonesia',
    bullets: [
      {
        en: 'Managed collection, validation, and integrity of participant databases for university events.',
        id: 'Mengelola pengumpulan, validasi, dan integritas database peserta untuk acara universitas.',
      },
      {
        en: 'Optimized data workflows using spreadsheet tools to ensure efficient information retrieval.',
        id: 'Mengoptimalkan alur kerja data menggunakan spreadsheet untuk memastikan pengambilan informasi yang efisien.',
      },
    ],
  },
]
