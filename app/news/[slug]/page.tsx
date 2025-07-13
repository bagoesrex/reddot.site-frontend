import { notFound } from "next/navigation";
import Image from "next/image";
import { dummyNews } from "@/data/dummyNews";

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    const news = dummyNews.find((item) => item.slug === slug);

    if (!news) return notFound();

    return (
        <main className="flex flex-col items-center px-4 py-24 min-h-svh bg-white">
            <article className="max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-4">{news.title}</h1>

                {news.imageUrl && (
                    <div className="w-full h-64 relative mb-6">
                        <Image
                            src={news.imageUrl}
                            alt={news.title}
                            fill
                            className="object-cover rounded-xl"
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
