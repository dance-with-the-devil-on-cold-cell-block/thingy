"use server"

import { cookies } from "next/headers"

export async function checkEmail(emil:string) {
    console.log(emil)
    if(/*hérna kemur fetch til að sjá hvort email sé í db núþegar*/ true) {
        return true
    }
}

export async function registerUser(fname:string, lname:string, email:string, pw:string) {
    let data = await fetch("http://localhost:3000/api/register", {
        method:"POST",
        body:JSON.stringify({
            firstnam:fname,
            lastname:lname,
            email:email,
            passwd:pw
        })
    }).then(res => res.json())
    const userid = await data.data[0][0].userid
    let expiryDate = new Date;
    expiryDate.setDate(expiryDate.getDate() + 3)
    cookies().set('userToken', userid, {secure:true, expires:expiryDate})
    return userid
}

