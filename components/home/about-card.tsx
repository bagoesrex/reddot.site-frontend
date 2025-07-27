import Image from "next/image"
import { Card } from "@/components/ui/card"

type Props = {
    cover: boolean
    href: string
}

export function HomeCard({ href, cover }: Props) {
    return (
        <Card className={`${cover ? "rotate-[-1deg]" : "rotate-[3deg]"} w-full aspect-[16/9] overflow-hidden rounded-xl bg-transparent border-none shadow-none py-0`}>
            <div className="relative h-full w-full">
                <Image
                    src={href}
                    alt="Home Image"
                    fill
                    className={cover ? "object-cover" : ""}
                />
            </div>
        </Card>
    )
}
