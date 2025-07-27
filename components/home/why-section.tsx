import Link from "next/link";
import WhyCard from "./why-card";
import Image from "next/image"
import { Button } from "../ui/button";

export default function WhySection() {
    return (
        <section id="why" className="flex flex-col md:flex-col min-h-[26rem] items-center pb-15 pt-10 px-5">
            <div className="relative flex flex-col items-center">
                <Image
                    src="/illustrations/ask.svg"
                    alt={"Ask icon"}
                    width={140}
                    height={140}
                    className="absolute -top-10 -right-40 z-10 rotate-[4deg]"
                />
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                    Kenapa Belajar AI di Reddot
                </h2>
                <h3 className="bg-primary/70 rounded-xl py-1 px-2 mb-10 w-fit text-white">
                    Platform AI yang Ramah untuk Semua
                </h3>
            </div>
            <div className="flex max-w-4x">
                <WhyCard />
            </div>

            <Link href="https://learn.reddot.site" className="pt-15">
                <Button className="bg-primary/80 hover:bg-transparent border-2 border-primary/80 hover:text-primary/80" size={"lg"}>
                    Mulai Belajar
                </Button>
            </Link>
        </section>
    )
}