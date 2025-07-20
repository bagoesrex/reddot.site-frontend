export const fetchGeminiResponse = async (text: string): Promise<string> => {
    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text }],
                        },
                    ],
                }),
            }
        );

        const data = await res.json();
        const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        return result || "Maaf, saya tidak dapat menjawab saat ini.";
    } catch (err) {
        console.error("Gemini error:", err);
        return "Terjadi kesalahan. Coba lagi nanti.";
    }
};
