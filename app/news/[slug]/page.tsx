import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, User } from "lucide-react";
import { dummyNews } from "@/data/dummyNews";

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const news = dummyNews.find((item) => item.slug === slug);

    if (!news) return notFound();

    return (
        <main className="flex flex-col items-center px-4 py-24 min-h-svh pt-[130px]">
            <article className="max-w-3xl w-full">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{news.title}</h1>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <User size={16} className="text-rose-600" />
                        <span>{news.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDays size={16} className="text-rose-600" />
                        <span>{new Date(news.publishedAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>
                    </div>
                </div>

                {news.imageUrl && (
                    <div className="w-full h-74 relative mb-6 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={news.imageUrl}
                            alt={news.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-800">
                    <p>{news.content}</p>
                </div>
            </article>
        </main>
    );
}
