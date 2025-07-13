import { NewsCard } from "@/components/news/news-card";
import { dummyNews } from "@/data/dummyNews"

export default function NewsPage() {
    return (
        <main className="flex flex-col text-gray-950">
            <section className="flex flex-col  min-h-svh bg-rose-200 gap-10 pb-15 pt-[80px] px-5">
                <div className="max-w-4xl w-full mx-auto">
                    <h2 className="text-3xl text-left font-extrabold leading-tight mb-2">
                        Berita Terbaru
                    </h2>
                    <p className="text-gray-600 text-base max-w-3xl">
                        Explore berita terbaru seputar kecerdasan buatan, teknologi, dan inovasi masa depan.
                        Dapatkan informasi terkini dari sumber terpercaya, mulai dari perkembangan AI, riset terbaru,
                        hingga penerapan teknologi cerdas di berbagai bidang kehidupan.
                    </p>
                </div>
                <div className="flex flex-row gap-10 max-w-4xl mx-auto">
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
