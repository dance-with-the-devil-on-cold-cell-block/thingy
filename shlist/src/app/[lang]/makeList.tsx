"use server"

import { cookies } from "next/headers"

export default async function makeList(listName:string) {
    const listid = await fetch("http://localhost:3000/api/addlist", {
        method:"POST",
        body:JSON.stringify({
            laname:listName,
            uid:cookies().get('userToken')?.value
        })
    }).then(res => res.json())
    return listid
}