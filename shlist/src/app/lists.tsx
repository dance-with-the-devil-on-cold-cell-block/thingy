import Link from "next/link"
import dummydata from "../../public/dummydata.json"

function List({listId, listName}:{listId:string, listName:string}) {
    return (<div className="mx-auto my-16">
    <Link href={"/lists/"+listId}>
        <div className="bg-white hover:bg-[rgb(240,255,250)] text-teal-600 font-medium p-2 text-2xl w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">{listName}</div>
    </Link>
    </div>
    )
}

function AddList() {
    return (<div className="mx-auto my-16">
    <Link href="/create">
        <div className="bg-primary hover:bg-emerald-500 text-white w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">
            <svg width={"100%"} height={"100%"}>
                <line x1={"50%"} y1={"25%"} x2={"50%"} y2={"75%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
                <line x1={"25%"} y1={"50%"} x2={"75%"} y2={"50%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
            </svg>
        </div>
    </Link>
    </div>
    )
}

export default function Lists({userId}: {userId:string}) {
    let listarray = []
    for(let i = 0; i < (dummydata.dumdata.listOwners.length); i++) {
        if(dummydata.dumdata.listOwners[i].userId.toString() == userId ){
            let listaId = dummydata.dumdata.listOwners[i].listId
            for(let x = 0; x < dummydata.dumdata.lists.length; x++) {
                if(dummydata.dumdata.lists[x].listId == listaId) {
                    listarray.push(dummydata.dumdata.lists[x])
                }
            }
        }
    }
    var listnotempty:boolean = listarray.length != 0;
    return (<div className="mx-auto lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {listnotempty ? (
            listarray.map((listi) =>
        <List key={listi.listId} listId={listi.listId.toString()} listName={listi.nameL}/>
        )) : (<h2>Engir Listar Fundnir! <Link href="/create">gera lista?</Link></h2>)}
        <AddList/>
    </div>)
}