import Link from "next/link"
import dummydata from "../../public/dummydata.json"

export default function Lists({userId}: {userId:string}) {
    let listarray = []
    for(let i = 0; i < (dummydata.dumdata.listOwners.length); i++) {
        console.log(dummydata.dumdata.listOwners[i].userId.toString() + " og " + userId)
        if(dummydata.dumdata.listOwners[i].userId.toString() == userId ){
            let listaId = dummydata.dumdata.listOwners[i].listId
            for(let x = 0; x < dummydata.dumdata.lists.length; x++) {
                if(dummydata.dumdata.lists[x].listId == listaId) {
                    listarray.push(dummydata.dumdata.lists[x])
                }
            }
        }
    }
    return (<div>
        {listarray.map((listi) =>
        <div key={listi.listId}>
        <Link href={"/lists/"+listi.listId.toString()}>{listi.nameL}</Link>
        </div>
        )}
    </div>)
}