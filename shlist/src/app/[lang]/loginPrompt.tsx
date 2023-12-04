import Link from "next/link";

export default function LoginPrompt() {
    return (<>
    <div className="mx-auto px-60 mw-60 lg:grid grid-cols-2 justify-center text-center">
        <h1 className="col-span-2 text-4xl font-medium p-10">Shlist</h1>
        <div className="flex justify-center m-5">
            <Link href="/login"><div className="w-40 rounded-full text-center p-3 text-xl text-black font-medium bg-white hover:bg-gray-200 shadow">Log in</div></Link>
        </div>
        <div className="flex justify-center m-5">
            <Link href="/register"><div className="w-40 rounded-full text-center p-3 text-xl text-black font-medium bg-white hover:bg-gray-200 shadow">Register</div></Link>
        </div>
    </div>
        </>
    )
}