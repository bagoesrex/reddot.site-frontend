"use client"

import { Navbar } from "./navbar"

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md">
            <div className="mx-4 border-b-1 border-black">
                <div className="flex flex-row justify-between items-center px-4">
                    <div className="overflow-hidden">
                        <img src="/logo.svg" alt="Logo Website" className="h-17 w-auto fill-blue-700" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
