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
        en: 'Designing a RAG pipeline for a breastfeeding guidance chatbot, including selection of LLM, vector database, and retrieval strategy suitable for a health sensitive domain.',
        id: 'Merancang pipeline RAG untuk chatbot panduan menyusui, mencakup pemilihan LLM, vector database, dan strategi retrieval yang sesuai untuk domain kesehatan sensitif.',
      },
      {
        en: 'Planning a microservice backend with REST API and native Android frontend, with attention to inference latency and response guardrails to reduce hallucination risks.',
        id: 'Merancang microservice backend dengan REST API dan frontend Android native, dengan perhatian pada latensi inferensi dan guardrail respons untuk mengurangi risiko halusinasi.',
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
        en: 'Working on proprietary foundational model research under NDA, in the area of neuromorphic vision and spike based image classification using Izhikevich neuron dynamics and temporal encoding.',
        id: 'Mengerjakan riset foundational model proprietary di bawah NDA, di bidang neuromorphic vision dan klasifikasi gambar berbasis spike menggunakan dinamika neuron Izhikevich dan temporal encoding.',
      },
      {
        en: 'Built a custom SNN training pipeline in pure PyTorch, including custom layers, surrogate gradient functions, and temporal encoders, without using existing SNN frameworks.',
        id: 'Membangun pipeline training SNN kustom menggunakan PyTorch murni, termasuk custom layer, fungsi surrogate gradient, dan temporal encoder, tanpa menggunakan framework SNN yang ada.',
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
        en: 'Joined as early staff in Schematics newly formed Data Science competition division, helping define the technical structure and standards of the division.',
        id: 'Bergabung sebagai staf awal di divisi kompetisi Data Science Schematics yang baru dibentuk, membantu mendefinisikan struktur teknis dan standar divisi.',
      },
      {
        en: 'Reviewed and validated competition datasets to check data quality, integrity, and suitability for use in a competitive setting.',
        id: 'Mereview dan memvalidasi dataset kompetisi untuk memeriksa kualitas data, integritas, dan kesesuaian penggunaan dalam konteks kompetitif.',
      },
    ],
  },
  {
    id: 'innovillage',
    company: 'Innovillage',
    role: { en: 'AI Engineer', id: 'AI Engineer' },
    period: 'Jan 2026 to Apr 2026',
    location: 'Sidoarjo, Indonesia',
    bullets: [
      {
        en: 'Received funding to build a digital village solution for optimizing Tilapia fish farming.',
        id: 'Mendapatkan pendanaan untuk membangun solusi desa digital untuk mengoptimalkan budidaya ikan Nila.',
      },
      {
        en: 'Built a Computer Vision model using Custom CNNs with CBAM attention modules to detect fish diseases and classify fish health status.',
        id: 'Membangun model Computer Vision menggunakan Custom CNN dengan modul attention CBAM untuk mendeteksi penyakit ikan dan mengklasifikasikan status kesehatan ikan.',
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
        en: 'Built an EEG signal analysis pipeline to classify ALS vs Normal subjects from 1,809 EDF recordings (6 ALS, 150 Normal subjects) across 9 task scenarios.',
        id: 'Membangun pipeline analisis sinyal EEG untuk mengklasifikasikan subjek ALS vs Normal dari 1.809 rekaman EDF (6 ALS, 150 subjek Normal) di 9 skenario tugas.',
      },
      {
        en: 'Built a chunking and feature extraction pipeline computing time domain features (MAV, Variance, STD) per subband (Delta, Theta, Alpha, Beta, Gamma) from segmented EEG tasks (Resting, Thinking, Typing).',
        id: 'Membangun pipeline chunking dan ekstraksi fitur yang menghitung fitur domain waktu (MAV, Variance, STD) per subband (Delta, Theta, Alpha, Beta, Gamma) dari segmen tugas EEG (Istirahat, Berpikir, Mengetik).',
      },
    ],
  },
  {
    id: 'rextra',
    company: 'REXTRA',
    role: { en: 'Backend AI Engineer', id: 'Backend AI Engineer' },
    period: 'Aug 2025 to Feb 2026',
    location: 'Surabaya, Indonesia',
    bullets: [
      {
        en: 'Maintained REST API integration for LLM inference calls, handling communication between the backend service and external model providers.',
        id: 'Memelihara integrasi REST API untuk panggilan inferensi LLM, menangani komunikasi antara layanan backend dan penyedia model eksternal.',
      },
      {
        en: 'Monitored API response handling, error management, and request latency to keep LLM powered features running reliably.',
        id: 'Memantau penanganan respons API, manajemen error, dan latensi request untuk menjaga fitur berbasis LLM berjalan dengan andal.',
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
        en: 'Managed collection, validation, and integrity of participant databases for university scale events.',
        id: 'Mengelola pengumpulan, validasi, dan integritas database peserta untuk acara skala universitas.',
      },
      {
        en: 'Organized data workflows using spreadsheets to support efficient information retrieval.',
        id: 'Mengorganisir alur kerja data menggunakan spreadsheet untuk mendukung pengambilan informasi yang efisien.',
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
        en: 'Managed collection, validation, and integrity of participant databases for university scale events.',
        id: 'Mengelola pengumpulan, validasi, dan integritas database peserta untuk acara skala universitas.',
      },
      {
        en: 'Organized data workflows using spreadsheets to support efficient information retrieval.',
        id: 'Mengorganisir alur kerja data menggunakan spreadsheet untuk mendukung pengambilan informasi yang efisien.',
      },
    ],
  },
]
