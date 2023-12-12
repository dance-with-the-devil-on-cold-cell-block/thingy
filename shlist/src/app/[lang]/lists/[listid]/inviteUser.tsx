"use server"
import { cookies } from "next/headers";

export default async function addAnItem(invemail:string, listid:string) {
    const swag = await fetch("http://localhost:3000/api/adduseer", {
        method:"POST",
        body: JSON.stringify({
            aemil:invemail,
            lislis:listid,
            pid:cookies().get('userToken')?.value
        })
    })
}