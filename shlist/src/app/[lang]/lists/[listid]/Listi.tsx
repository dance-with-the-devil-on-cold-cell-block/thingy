"use client"
import { useState, useEffect, useCallback } from 'react';
import addAnItem from './addItem';
import inviteUser from './inviteUser';
import { useRouter } from 'next/navigation';


const stores = [{name: "Bónus",value:"bonus"},
{name: "Krónan",value:"kronan"},
{name: "Nettó",value:"netto"},
{name: "Iceland",value:"iceland"},
{name: "Fjarðarkaup",value:"fjardarkaup"},
{name: "Hagkaup",value:"hagkaup"},
{name: "Furðufuglar og fylgifiskar",value:"tjorvi"},]


export default function Listi({id}: {id:number}) {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [modal, showModal] = useState(false);
    const [modal2, showModal2] = useState(false);
    const [itemName, setItem] = useState("");
    const [quantity, setQuant] = useState("");
    const [store, setStore] = useState("");
    const [inviteEmail, setInv] = useState("");
    function getListshit() {
        fetch("https://shli.st/api/listdeetz", {
            method:"POST",
            mode:'no-cors',
            headers: {'Content-Type': 'application/json'},
            next: { revalidate:60 },
            body: JSON.stringify({id: id})})
            .then(res => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })};
        getListshit();
        async function addItem(e:any) {
                    e.preventDefault()
                    await addAnItem(itemName, quantity, store, id)
                    .then(() => function(){getListshit(),showModal(false),clearItems()})}
    function clearItems() {
        setItem("");
        setQuant("");
        setStore("");
    }
    async function addUser(e:any) {
        e.preventDefault();
        await inviteUser(inviteEmail, id);
        router.refresh()
    }
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (<>
    <h1>Shopping List Name: {data['data'][0][0]['nameL']}</h1>
    <h2>ID: {id}</h2><br/>
    <button onClick={() => showModal2(!modal2)} >Add User</button>
    <div onClick={(e) => {if(e.target === e.currentTarget){showModal2(!modal2)}}}className={`fixed w-screen h-screen ${modal2 ? "block opacity-100" : "hidden opacity-0"} left-0 top-0 bg-[#0000004b] z-50 flex justify-center items-center`}><form className='w-1/4 h-1/4 bg-white text-black' onSubmit={addUser}><input placeholder='email' value={inviteEmail} onChange={(e) => setInv(e.target.value)}></input><button>Invite</button></form></div>
    <div className="mx-auto w-[75%] xl:w-[60em] bg-primary font-medium border-2 border-black/20 rounded-md shadow-md">
    <h2 className="border-b-4 border-darkPrimary bg-primary rounded-t text-white p-2">Shopping List Items:</h2>
    <ul>
        { Boolean(data['data'][0][0]['itemsDetails']) ? (JSON.parse(data['data'][0][0]['itemsDetails']).map((hlutur:any) => {return(<li key={hlutur.id}><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">{hlutur.name}: {hlutur.count}</div></li>)})) : <li><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">Ekkert í lista!</div></li>}
      <li><div onClick={() => showModal(!modal)} className="rounded-b bg-white/90 hover:bg-white/80 cursor-pointer text-black/80 p-2">+ Add item</div></li>
    </ul>
        </div>
        <div onClick={(e) => {if(e.target === e.currentTarget){showModal(!modal)}}} className={`fixed w-screen h-screen ${modal ? "block opacity-100" : "hidden opacity-0"} left-0 top-0 bg-[#0000004b] z-50 flex justify-center items-center`}>
            <form className='w-1/4 h-2/3 bg-white text-black' onSubmit={addItem}>
                <input placeholder="Item Name" required value={itemName} onChange={(e) => setItem(e.target.value)} ></input>
                <select placeholder="Store" required value={store} onChange={(e) => setStore(e.target.value)} >
                    <option value="" hidden disabled>Veldu búð..</option>
                    {stores.map((budir:any) => {
                    return <option key={budir.value} value={budir.value}>{budir.name}</option>})}
                </select>
                <input placeholder="Quantitty" type='number' required value={quantity} onChange={(e) => setQuant(e.target.value)} ></input>
                <button type='submit'>Donezo</button>
            </form>
        </div>
    </>)
}