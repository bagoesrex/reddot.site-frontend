import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cpu, MessageSquare } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface CategoryItem {
    icon: LucideIcon
    title: string
    description: string
}

export default function CategoryCard() {
    const categories: CategoryItem[] = [
        {
            icon: Brain,
            title: "Dasar AI",
            description: "Materi untuk mengenal konsep dan logika kecerdasan buatan dari awal.",
        },
        {
            icon: Cpu,
            title: "Computer Vision",
            description: "Pelajari bagaimana komputer dapat memahami gambar dan video.",
        },
        {
            icon: MessageSquare,
            title: "Natural Language Processing",
            description: "Teknologi AI dalam memahami dan menghasilkan bahasa manusia.",
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {categories.map((category, index) => {
                const Icon = category.icon
                return (
                    <Card
                        key={index}
                        className="w-full max-w-md rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <CardContent className="p-6 space-y-4">
                            <div className="text-red-600">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-700">{category.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
