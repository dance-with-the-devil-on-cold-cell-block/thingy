"use client"
import { useState } from "react";
import { userCheck } from "./checkLogin";

export default function LoginForm(){
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const loginCheck = (e:any) => {
        e.preventDefault();
        userCheck(emailValue, pwValue)
    }
    return (<form onSubmit={loginCheck}>
        <label>Email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <br/> <br/>
        <label>Password</label>
        <input type="password" name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <br/> <br/>
        <button type="submit">Log In</button>
    </form>)
}