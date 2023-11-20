import Link from "next/link";

export default function LoginPrompt() {
    return (<>
    <div className="mx-auto px-60 lg:grid grid-cols-2 bg-darkPrimary justify-center text-center">
        <h1 className="col-span-2 text-4xl font-medium p-10">Shlist</h1>
        <Link href="/login">Log in</Link>
        <Link href="/register">Register</Link>
    </div>
        </>
    )
}