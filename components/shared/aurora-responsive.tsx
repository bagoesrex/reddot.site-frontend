"use client";

import Aurora from "@/app/components/reactbits/Backgrounds/Aurora/Aurora";
import { useEffect, useState } from "react";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    return isMobile;
}

export default function AuroraResponsive() {
    const isMobile = useIsMobile();

    return (
        <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={isMobile ? 0.3 : 0.6}
            speed={0.5}
        />
    );
}
