"use client"
import { useState } from "react";
import { userCheck } from "./checkLogin";
import { useRouter } from "next/navigation";

export default function LoginForm(){
    const router = useRouter();
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const loginCheck = (e:any) => {
        e.preventDefault();
        userCheck(emailValue, pwValue)
        .then((res) => {
            if(res === true) {
                router.push("/")
            }else {
                console.log("no!!!")
            }
        })
    }
    return (<form className="grid grid-cols-[30%_70%] font-medium" onSubmit={loginCheck}>
        <label className="col-span-2 md:col-span-1">Email</label>
        <input className="col-span-2 md:col-span-1" type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <label className="col-span-2 md:col-span-1">Password</label>
        <input className="col-span-2 md:col-span-1" type="password" name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <button className="my-2 py-2 rounded-[4px] col-span-2 bg-primary/80 hover:bg-primary dark:hover:bg-primary/60 text-white" type="submit">Log In</button>
    </form>)
}