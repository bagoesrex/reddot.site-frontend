import DescriptionSection from "@/components/about/description-section";
import TitleSection from "@/components/about/title-section";
import VisimisiSection from "@/components/about/visimisi-section";
import AudioWidget from "@/components/audio/audio-widget";

export default function AboutPage() {
    return (
        <main className="flex flex-col justify-center items-center">

            <TitleSection />

            <DescriptionSection />

            <VisimisiSection />

            <AudioWidget
                src="/audios/about.mp3"
                fileName="City"
            />
        </main>
    );
}
