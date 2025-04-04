// components/Header.tsx

import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline";

    return (
        <header className="flex justify-between items-center h-20 bg-red-300 text-purple-900">
            <h2 className="text-4xl font-semibold p-4">
                HEROS AND VILLIANS
            </h2>
            <nav className="p-2 m-4">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>

                <Link href="/supes" className={linkStyling}>
                    Supes
                </Link>
            </nav>
        </header>
    )
}