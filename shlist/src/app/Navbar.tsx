import Link from "next/link";
import { Lobster } from "next/font/google";

const lobser = Lobster({weight: "400", subsets:["latin"]})

export default function Navbar() {
    return (
    <>
    <nav className={`bg-primary ${lobser.className}`}><Link href="/">Shlist</Link></nav>
    </>
    )
}