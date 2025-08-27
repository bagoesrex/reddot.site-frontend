import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const visimisiItems = [
    {
        icon: "/illustrations/brain.svg",
        title: "Education",
        description: "Menyediakan konten edukasi tentang kecerdasan buatan dan teknologi yang mudah diakses dan menarik.",
    },
    {
        icon: "/illustrations/community.svg",
        title: "Community",
        description: "Menghubungkan pelajar, kreator, dan profesional yang antusias dalam ruang tumbuh bersama.",
    },
    {
        icon: "/illustrations/ethics.svg",
        title: "Ethics",
        description: "Meningkatkan kesadaran etis dalam pengembangan dan penggunaan sistem cerdas.",
    },
    {
        icon: "/illustrations/innovation.svg",
        title: "Innovation",
        description: "Mendukung inovasi dan menginspirasi generasi pemimpin teknologi berikutnya.",
    },
]

export default function VisimisiCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
            {visimisiItems.map((category, index) => {
                return (
                    <Card
                        key={index}
                        className="bg-transparent w-full p-0 m-0 max-w-md border-none shadow-none transition"
                    >
                        <CardContent className="p-3 md:space-y-4 flex justify-center items-center flex-col">
                            <div className="p-5 md:p-1">
                                <Image src={category.icon} alt={category.title} width={200} height={200} />
                            </div>
                            <h5 className="text-md font-semibold text-gray-900">{category.title}</h5>
                            <p className="text-sm text-gray-700 text-center">{category.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}