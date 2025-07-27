"use client"

import { ArticleCard } from "@/components/articles/article-card";
import { dummyArticles } from "@/data/dummyArticles";
import { Article } from "@/types/article";
import { useState } from "react";

export default function ArticlesPage() {
    const [search, setSearch] = useState("");

    const filteredArticles = dummyArticles.filter((item: Article) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase()) ||
        (item.author?.toLowerCase().includes(search.toLowerCase()) ?? false)
    );

    return (
        <main className="flex flex-col text-gray-950">
            <section className="flex flex-col  min-h-svh gap-10 pb-15 pt-[80px] px-5">
                <div className="max-w-4xl w-full mx-auto">
                    <h2 className="text-3xl text-left font-extrabold leading-tight mb-2">
                        Artikel
                    </h2>
                    <p className="text-gray-600 text-base max-w-3xl">
                        Temukan berita terbaru seputar kecerdasan buatan, teknologi, dan inovasi masa depan.
                        Dapatkan update terkini tentang perkembangan AI, riset terbaru, dan penerapannya dalam berbagai aspek kehidupan.
                    </p>
                    <h3 className="mt-6 w-full px-4 py-2 text-center" >
                        Todo Filter
                    </h3>
                </div>
                <div className="flex flex-row gap-10 max-w-4xl mx-auto">
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredArticles.map((item) => (
                                <ArticleCard key={item.id} article={item} />
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
