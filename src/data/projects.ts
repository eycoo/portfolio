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
        en: 'Winner of Gold Medal at Software Development Division Gemastik XVIII. Developed a bio acoustic diagnosis system to detect Tuberculosis from cough sounds.',
        id: 'Pemenang Medali Emas Divisi Pengembangan Perangkat Lunak Gemastik XVIII. Mengembangkan sistem diagnosis bio akustik untuk mendeteksi Tuberkulosis dari suara batuk.',
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
    links: { github: 'https://github.com/eycoo/TB-model-v2' },
  },
  {
    id: 'chat-to-core',
    title: 'Chat to Core',
    year: 2026,
    tags: ['NLP', 'Computer Vision', 'RAG', 'System Design', 'WhatsApp'],
    bullets: [
      {
        en: 'Led a 4 person team to build a WhatsApp based AI system converting unstructured UMKM transaction data into SAK EMKM compliant financial reports, credit scores, and RAG powered advisory.',
        id: 'Memimpin tim 4 orang untuk membangun sistem AI berbasis WhatsApp yang mengubah data transaksi UMKM tidak terstruktur menjadi laporan keuangan sesuai SAK EMKM, skor kredit, dan advisory berbasis RAG.',
      },
      {
        en: 'Designed a microservice architecture integrating IndoBERT for NER, Whisper for ASR, YOLOv8 Nano and PaddleOCR for receipt parsing, and Phi 3 Mini with pgvector for retrieval augmented generation.',
        id: 'Merancang arsitektur microservice yang mengintegrasikan IndoBERT untuk NER, Whisper untuk ASR, YOLOv8 Nano dan PaddleOCR untuk parsing struk, serta Phi 3 Mini dengan pgvector untuk retrieval augmented generation.',
      },
    ],
    image: '/portfolio/images/projects/chat-to-core.jpg',
    links: { github: 'https://github.com/eycoo/FinVibe-prototype' },
  },
  {
    id: 'chest-xray',
    title: 'Medical Chest X-Ray Classification via Stable Diffusion',
    year: 2026,
    tags: ['Computer Vision', 'Stable Diffusion', 'PyTorch', 'Medical AI'],
    bullets: [
      {
        en: 'Classified chest X ray images into 6 categories by utilizing a frozen Stable Diffusion U Net as a feature extractor, integrated with a Dual Feature Aggregation module.',
        id: 'Mengklasifikasikan gambar X Ray dada ke dalam 6 kategori dengan memanfaatkan U Net Stable Diffusion yang dibekukan sebagai ekstraktor fitur, terintegrasi dengan modul Dual Feature Aggregation.',
      },
      {
        en: 'Outperformed DINOv2, MaxViT, and ConvNeXtV2 baselines across 4 experimental scenarios. Best F1 Macro 45.17% and AUC OVR 77.47% on balanced data with feature space augmentation.',
        id: 'Mengungguli baseline DINOv2, MaxViT, dan ConvNeXtV2 di 4 skenario eksperimen. F1 Macro terbaik 45.17% dan AUC OVR 77.47% pada data seimbang dengan augmentasi feature space.',
      },
    ],
    image: '/portfolio/images/projects/chest-xray.jpg',
    links: { github: 'https://github.com/eycoo/ChestX-Ray' },
  },
  {
    id: 'audio-classification',
    title: 'Sequential vs Frequency Approach on Audio Classification',
    year: 2025,
    tags: ['HMM', 'Naive Bayes', 'Audio Processing', 'MFCC'],
    bullets: [
      {
        en: 'Analyzed the effectiveness of sequential (HMM) vs frequency based (Multinomial Naive Bayes) approaches for audio sound classification using MFCC feature extraction and Vector Quantization via K Means clustering.',
        id: 'Menganalisis efektivitas pendekatan sekuensial (HMM) vs berbasis frekuensi (Multinomial Naive Bayes) untuk klasifikasi suara audio menggunakan ekstraksi fitur MFCC dan Vector Quantization via K Means clustering.',
      },
      {
        en: 'Evaluated both models across 3 scenarios: codebook size sensitivity, training data size impact, and audio duration robustness. Naive Bayes achieved up to 90% accuracy and 95% precision at full training data.',
        id: 'Mengevaluasi kedua model di 3 skenario: sensitivitas ukuran codebook, dampak ukuran data training, dan robustness durasi audio. Naive Bayes mencapai akurasi 90% dan presisi 95% pada data training penuh.',
      },
      {
        en: 'Demonstrated that Naive Bayes consistently outperformed HMM in frequency dominant tasks, while HMM showed competitive performance at smaller codebook sizes (85% accuracy at 32 clusters).',
        id: 'Menunjukkan bahwa Naive Bayes secara konsisten mengungguli HMM pada tugas dominan frekuensi, sementara HMM menunjukkan performa kompetitif pada ukuran codebook kecil (85% akurasi pada 32 cluster).',
      },
    ],
    image: '/portfolio/images/projects/audio-classification.jpg',
    links: { github: 'https://github.com/eycoo/Final-Project-Kecerdasan-Komputasional' },
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
        en: 'Fine tuned the model using Low Rank Adaptation (LoRA) to synthesize high fidelity images that preserve distinct ethnic facial features.',
        id: 'Melakukan fine tuning model menggunakan Low Rank Adaptation (LoRA) untuk menghasilkan gambar high fidelity yang mempertahankan fitur wajah etnis yang khas.',
      },
      {
        en: 'Demonstrated that augmenting the training set improved external classifier (XGBoost/ViT) accuracy, proving the efficacy of synthetic data in low resource scenarios.',
        id: 'Menunjukkan bahwa augmentasi dataset pelatihan meningkatkan akurasi classifier eksternal (XGBoost/ViT), membuktikan efektivitas data sintetis dalam skenario low resource.',
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
        en: 'Deployed a custom trained YOLO model for real time object detection, handling variable lighting and block orientations.',
        id: 'Menerapkan model YOLO yang dilatih khusus untuk deteksi objek real time, menangani pencahayaan bervariasi dan orientasi blok.',
      },
      {
        en: 'Enabled students to learn programming logic independently by providing immediate audio feedback on their physical code arrangements.',
        id: 'Memungkinkan siswa belajar logika pemrograman secara mandiri dengan memberikan feedback audio langsung pada susunan kode fisik mereka.',
      },
    ],
    image: '/portfolio/images/projects/codesight.jpg',
    links: { github: 'https://github.com/eycoo/Object-Detection-for-Visually-Impaired-Education' },
  },
  {
    id: 'cough-pose',
    title: 'Cough Pose Detection and DoA',
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
