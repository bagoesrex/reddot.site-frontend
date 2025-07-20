"use client";

import Link from "next/link";
import {
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavbarListProps = {
    href: string;
    children: ReactNode;
};

export default function NavbarList({ href, children }: NavbarListProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={clsx(
                    "relative text-white px-4 py-2 text-sm font-medium transition-all duration-200",
                    "before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300",
                    "hover:before:w-full hover:text-black",
                    isActive &&
                    "text-black font-semibold before:w-full before:bg-black"
                )}
            >
                <Link href={href}>{children}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}
