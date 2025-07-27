"use client";

import Image from "next/image";
import Icon from "@/public/logo-red.svg";
import { Navbar } from "./navbar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full text-[#FF0000] px-3">
            <div className="mx-auto max-w-4xl px-4 transition-all duration-300 flex flex-col border-1 bg-white/55 backdrop-blur-sm rounded-xl mt-3">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <div className="relative h-14 flex justify-center items-center w-20 overflow-hidden">
                            <Image src={Icon} alt="Logo Website" priority />
                        </div>
                    </Link>

                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

                {isOpen && (
                    <div className="mb-2 flex flex-col gap-3 animate-fadeDown">
                        <Navbar.MobileMenu setIsOpen={setIsOpen} />
                    </div>
                )}
            </div>
        </header>
    );
}
