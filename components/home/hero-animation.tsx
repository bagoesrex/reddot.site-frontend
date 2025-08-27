import Lottie from "lottie-react";
import animationData from "@/public/lottie/ai-lottie.json";

export default function HeroAnimation() {
    return (
        <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px]">
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
