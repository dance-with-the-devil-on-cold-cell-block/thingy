"use client"
import { useState, useEffect } from 'react';

export default function Listi({id}: {id:number}) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
        fetch("http://localhost:3000/api/listdeetz", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            next: { revalidate:60 },
            body: JSON.stringify({id: id})})
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (<>
    <h1>Shopping List Name: {data.data[0][0].nameL}</h1>
    <h2>ID: {id}</h2><br/>
    <h2>Shopping List Items:</h2>
    <ul>
        {data.data[0][0].itemsDetails.map((hlutur:any) => {
                return(<li key={hlutur.id}>{hlutur.name}: {hlutur.count}</li>)
        })}
    </ul>
    </>)
}