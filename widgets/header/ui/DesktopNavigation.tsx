'use client'

import Link from 'next/link'
import {navItems} from "@/widgets/header/navItems";

export const DesktopNavigation = () => {
    return (
        <nav className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}