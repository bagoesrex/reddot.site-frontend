import Link from "next/link";
import { Button } from "../ui/button";
import { HomeCard } from "./about-card";
import PatternBackground from "../shared/pattern-background";
import Image from "next/image"
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="relative min-w-sm flex overflow-hidden flex-col md:flex-col min-h-[26rem] items-center pb-15 pt-20 px-5">
            <PatternBackground />
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

                <div className="w-full px-30 md:w-1/2 md:px-10">
                    <div className="rounded-3xl p-4 h-full">
                        <HomeCard href="/logo-red.svg" cover={false} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl w-full mt-14">
                <div className="w-full md:w-1/2">
                    <div className="rounded-3xl p-4 h-full relative">
                        <Image
                            src="/illustrations/album.svg"
                            alt={"Album icon"}
                            width={60}
                            height={60}
                            className="absolute -top-3 right-0 z-10 rotate-[8deg]"
                        />
                        <Image
                            src="/illustrations/chat.svg"
                            alt={"Dot icon"}
                            width={60}
                            height={60}
                            className="absolute bottom-0 left-0 z-10 rotate-[-8deg]"
                        />
                        <HomeCard href="/us.webp" cover={true} />
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
            <Link href={"/about"}>
                <Button className="group bg-primary/80 hover:bg-transparent border-2 border-primary/80 hover:text-primary/80 mt-10" size={"lg"}>
                    Learn more about us
                    <span className="group-hover:ml-3 transition-all"><ChevronRight /></span>
                </Button>
            </Link>
        </section>
    )
}