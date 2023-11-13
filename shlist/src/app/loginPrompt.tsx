import Link from "next/link";

export default function LoginPrompt() {
    return (<>
    <div>
        <h1>Shlist</h1>
        <Link href="/login">Log in</Link>
        <Link href="/register">Register</Link>
    </div>
        </>
    )
}