"use server"
export async function userCheck(email:string, password:string) {
    let loginCheck = await fetch("http://localhost:3000/api/login", {
        method:"POST",
        body:JSON.stringify({email:email, passwd:password})})
    if(loginCheck.status == 200) {
        return true
    }else {
        return false
    }
}