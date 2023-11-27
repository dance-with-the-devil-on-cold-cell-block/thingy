import Link from "next/link"

export default function List({listId, listName}:{listId:string, listName:string}) {
    return (<div>
        <Link href={"/lists/"+listId}>{listName}</Link>
    </div>
    )
}