import Link from "next/link";
import { Button } from "../ui/button";
import { HomeCard } from "./about-card";

export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-15 pt-10 px-5">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-10">
                Tentang
            </h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-4xl w-full">
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900">Apa Itu Reddot?</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        <strong>Reddot</strong> merupakan platform edukasi yang dibuat oleh{" "}
                        <strong>Reddot Community</strong> untuk mengedukasi masyarakat tentang
                        kecerdasan buatan (<em>AI</em>) secara <strong>gratis</strong>, mudah
                        dipahami, dan terbuka untuk semua kalangan.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="bg-red-300 rounded-3xl p-4 shadow-md h-full">
                        <HomeCard />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl w-full mt-14">
                <div className="w-full md:w-1/2">
                    <div className="bg-red-300 rounded-3xl p-4 shadow-md h-full">
                        <HomeCard />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900">Apa Itu Reddot Community?</h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        <strong>Reddot Community</strong> adalah komunitas terbuka yang berfokus
                        pada pengembangan, kolaborasi, dan penyebaran edukasi seputar{" "}
                        <em>Artificial Intelligence (AI)</em>. Komunitas ini mendorong
                        pembelajaran bersama, berbagi sumber daya, dan membangun masa depan AI
                        yang inklusif di Indonesia.
                    </p>
                </div>
            </div>
            <Link href={"/"}>
                <Button className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600 mt-10" size={"lg"}>
                    Learn more about us
                </Button>
            </Link>
        </section>
    )
}