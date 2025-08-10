import Image from "next/image"
import Link from "next/link"
import { News } from "@/types/news"
import { Calendar, UserRound } from "lucide-react"
import { Card } from "../ui/card"

type Props = {
    news: News
}

export function NewsCard({ news }: Props) {
    return (
        <Link href={`/news/${news.slug}`} className="group">
            <Card className="py-0 rounded-2xl overflow-hidden border border-gray-300 gap-0 bg-white/60 hover:shadow-lg transition-all duration-300 transform hover:rounded-bl-none hover:ring-2 hover:ring-red-600 hover:-translate-y-1">
                {news.imageUrl && (
                    <Image
                        src={news.imageUrl}
                        alt={news.title}
                        height={400}
                        width={400}
                        className="object-cover w-full h-35"
                    />
                )}
                <div className="flex flex-col p-3 gap-1">
                    <h2 className="text-md font-bold line-clamp-2 transition-colors duration-200">
                        {news.title}
                    </h2>
                    <div className="flex flex-row items-center gap-3 text-gray-500">
                        <div className="flex flex-row items-center gap-1">
                            <Calendar size={15} />
                            <p className="text-xs">{news.publishedAt}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <UserRound size={15} />
                            <p className="text-xs">{news.author}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">{news.content}</p>
                </div>
            </Card>
        </Link>
    )
}
