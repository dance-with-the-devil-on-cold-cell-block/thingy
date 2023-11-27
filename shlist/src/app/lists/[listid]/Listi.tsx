import dummydata from "../../../../public/dummydata.json"

export default function Listi({id, name}: {id:any, name:string}) {
    return (<>
    <h1>Shopping List Name: {name}</h1>
    <h2>ID: {id}</h2><br/>
    <h2>Shopping List Items:</h2>
    <ul>
        {dummydata.dumdata.listitems.map((hlutur) => {
            if(hlutur.listId == id){
                return(<li key={hlutur.listId}>{dummydata.dumdata.items[hlutur.itemId-1].itemName}: {hlutur.quantity}</li>)
           }
        })}
    </ul>
    </>)
}