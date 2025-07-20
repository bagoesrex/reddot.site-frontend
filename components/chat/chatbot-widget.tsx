"use client";

import { useState } from "react";
import { Send, X, BotMessageSquare, Bot, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { chatbotResponses } from "@/data/chatbot-responses";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function ChatbotWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input.trim() };
        const botResponse: Message = {
            sender: "bot",
            text: generateResponse(input),
        };

        setMessages((prev) => [...prev, userMessage, botResponse]);
        setInput("");
    };

    const generateResponse = (text: string): string => {
        const lower = text.toLowerCase();

        for (const { keywords, response } of chatbotResponses) {
            if (keywords.some((k) => lower.includes(k))) {
                return response;
            }
        }

        return "Terima kasih! Jawaban saya masih terbatas karena fitur ini sedang dalam tahap pengembangan.";
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 max-sm:right-2 max-sm:bottom-2">
            {!open && (
                <Button
                    size="icon"
                    className="rounded-full w-14 h-14 shadow-lg"
                    onClick={() => setOpen(true)}
                >
                    <BotMessageSquare className="w-6 h-6" />
                </Button>
            )}

            {open && (
                <Card className="w-[320px] sm:w-80 max-sm:w-[95vw] h-[85vh] flex flex-col shadow-2xl border p-0 gap-0 overflow-hidden border-muted">
                    <CardHeader className="flex flex-row items-center justify-between py-2 px-4 bg-primary text-white">
                        <CardTitle className="flex flex-row text-base justify-start items-center gap-2">
                            <Bot />
                            Chatbot
                        </CardTitle>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:bg-white/20 hover:text-white"
                            onClick={() => setOpen(false)}
                        >
                            <X size={18} />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 p-0 w-full overflow-hidden">
                        <ScrollArea className="h-full px-4 py-1 text-sm">
                            {messages.length === 0 ? (
                                <p className="text-muted-foreground italic text-center">
                                    Mulai percakapan...
                                </p>
                            ) : (
                                <div className="flex flex-col gap-3 p-1">
                                    {messages.map((msg, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex items-start gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""
                                                }`}
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-primary">
                                                {msg.sender === "user" ? (
                                                    <User className="w-4 h-4 text-primary" />
                                                ) : (
                                                    <Bot className="w-4 h-4 text-primary" />
                                                )}
                                            </div>

                                            <div
                                                className={`px-3 py-2 rounded-lg text-sm max-w-[75%] break-words ${msg.sender === "user"
                                                    ? "bg-primary text-white"
                                                    : "bg-muted text-black"
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}

                                    <div ref={bottomRef} />
                                </div>
                            )}
                        </ScrollArea>
                    </CardContent>

                    <div className="border-t px-3 py-2 flex items-center gap-2">
                        <Input
                            placeholder="Ketik pesan..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSend();
                            }}
                            className="text-sm focus-visible:ring-primary focus-visible:ring-1"
                        />
                        <Button
                            size="icon"
                            variant="ghost"
                            className="text-primary"
                            onClick={handleSend}
                            aria-label="Kirim"
                        >
                            <Send size={18} />
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
}
