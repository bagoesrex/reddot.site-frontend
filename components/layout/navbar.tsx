"use client";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavbarList from "./navbar-list";
import { ArrowUpRight } from "lucide-react";

const navbarList: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "News", href: "/news" },
    { title: "Artikel", href: "/article" },
    { title: "About", href: "/about" },
    { title: "E-Learning", href: "/learning" },
];

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-3">
                {navbarList.map(({ title, href }) => (
                    <NavbarList key={href} href={href}>
                        <span className="flex items-center gap-1 justify-center">
                            {title}
                            {title === "E-Learning" && <ArrowUpRight />}
                        </span>
                    </NavbarList>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
