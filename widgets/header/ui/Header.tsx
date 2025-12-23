'use client'

import { useState } from 'react'
import Link from 'next/link'
import SearchIcon from "@/shared/ui/icons/SearchIcon";
import UserIcon from "@/shared/ui/icons/UserIcon";
import CloseIcon from "@/shared/ui/icons/CloseIcon";
import MenuIcon from "@/shared/ui/icons/MenuIcon";
import {navItems} from "@/widgets/header/navItems";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
            <div className="mx-auto  px-4 ">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white">
                            IT
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
              IT Path
            </span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-8">
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

                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <button
                            aria-label="Search"
                            className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                            <SearchIcon />
                        </button>

                        {/* Auth */}
                        <Link
                            href="/auth/login"
                            className="hidden md:flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            <UserIcon />
                            Войти
                        </Link>

                        {/* Mobile menu */}
                        <button
                            aria-label="Menu"
                            onClick={() => setMenuOpen(v => !v)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 md:hidden"
                        >
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t bg-white">
                    <nav className="space-y-2 px-4 py-4">
                        {navItems.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="pt-3 border-t">
                            <Link
                                href="/auth/login"
                                className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Войти
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
