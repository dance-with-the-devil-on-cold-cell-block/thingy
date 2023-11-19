import Link from "next/link";

export default function LoginPrompt() {
    return (<>
    <div className="bg-darkPrimary justify-center text-center">
        <h1 className="text-4xl font-medium p-10">Shlist</h1>
        <Link href="/login"><div className="justify-center px-10 py-2">Log in</div></Link>
        <Link href="/register">Register</Link>
    </div>
        </>
    )
}