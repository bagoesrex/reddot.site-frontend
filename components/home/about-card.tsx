import Image from "next/image"
import { Card } from "@/components/ui/card"
import Placeholder from "@/public/placeholder.webp"

export function HomeCard() {
    return (
        <Card className="w-full aspect-[16/9] overflow-hidden shadow-lg rounded-xl py-0">
            <div className="relative h-full w-full">
                <Image
                    src={Placeholder}
                    alt="Home Image"
                    fill
                    className="object-cover"
                />
            </div>
        </Card>
    )
}
