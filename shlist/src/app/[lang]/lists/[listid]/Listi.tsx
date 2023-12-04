import dummydata from "../../../../public/dummydata.json"

export default function Listi({id, name}: {id:any, name:string}) {
    return (<>
    <h1>Shopping List Name: {name}</h1>
    <h2>ID: {id}</h2><br/>
    <div className="mx-auto w-[75%] xl:w-[60em] bg-primary font-medium border-2 border-black/20 rounded-md shadow-md">
    <h2 className="border-b-4 border-darkPrimary bg-primary rounded-t text-white p-2">{name}:</h2>
    <ul>
        {dummydata.dumdata.listitems.map((hlutur) => {
            if(hlutur.listId == id){
                return(<li><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">{dummydata.dumdata.items[hlutur.itemId-1].itemName}: {hlutur.quantity}</div></li>)
           }
        })}
        <li><div className="rounded-b bg-white/90 hover:bg-white/80 text-black/80 p-2">+ Add item</div></li>
    </ul>
    </div>
    </>)
}