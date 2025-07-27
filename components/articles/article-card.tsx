import Image from "next/image"
import Link from "next/link"
import { Calendar, UserRound } from "lucide-react"
import { Card } from "../ui/card"
import { Article } from "@/types/article"

type Props = {
    article: Article
}

export function ArticleCard({ article }: Props) {
    return (
        <Link href={`/articles/${article.slug}`} className="group">
            <Card className="py-0 rounded-2xl overflow-hidden border border-gray-300 gap-0 bg-white/60 hover:shadow-lg transition-all duration-300 transform hover:rounded-bl-none hover:ring-2 hover:ring-red-600 hover:-translate-y-1">
                {article.imageUrl && (
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        height={400}
                        width={400}
                        className="object-cover w-full h-35"
                    />
                )}
                <div className="flex flex-col p-3 gap-1">
                    <h2 className="text-md font-bold line-clamp-2 transition-colors duration-200">
                        {article.title}
                    </h2>
                    <div className="flex flex-row items-center gap-3 text-gray-500">
                        <div className="flex flex-row items-center gap-1">
                            <Calendar size={15} />
                            <p className="text-sm">{article.publishedAt}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <UserRound size={15} />
                            <p className="text-sm">{article.author}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">{article.content}</p>
                </div>
            </Card>
        </Link>
    )
}
