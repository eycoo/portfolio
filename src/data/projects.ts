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
        en: 'Gold Medal, Software Development Division at Gemastik XVIII. Built an audio based diagnosis system to detect Tuberculosis from cough recordings.',
        id: 'Medali Emas, Divisi Pengembangan Perangkat Lunak di Gemastik XVIII. Membangun sistem diagnosis berbasis audio untuk mendeteksi Tuberkulosis dari rekaman batuk.',
      },
      {
        en: 'Extracted features using MFCCs and spectral descriptors to capture patterns in respiratory audio.',
        id: 'Mengekstrak fitur menggunakan MFCC dan deskriptor spektral untuk menangkap pola dalam audio pernapasan.',
      },
      {
        en: 'Trained an LSTM network on sequential audio data, with results showing good sensitivity in separating TB coughs from healthy subjects.',
        id: 'Melatih jaringan LSTM pada data audio sekuensial, dengan hasil menunjukkan sensitivitas yang baik dalam memisahkan batuk TB dari subjek sehat.',
      },
    ],
    image: '/portfolio/images/projects/tb-cough.jpg',
    links: { github: 'https://github.com/eycoo/TB-model-v2' },
  },
  {
    id: 'finvibe',
    title: 'FinVibe',
    year: 2026,
    tags: ['NLP', 'Computer Vision', 'RAG', 'System Design', 'WhatsApp'],
    bullets: [
      {
        en: 'Led a 4 person team building a WhatsApp based AI system that converts unstructured UMKM transaction data into SAK EMKM compliant financial reports, credit scores, and RAG based advisory.',
        id: 'Memimpin tim 4 orang membangun sistem AI berbasis WhatsApp yang mengubah data transaksi UMKM tidak terstruktur menjadi laporan keuangan sesuai SAK EMKM, skor kredit, dan advisory berbasis RAG.',
      },
      {
        en: 'Designed a microservice architecture using IndoBERT for NER, Whisper for ASR, YOLOv8 Nano and PaddleOCR for receipt parsing, and Phi 3 Mini with pgvector for retrieval augmented generation.',
        id: 'Merancang arsitektur microservice menggunakan IndoBERT untuk NER, Whisper untuk ASR, YOLOv8 Nano dan PaddleOCR untuk parsing struk, serta Phi 3 Mini dengan pgvector untuk retrieval augmented generation.',
      },
    ],
    image: '/portfolio/images/projects/finvibe.jpg',
    links: { github: 'https://github.com/eycoo/FinVibe-prototype' },
  },
  {
    id: 'chest-xray',
    title: 'Medical Chest X-Ray Classification via Stable Diffusion',
    year: 2026,
    tags: ['Computer Vision', 'Stable Diffusion', 'PyTorch', 'Medical AI'],
    bullets: [
      {
        en: 'Classified chest X ray images into 6 categories using a frozen Stable Diffusion U Net as a feature extractor, combined with a Dual Feature Aggregation module.',
        id: 'Mengklasifikasikan gambar X Ray dada ke dalam 6 kategori menggunakan U Net Stable Diffusion yang dibekukan sebagai ekstraktor fitur, dikombinasikan dengan modul Dual Feature Aggregation.',
      },
      {
        en: 'Outperformed DINOv2, MaxViT, and ConvNeXtV2 baselines across 4 scenarios. Best results: F1 Macro 45.17% and AUC OVR 77.47% on balanced data with feature space augmentation, and F1 Macro 38.55% on imbalanced data without augmentation.',
        id: 'Mengungguli baseline DINOv2, MaxViT, dan ConvNeXtV2 di 4 skenario. Hasil terbaik: F1 Macro 45.17% dan AUC OVR 77.47% pada data seimbang dengan augmentasi feature space, dan F1 Macro 38.55% pada data tidak seimbang tanpa augmentasi.',
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
        en: 'Compared sequential (HMM) and frequency based (Multinomial Naive Bayes) approaches for audio classification using MFCC feature extraction and K Means based Vector Quantization.',
        id: 'Membandingkan pendekatan sekuensial (HMM) dan berbasis frekuensi (Multinomial Naive Bayes) untuk klasifikasi audio menggunakan ekstraksi fitur MFCC dan Vector Quantization berbasis K Means.',
      },
      {
        en: 'Tested both models across 3 scenarios: codebook size, training data size, and audio duration. Naive Bayes reached up to 90% accuracy and 95% precision at full training data.',
        id: 'Menguji kedua model di 3 skenario: ukuran codebook, ukuran data training, dan durasi audio. Naive Bayes mencapai akurasi 90% dan presisi 95% pada data training penuh.',
      },
      {
        en: 'Found that Naive Bayes performed better on frequency dominant tasks, while HMM was more competitive at smaller codebook sizes (85% accuracy at 32 clusters).',
        id: 'Menemukan bahwa Naive Bayes lebih baik pada tugas dominan frekuensi, sementara HMM lebih kompetitif pada ukuran codebook kecil (85% akurasi pada 32 cluster).',
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
        en: 'Built a synthetic data generation pipeline using Stable Diffusion XL to address class imbalance in Indonesian tribal face datasets.',
        id: 'Membangun pipeline generasi data sintetis menggunakan Stable Diffusion XL untuk mengatasi ketidakseimbangan kelas dalam dataset wajah suku Indonesia.',
      },
      {
        en: 'Fine tuned the model with Low Rank Adaptation (LoRA) to generate images that preserve distinct ethnic facial features.',
        id: 'Melakukan fine tuning model dengan Low Rank Adaptation (LoRA) untuk menghasilkan gambar yang mempertahankan fitur wajah etnis yang khas.',
      },
      {
        en: 'Showed that adding synthetic data to the training set improved accuracy of external classifiers (XGBoost/ViT), supporting the use of synthetic data in low resource settings.',
        id: 'Menunjukkan bahwa penambahan data sintetis ke training set meningkatkan akurasi classifier eksternal (XGBoost/ViT), mendukung penggunaan data sintetis dalam setting low resource.',
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
        en: 'Built a learning tool for visually impaired students that converts physical flowchart blocks into executable code using Computer Vision.',
        id: 'Membangun alat pembelajaran untuk siswa tunanetra yang mengubah blok flowchart fisik menjadi kode yang dapat dieksekusi menggunakan Computer Vision.',
      },
      {
        en: 'Trained a custom YOLO model for real time object detection under varied lighting and block orientations.',
        id: 'Melatih model YOLO kustom untuk deteksi objek real time dalam kondisi pencahayaan dan orientasi blok yang bervariasi.',
      },
      {
        en: 'Provided audio feedback so students can learn programming logic through physical block arrangements without screen dependency.',
        id: 'Memberikan feedback audio agar siswa dapat belajar logika pemrograman melalui susunan blok fisik tanpa ketergantungan layar.',
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
        en: 'Built a system combining Direction of Arrival (DoA) audio tracking with visual pose detection to identify coughing individuals.',
        id: 'Membangun sistem yang menggabungkan pelacakan audio Direction of Arrival (DoA) dengan deteksi pose visual untuk mengidentifikasi individu yang batuk.',
      },
      {
        en: 'Designed the algorithm to locate and confirm which person in a group is coughing based on both audio and visual signals.',
        id: 'Merancang algoritma untuk menemukan dan mengonfirmasi orang yang batuk dalam sebuah kelompok berdasarkan sinyal audio dan visual.',
      },
    ],
    image: '/portfolio/images/projects/cough-pose.jpg',
    links: {},
  },
]
