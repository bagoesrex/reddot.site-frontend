import { dummyNews } from "@/data/dummyNews"
import { notFound } from "next/navigation"
import Image from "next/image"

type Props = {
    params: { slug: string }
}

export default function NewsDetailPage({ params }: Props) {
    const news = dummyNews.find((item) => item.slug === params.slug)

    if (!news) return notFound()

    return (
        <article className="max-w-3xl mx-auto px-4 py-16 pb-16 pt-[100px]">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <p className="text-sm text-gray-500 mb-4">Dipublikasikan: {news.publishedAt}</p>
            {news.imageUrl && (
                <Image
                    src={news.imageUrl}
                    alt={news.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
            )}
            <div className="text-base leading-relaxed text-gray-800">
                {news.content}
            </div>
        </article>
    )
}
