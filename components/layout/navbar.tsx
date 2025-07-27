"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import NavbarList from "./navbar-list";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";

const navbarList: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "News", href: "/news" },
    { title: "Artikel", href: "/articles" },
    { title: "About", href: "/about" },
    { title: "E-Learning", href: "https://learn.reddot.site" },
];

type NavbarProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
    const pathname = usePathname();

    return (
        <>
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-3">
                    {navbarList.map(({ title, href }) => {
                        const isActive = pathname === href;

                        return (
                            <NavbarList key={href} href={href}>
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <Image
                                        src="/dot.svg"
                                        alt="Ikon"
                                        width={16}
                                        height={16}
                                        className={`transition-all duration-300 transform ${isActive
                                            ? 'opacity-100 scale-100 translate-y-0'
                                            : 'opacity-0 scale-75 -translate-y-1'
                                            }`}
                                    />
                                    <span className="flex items-center gap-1 justify-center text-white">
                                        {title}
                                        {title === "E-Learning" && (
                                            <ArrowUpRight className="text-white" size={14} />
                                        )}
                                    </span>
                                </div>
                            </NavbarList>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
            </div>
        </>
    );
}

Navbar.MobileMenu = function MobileMenu({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    return (
        <>
            {navbarList.map(({ title, href }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-white transition"
                >
                    <span className="flex items-center gap-1">
                        {title}
                        {title === "E-Learning" && <ArrowUpRight size={14} />}
                    </span>
                </Link>
            ))}
        </>
    );
};
