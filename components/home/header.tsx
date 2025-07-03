"use client"

import { Navbar } from "./navbar"

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 h-16 bg-red-700">
            <div className="rounded-sm overflow-hidden">
                <img src="/logo.svg" alt="Logo Website" className="h-12 w-auto" />
            </div>
            <Navbar />
        </header>
    )
}
