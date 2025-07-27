import Link from "next/link";
import WhyCard from "./why-card";
import Image from "next/image"
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function WhySection() {
    return (
        <section id="why" className="relative flex flex-col min-w-sm md:flex-col min-h-[26rem] items-center pb-15 pt-10 px-5">
            <h2 className="relative text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                Kenapa Belajar AI di Reddot
                <Image
                    src="/illustrations/ask.svg"
                    alt="Ask icon"
                    width={60}
                    height={60}
                    className="absolute top-6 -right-4 z-20 rotate-[4deg]"
                />
            </h2>
            <h3 className="bg-primary/70 -ml-11 md:ml-0 text-left rounded-xl py-1 px-2 mb-10 w-fit text-white">
                Platform AI yang Ramah untuk Semua
            </h3>
            <div className="flex max-w-4x">
                <WhyCard />
            </div>

            <Link href="https://learn.reddot.site" className="pt-15">
                <Button className="group bg-primary/80 hover:bg-transparent border-2 border-primary/80 hover:text-primary/80" size={"lg"}>
                    Mulai Belajar
                    <span className="group-hover:ml-3 transition-all"><ChevronRight /></span>
                </Button>
            </Link>
        </section>
    )
}