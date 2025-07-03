import Link from "next/link"
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ReactNode } from "react"

type NavbarListProps = {
    href: string
    children: ReactNode
}

export default function NavbarList({ href, children }: NavbarListProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={href}>{children}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
