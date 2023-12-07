import Link from "next/link"

export function AddList() {
    return (<div className="mx-auto my-16">
    <Link href="/create">
        <div className="bg-black/10 dark:bg-primary hover:bg-[rgba(0,0,0,0.13)] dark:hover:bg-primary/80 w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">
            <svg width={"100%"} height={"100%"}>
                <line x1={"50%"} y1={"25%"} x2={"50%"} y2={"75%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
                <line x1={"25%"} y1={"50%"} x2={"75%"} y2={"50%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
            </svg>
        </div>
    </Link>
    </div>
    )
}

export function List({listId, listName}:{listId:string, listName:string}) {
    return (<div className="mx-auto my-16">
    <Link href={"/lists/"+listId}>
        <div className="bg-primary/80 dark:bg-white hover:bg-primary dark:hover:bg-white/80 text-white dark:text-teal-600 font-medium p-2 text-2xl w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">{listName}</div>
    </Link>
    </div>
    )
}