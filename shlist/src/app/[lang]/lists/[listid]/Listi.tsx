"use client"
import { useState, useEffect } from 'react';


export default function Listi({id}: {id:number}) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
        function getListshit(){
        fetch("http://localhost:3000/api/listdeetz", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            next: { revalidate:60 },
            body: JSON.stringify({id: id})})
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          setTimeout(getListshit, 30000)
        })}
        getListshit()

    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (<>
    <h1>Shopping List Name: {data.data[0][0].nameL}</h1>
    <h2>ID: {id}</h2><br/>
    <div className="mx-auto w-[75%] xl:w-[60em] bg-primary font-medium border-2 border-black/20 rounded-md shadow-md">
    <h2 className="border-b-4 border-darkPrimary bg-primary rounded-t text-white p-2">Shopping List Items:</h2>
    <ul>
        { Boolean(data.data[0][0].itemsDetails) ? (JSON.parse(data.data[0][0].itemsDetails).map((hlutur:any) => {console.log(hlutur);return(<li key={hlutur.id}><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">{hlutur.name}: {hlutur.count}</div></li>)})) : <li><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">Ekkert í lista!</div></li>}
      <li><div className="rounded-b bg-white/90 hover:bg-white/80 text-black/80 p-2">+ Add item</div></li>
    </ul>
        </div>
    </>)
}