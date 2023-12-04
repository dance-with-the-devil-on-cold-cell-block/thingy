"use client"
import { checkEmail } from "./registerCommands";
import { useState } from "react";

export default function RegisterForm(){
    const [firstnafnValue, setFirstnafn] = useState('');
    const [lastnafnValue, setLastnafn] = useState('');
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const [pw2Value, setPw2] = useState('');
    const swagform = (e:any) => {
        e.preventDefault();
        checkEmail(emailValue)
        .then((res) => {
            if(res === true) {
                if(pwValue === pw2Value) {
                    console.log("register!!!!!! yes!!!!")
                }else {
                    console.log("password not match error!!!! noooo!!")
                }
            }else {
                console.log("email error!!!! no!!!!")
            }
        })
    }
    return (<form className="grid grid-cols-[30%_70%] font-medium" onSubmit={swagform}>
        <label>Fornafn</label>
        <input type="text" name="nafn" value={firstnafnValue} onChange={(e) => setFirstnafn(e.target.value)} required/>
        <label>Eftirnafn</label>
        <input type="text" name="nafn" value={lastnafnValue} onChange={(e) => setLastnafn(e.target.value)} required/>
        <label>Email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type="password" name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <label>Repeat Password</label>
        <input type="password" name="pw2"  value={pw2Value} onChange={(e) => setPw2(e.target.value)} required/>

        <button className="my-2 py-2 rounded-[4px] col-span-2 bg-white hover:bg-gray-200 text-black" type="submit">Register</button>
    </form>)
}