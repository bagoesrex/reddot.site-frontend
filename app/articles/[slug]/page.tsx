import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, User } from "lucide-react";
import { dummyArticles } from "@/data/dummyArticles";

export default async function ArticleDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = dummyArticles.find((item) => item.slug === slug);

    if (!article) return notFound();

    return (
        <main className="flex flex-col items-center px-4 py-24 min-h-svh pt-[80px]">
            <article className="max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <User size={16} className="text-rose-600" />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDays size={16} className="text-rose-600" />
                        <span>{new Date(article.publishedAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>
                    </div>
                </div>

                {article.imageUrl && (
                    <div className="w-full h-74 relative mb-6 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-800">
                    <p>{article.content}</p>
                </div>
            </article>
        </main>
    );
}
