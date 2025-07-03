"use client"

import { Navbar } from "./navbar"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gray-700 shadow-md">
            <div className="flex flex-row justify-between items-center px-7">
                <div className="overflow-hidden">
                    <img src="/logo.svg" alt="Logo Website" className="h-12 w-auto" />
                </div>
                <Navbar />
            </div>
        </header>
    )
}
