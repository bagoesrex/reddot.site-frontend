import { Card, CardContent } from "../ui/card"
import Image from "next/image";

interface WhyItem {
    icon: string
    title: string
    description: string
}

const WhyList: WhyItem[] = [
    {
        icon: "/lottie/easy.png",
        title: "Materi Mudah Dipahami",
        description:
            "Konten disusun secara sistematis dan dilengkapi ilustrasi agar mudah dimengerti pemula.",
    },
    {
        icon: "/lottie/brain.png",
        title: "Fokus pada Pemahaman Konsep",
        description:
            "Kami tidak hanya mengajarkan teori, tetapi juga membantu kamu memahami konsep AI secara menyeluruh.",
    },
    {
        icon: "/lottie/24.png",
        title: "Belajar Mandiri Kapan Saja",
        description:
            "Platform ini bisa diakses 24/7 tanpa batas waktu. Kamu bisa belajar sesuai ritme sendiri.",
    },
    {
        icon: "/lottie/community.png",
        title: "Komunitas Aktif",
        description:
            "Bergabunglah dengan komunitas kami untuk diskusi, kolaborasi, dan bertumbuh bersama.",
    },
]

export default function WhyCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {WhyList.map((item, index) => {
                return (
                    <Card
                        key={index}
                        className="bg-transparent border-none shadow-none rounded-xl w-full max-w-md transition-transform duration-300 hover:scale-[1.02] hover:ring-1 hover:ring-primary group p-0"
                    >
                        <CardContent className="p-6 flex flex-row gap-7">
                            <div className="flex justify-center items-center w-40">
                                <Image src={item.icon} alt={item.title} width={90} height={90} />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
