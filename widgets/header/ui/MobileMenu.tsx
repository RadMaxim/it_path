import Link from 'next/link'
import {navItems} from "@/widgets/header/navItems";

type NavItem = {
    label: string
    href: string
}

interface MobileMenuProps {

    onItemClick: () => void
}

export function MobileMenu({  onItemClick }: MobileMenuProps) {
    return (
        <div className="md:hidden border-t bg-white">
            <nav className="space-y-2 px-4 py-4">
                {navItems.map(item => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onItemClick}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        {item.label}
                    </Link>
                ))}

                <div className="pt-3 border-t">
                    <Link
                        href="/auth/login"
                        onClick={onItemClick}
                        className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Войти
                    </Link>
                </div>
            </nav>
        </div>
    )
}
