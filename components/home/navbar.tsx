"use client"

import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavbarList from "./navbar-list"

const navbarList: { title: string; href: string }[] = [
    {
        title: "Home",
        href: "/",
    },
]

export function Navbar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                {navbarList.map(({ title, href }) => (
                    <NavbarList key={href} href={href}>
                        {title}
                    </NavbarList>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
