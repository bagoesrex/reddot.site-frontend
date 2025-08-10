import { Article } from "@/types/article";

export const dummyArticles: Article[] = [
    {
        id: "1",
        title: "Apa Itu Machine Learning dan Bagaimana Cara Kerjanya?",
        slug: "apa-itu-machine-learning",
        content: `Machine Learning (ML) adalah cabang dari kecerdasan buatan yang memungkinkan sistem belajar dari data tanpa diprogram secara eksplisit. ML bekerja dengan cara menemukan pola pada data, kemudian menggunakan pola tersebut untuk membuat prediksi atau keputusan. Artikel ini akan membahas jenis-jenis ML seperti supervised, unsupervised, dan reinforcement learning, beserta contoh penerapannya di dunia nyata.`,
        imageUrl: "/articles/ai-articles1.webp",
        publishedAt: "2025-07-26",
        author: "AI Academy",
    },
    {
        id: "2",
        title: "Peran AI dalam Meningkatkan Layanan Kesehatan",
        slug: "ai-dalam-layanan-kesehatan",
        content: `Kecerdasan buatan telah membantu sektor kesehatan dalam mendiagnosis penyakit, memprediksi risiko, hingga mempersonalisasi rencana perawatan. Dengan analisis data medis dan citra medis, AI dapat membantu dokter membuat keputusan yang lebih cepat dan akurat. Namun, penerapannya tetap harus memperhatikan privasi pasien dan etika medis.`,
        imageUrl: "/articles/ai-articles2.webp",
        publishedAt: "2025-07-24",
        author: "Health AI Journal",
    },
    {
        id: "3",
        title: "Natural Language Processing: Mengajarkan Komputer Memahami Bahasa",
        slug: "natural-language-processing",
        content: `Natural Language Processing (NLP) adalah bidang AI yang berfokus pada interaksi antara komputer dan bahasa manusia. NLP memungkinkan mesin memahami, menafsirkan, dan menghasilkan bahasa alami. Penerapan NLP meliputi chatbot, terjemahan otomatis, analisis sentimen, dan pencarian informasi. Artikel ini membahas teknik-teknik populer seperti tokenization, stemming, dan transformer.`,
        imageUrl: "/articles/ai-articles3.webp",
        publishedAt: "2025-07-22",
        author: "Language AI Insights",
    },
    {
        id: "4",
        title: "Etika dalam AI: Tantangan dan Solusi",
        slug: "etika-ai-tantangan-solusi",
        content: `Penggunaan AI membawa tantangan etika seperti bias algoritma, privasi data, dan pengangguran akibat otomatisasi. Untuk mengatasi hal ini, diperlukan kerangka regulasi yang jelas, transparansi algoritma, serta keterlibatan berbagai pihak dalam proses pengembangan AI. Artikel ini akan menguraikan prinsip-prinsip AI yang etis dan tanggung jawab pengembang.`,
        imageUrl: "/articles/ai-articles4.webp",
        publishedAt: "2025-07-20",
        author: "AI Ethics Forum",
    },
    {
        id: "5",
        title: "Masa Depan AI di Dunia Pendidikan",
        slug: "masa-depan-ai-pendidikan",
        content: `AI dapat merevolusi pendidikan dengan menghadirkan pembelajaran yang dipersonalisasi, asisten pengajar virtual, dan sistem evaluasi otomatis. Dengan AI, siswa dapat belajar sesuai ritme dan gaya belajar masing-masing. Namun, penting untuk menjaga peran guru sebagai pembimbing utama dan memastikan teknologi ini digunakan secara inklusif.`,
        imageUrl: "/articles/ai-articles5.webp",
        publishedAt: "2025-07-18",
        author: "EduTech AI",
    },
];
