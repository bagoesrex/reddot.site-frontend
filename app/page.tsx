import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import WhySection from "@/components/home/why-section";

export default function Home() {
  return (
    <main className="flex flex-col text-gray-950">

      <HeroSection />

      <AboutSection />

      <WhySection />

      {/* <CategorySection /> */}

      {/* <NewsSection /> */}
    </main>
  );
}
