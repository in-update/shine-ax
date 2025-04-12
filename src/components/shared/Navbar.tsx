import React from 'react'
import Link from "next/link";

function Navbar() {
    return (
        <div>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-xl font-bold">Cabinet ExpertCompta</h1>
                    <div className="space-x-4">
                        <Link href="/">Accueil</Link>
                        <Link href="/a-propos">À propos</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
