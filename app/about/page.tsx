import DescriptionSection from "@/components/about/description-section";
import TitleSection from "@/components/about/title-section";

export default function AboutPage() {
    return (
        <main className="w-full flex flex-col justify-center items-center pb-20">

            <TitleSection />

            <DescriptionSection />
        </main>
    );
}
