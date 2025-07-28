"use client";

import { Music, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioControllerProps {
    src: string;
    fileName?: string;
    autoPlay?: boolean;
}

export default function AudioWidget({
    src,
    fileName = "Now playing",
    autoPlay = true,
}: AudioControllerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("Autoplay blocked:", err);
                });
            }
        }
    }, [autoPlay]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 rounded-lg p-3 flex items-center gap-3 max-w-sm bg-primary text-white">
            <audio ref={audioRef} src={src} preload="auto" />
            <div className="flex flex-row justify-center items-center gap-2">
                <Music size={20} />
                <span className="text-sm truncate max-w-[120px]">{fileName}</span>
            </div>
            <button
                onClick={togglePlay}
                className="px-3 py-1 text-sm rounded bg-white text-primary hover:bg-gray-100 transition flex items-center gap-1"
            >
                {isPlaying ? (
                    <>
                        <Pause size={16} />
                        Pause
                    </>
                ) : (
                    <>
                        <Play size={16} />
                        Play
                    </>
                )}
            </button>
        </div>
    );
}
