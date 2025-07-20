export type ChatbotMessage = {
    keywords: string[];
    response: string;
};

export const chatbotResponses: ChatbotMessage[] = [
    {
        keywords: ["halo", "hai", "hi"],
        response: "Hai! Ada yang bisa saya bantu?",
    },
    {
        keywords: ["ai", "kecerdasan buatan"],
        response: "AI (Artificial Intelligence) adalah teknologi yang meniru kecerdasan manusia.",
    },
    {
        keywords: ["terima kasih", "makasih"],
        response: "Sama-sama! 😊",
    },
    {
        keywords: ["belajar", "materi", "course"],
        response: "Kamu bisa mulai dari menu E-Learning di atas untuk akses materi belajar kami.",
    },
    {
        keywords: ["komunitas", "diskusi", "forum"],
        response: "Silakan bergabung dengan komunitas kami di halaman Komunitas!",
    },
];
