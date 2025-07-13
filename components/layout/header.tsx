"use client"

import Image from "next/image"
import Icon from "@/public/logo.svg"
import { Navbar } from "./navbar"

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-row justify-between items-center px-4">
                    <div className="overflow-hidden">
                        <Image src={Icon} alt="Logo Website" className="h-14 w-auto fill-red-700" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
