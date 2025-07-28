import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import WhySection from "@/components/home/why-section";
import AudioWidget from "@/components/audio/audio-widget";

export default function Home() {
  return (
    <main className="flex flex-col text-gray-950">

      <HeroSection />

      <AboutSection />

      <WhySection />

      {/* <CategorySection /> */}

      {/* <NewsSection /> */}

      <AudioWidget
        src="/audios/home.mp3"
        fileName="Ovanea"
      />
    </main>
  );
}
