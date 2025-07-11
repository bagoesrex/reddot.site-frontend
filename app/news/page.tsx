import { NewsCard } from "@/components/news/news-card";
import { dummyNews } from "@/data/dummyNews"

export default function NewsPage() {
    return (
        <main className="flex flex-col">
            <section className="flex flex-col min-h-svh bg-gray-200 justify-center items-center gap-2 pb-16 pt-[100px]">
                <h1 className="text-3xl font-bold mb-8">Berita Terbaru</h1>
                <div className="flex flex-row gap-10 max-w-4xl md:text-left px-5 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dummyNews.map((item) => (
                            <NewsCard key={item.id} news={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
