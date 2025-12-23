'use client'

import { useState } from 'react'
import Link from 'next/link'
import SearchIcon from "@/shared/ui/icons/SearchIcon";
import UserIcon from "@/shared/ui/icons/UserIcon";
import CloseIcon from "@/shared/ui/icons/CloseIcon";
import MenuIcon from "@/shared/ui/icons/MenuIcon";
import {DesktopNavigation} from "@/widgets/header/ui/DesktopNavigation";
import {MobileMenu} from "@/widgets/header/ui/MobileMenu";
import {Button} from "@/shared/ui/button";


const Header=()=> {
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
                   <DesktopNavigation/>

                    {/* Right actions */}
                    <div className="flex items-center gap-3">


                        {/* Auth */}
                       <Button  value={"Контакты"} variant={"danger"} title={"Контакты"}/>

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
                <MobileMenu onItemClick={() => setMenuOpen(false)}/>
            )}
        </header>
    )
}
export default Header;