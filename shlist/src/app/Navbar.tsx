import Link from "next/link";
import { Lobster } from "next/font/google";

const lobser = Lobster({weight: "400", subsets:["latin"]})

export default function Navbar() {
    return (
    <>
    <nav className={`w-screen bg-primary text-center p-4 text-6xl shadow ${lobser.className}`}>
        <Link className="text-white hover:text-white/90" href="/">Shlist</Link>
    </nav>
    </>
    )
}