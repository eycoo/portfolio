import type { ProjectItem } from '../types'

export const projects: ProjectItem[] = [
  {
    id: 'tb-cough',
    title: 'TB Cough Detection System',
    year: 2025,
    tags: ['Deep Learning', 'LSTM', 'Audio Processing', 'Python'],
    award: '🥇 Gold Medal Gemastik XVIII',
    bullets: [
      {
        en: 'Winner of Gold Medal at Software Development Division Gemastik XVIII — developed a bio-acoustic diagnosis system to detect Tuberculosis from cough sounds.',
        id: 'Pemenang Medali Emas Divisi Pengembangan Perangkat Lunak Gemastik XVIII — mengembangkan sistem diagnosis bio-akustik untuk mendeteksi Tuberkulosis dari suara batuk.',
      },
      {
        en: 'Implemented a feature extraction pipeline using MFCCs and spectral features to capture distinct respiratory patterns.',
        id: 'Mengimplementasikan pipeline ekstraksi fitur menggunakan MFCC dan fitur spektral untuk menangkap pola pernapasan yang khas.',
      },
      {
        en: 'Designed and trained an LSTM network optimized for sequential audio data, achieving high sensitivity in distinguishing TB coughs from healthy subjects.',
        id: 'Merancang dan melatih jaringan LSTM yang dioptimalkan untuk data audio sekuensial, mencapai sensitivitas tinggi dalam membedakan batuk TB dari subjek sehat.',
      },
    ],
    image: '/portfolio/images/projects/tb-cough.jpg',
    links: {},
  },
  {
    id: 'chat-to-core',
    title: 'Chat to Core',
    year: 2026,
    tags: ['NLP', 'Computer Vision', 'RAG', 'System Design', 'WhatsApp'],
    bullets: [
      {
        en: 'Led a 4-person team to build a WhatsApp-based AI system converting unstructured UMKM transaction data into SAK EMKM-compliant financial reports, credit scores, and RAG-powered advisory.',
        id: 'Memimpin tim 4 orang untuk membangun sistem AI berbasis WhatsApp yang mengubah data transaksi UMKM tidak terstruktur menjadi laporan keuangan sesuai SAK EMKM, skor kredit, dan advisory berbasis RAG.',
      },
      {
        en: 'Designed a microservice architecture integrating IndoBERT for NER, Whisper for ASR, YOLOv8 Nano and PaddleOCR for receipt parsing, and Phi-3 Mini with pgvector for retrieval-augmented generation.',
        id: 'Merancang arsitektur microservice yang mengintegrasikan IndoBERT untuk NER, Whisper untuk ASR, YOLOv8 Nano dan PaddleOCR untuk parsing struk, serta Phi-3 Mini dengan pgvector untuk retrieval-augmented generation.',
      },
    ],
    image: '/portfolio/images/projects/chat-to-core.jpg',
    links: {},
  },
  {
    id: 'chest-xray',
    title: 'Medical Chest X-Ray Classification',
    year: 2026,
    tags: ['Computer Vision', 'Stable Diffusion', 'PyTorch', 'Medical AI'],
    bullets: [
      {
        en: 'Classified chest X-ray images into 6 categories by utilizing a frozen Stable Diffusion U-Net as a feature extractor, integrated with a Dual Feature Aggregation module.',
        id: 'Mengklasifikasikan gambar X-Ray dada ke dalam 6 kategori dengan memanfaatkan U-Net Stable Diffusion yang dibekukan sebagai ekstraktor fitur, terintegrasi dengan modul Dual Feature Aggregation.',
      },
    ],
    image: '/portfolio/images/projects/chest-xray.jpg',
    links: {},
  },
  {
    id: 'synthetic-data',
    title: 'Synthetic Data for Indonesian Ethnicities',
    year: 2025,
    tags: ['Stable Diffusion XL', 'LoRA', 'Data Augmentation', 'Computer Vision'],
    bullets: [
      {
        en: 'Engineered a data generation pipeline using Stable Diffusion XL to resolve severe class imbalance in Indonesian tribal datasets.',
        id: 'Mengembangkan pipeline generasi data menggunakan Stable Diffusion XL untuk mengatasi ketidakseimbangan kelas yang parah dalam dataset suku Indonesia.',
      },
      {
        en: 'Fine-tuned the model using Low-Rank Adaptation (LoRA) to synthesize high-fidelity images that preserve distinct ethnic facial features.',
        id: 'Melakukan fine-tuning model menggunakan Low-Rank Adaptation (LoRA) untuk menghasilkan gambar high-fidelity yang mempertahankan fitur wajah etnis yang khas.',
      },
      {
        en: 'Demonstrated that augmenting the training set improved external classifier (XGBoost/ViT) accuracy, proving the efficacy of synthetic data in low-resource scenarios.',
        id: 'Menunjukkan bahwa augmentasi dataset pelatihan meningkatkan akurasi classifier eksternal (XGBoost/ViT), membuktikan efektivitas data sintetis dalam skenario low-resource.',
      },
    ],
    image: '/portfolio/images/projects/synthetic-data.jpg',
    links: {},
  },
  {
    id: 'codesight',
    title: 'CodeSight',
    year: 2025,
    tags: ['Computer Vision', 'YOLOv8', 'OpenCV', 'Accessibility'],
    bullets: [
      {
        en: 'Built an accessible learning tool for visually impaired students that translates physical flowchart blocks into executable code via Computer Vision.',
        id: 'Membangun alat pembelajaran aksesibel untuk siswa tunanetra yang menerjemahkan blok flowchart fisik menjadi kode yang dapat dieksekusi melalui Computer Vision.',
      },
      {
        en: 'Deployed a custom-trained YOLO model for real-time object detection, handling variable lighting and block orientations.',
        id: 'Menerapkan model YOLO yang dilatih khusus untuk deteksi objek real-time, menangani pencahayaan bervariasi dan orientasi blok.',
      },
      {
        en: 'Enabled students to learn programming logic independently by providing immediate audio feedback on their physical code arrangements.',
        id: 'Memungkinkan siswa belajar logika pemrograman secara mandiri dengan memberikan feedback audio langsung pada susunan kode fisik mereka.',
      },
    ],
    image: '/portfolio/images/projects/codesight.jpg',
    links: {},
  },
  {
    id: 'cough-pose',
    title: 'Cough Pose Detection & DoA',
    year: 2025,
    tags: ['Computer Vision', 'Audio Processing', 'Direction of Arrival'],
    bullets: [
      {
        en: 'Built a validation system combining Direction of Arrival (DoA) audio tracking with visual Pose Detection.',
        id: 'Membangun sistem validasi yang menggabungkan pelacakan audio Direction of Arrival (DoA) dengan Deteksi Pose visual.',
      },
      {
        en: 'Designed the algorithm to pinpoint and verify the specific individual coughing within a crowded environment.',
        id: 'Merancang algoritma untuk menentukan dan memverifikasi individu spesifik yang batuk dalam lingkungan ramai.',
      },
    ],
    image: '/portfolio/images/projects/cough-pose.jpg',
    links: {},
  },
]
