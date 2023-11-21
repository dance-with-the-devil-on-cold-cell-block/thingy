import Link from "next/link"
import dummydata from "../../public/dummydata.json"

function List({listId, listName}:{listId:string, listName:string}) {
    return (<div>
        <Link href={"/lists/"+listId}>{listName}</Link>
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
    return (<div>
        {listnotempty ? (
            listarray.map((listi) =>
        <List key={listi.listId} listId={listi.listId.toString()} listName={listi.nameL}/>
        )) : (<h2>Engir Listar Fundnir! <Link href="/create">gera lista?</Link></h2>)}
        
    </div>)
}