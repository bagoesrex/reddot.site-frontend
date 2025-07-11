import Image from "next/image"
import Link from "next/link"
import { News } from "@/types/news"

type Props = {
    news: News
}

export function NewsCard({ news }: Props) {
    return (
        <Link href={`/news/${news.slug}`}>
            <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all">
                {news.imageUrl && (
                    <Image
                        src={news.imageUrl}
                        alt={news.title}
                        height={400}
                        width={400}
                        className="object-cover w-full h-35"
                    />
                )}
                <div className="p-4">
                    <h2 className="text-md font-bold">{news.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{news.publishedAt}</p>
                    <p className="text-sm mt-2 line-clamp-3">{news.content}</p>
                </div>
            </div>
        </Link>
    )
}
