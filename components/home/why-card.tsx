import { Card, CardContent } from "../ui/card"
import { Search, Brain, BookOpenCheck, Users } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface WhyItem {
    icon: LucideIcon
    title: string
    description: string
}

const WhyList: WhyItem[] = [
    {
        icon: Search,
        title: "Materi Mudah Dipahami",
        description:
            "Konten disusun secara sistematis dan dilengkapi ilustrasi agar mudah dimengerti pemula.",
    },
    {
        icon: Brain,
        title: "Fokus pada Pemahaman Konsep",
        description:
            "Kami tidak hanya mengajarkan teori, tetapi juga membantu kamu memahami konsep AI secara menyeluruh.",
    },
    {
        icon: BookOpenCheck,
        title: "Belajar Mandiri Kapan Saja",
        description:
            "Platform ini bisa diakses 24/7 tanpa batas waktu. Kamu bisa belajar sesuai ritme sendiri.",
    },
    {
        icon: Users,
        title: "Komunitas Aktif",
        description:
            "Bergabunglah dengan komunitas kami untuk diskusi, kolaborasi, dan bertumbuh bersama.",
    },
]

export default function WhyCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {WhyList.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card
                        key={index}
                        className="bg-white/60 rounded-xl w-full max-w-md shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-transform duration-300 hover:shadow-red-500 hover:scale-[1.02] group p-0"
                    >
                        <CardContent className="p-6">
                            <div className="mb-4 text-red-600 transition-colors duration-300 group-hover:text-red-800">
                                <Icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
