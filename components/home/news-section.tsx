import { dummyNews } from "@/data/dummyNews";
import { NewsCard } from "../news/news-card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NewsSection() {
    return (
        <section id="news" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-400 items-center pb-15 pt-10 px-5">
            <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mb-2">
                Berita AI Terbaru Terbaru
            </h1>
            <h2 className="bg-gray-300 rounded-xl py-1 px-2 mb-10">
                Baca Berita Tentang AI Terbaru
            </h2>
            <div className="flex max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dummyNews.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            </div>
            <Link href="/news" className="pt-10">
                <Button className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600" size={"lg"}>
                    Lihat Semua Artikel
                </Button>
            </Link>
        </section>
    )
}