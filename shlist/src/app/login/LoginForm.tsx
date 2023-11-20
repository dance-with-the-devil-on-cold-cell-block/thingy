"use client"
import { useState } from "react";
import { userCheck } from "./checkLogin";

export default function LoginForm(){
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const loginCheck = (e:any) => {
        e.preventDefault();
        userCheck(emailValue, pwValue)
        .then((res) => {
            if(res === true) {
                console.log("yes log in !!!")
            }
        })
    }
    return (<form className="grid grid-cols-[20%_80%] font-medium" onSubmit={loginCheck}>
        <label>Email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type="password" name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <button className="my-2 py-2 rounded-sm col-span-2 bg-white hover:bg-gray-200 text-black" type="submit">Log In</button>
    </form>)
}