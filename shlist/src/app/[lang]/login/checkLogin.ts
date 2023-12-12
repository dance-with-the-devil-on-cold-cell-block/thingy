"use server"
import { cookies } from 'next/headers'

export async function userCheck(email:string, password:string) {
    const loginCheck = await fetch("http://localhost:3000/api/login", {
        method:"POST",
        body:JSON.stringify({email:email, passwd:password})}).then(res => res.json())
    if(Boolean(loginCheck.data[0][0].userId)) {
        let expiryDate = new Date;
        expiryDate.setDate(expiryDate.getDate() + 3)
        cookies().set('userToken', loginCheck.data[0][0].userId, {secure:true, expires:expiryDate})
        return true
    }else {
        return false
    }
}