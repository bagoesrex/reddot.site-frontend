"use client"

import { NewsCard } from "@/components/news/news-card";
import { dummyNews } from "@/data/dummyNews"
import { News } from "@/types/news";
import { useState } from "react";

export default function NewsPage() {
    const [search, setSearch] = useState("");

    const filteredNews = dummyNews.filter((item: News) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase()) ||
        (item.author?.toLowerCase().includes(search.toLowerCase()) ?? false)
    );

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
                    <input
                        type="text"
                        placeholder="Cari berita berdasarkan judul, isi, atau penulis..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="mt-6 w-full px-4 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                </div>
                <div className="flex flex-row gap-10 max-w-4xl mx-auto">
                    {filteredNews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNews.map((item) => (
                                <NewsCard key={item.id} news={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full text-center text-gray-600 text-lg mt-10">
                            Tidak ditemukan berita yang sesuai.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
