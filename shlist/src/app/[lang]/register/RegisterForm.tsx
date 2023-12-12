"use client"
import { useRouter } from "next/navigation";
import { checkEmail, registerUser } from "./registerCommands";
import { useState } from "react";

export default function RegisterForm(){
    const router = useRouter()
    const [firstnafnValue, setFirstnafn] = useState('');
    const [lastnafnValue, setLastnafn] = useState('');
    const [emailValue, setEmail] = useState('');
    const [pwValue, setPw] = useState('');
    const [pw2Value, setPw2] = useState('');
    const [showPassword, setPasswordVisibility] = useState (false)
    const [showPassword2, setPasswordVisibility2] = useState (false)
    const swagform = (e:any) => {
        e.preventDefault();
        checkEmail(emailValue)
        .then((res) => {
            if(res === true) {
                if(pwValue === pw2Value) {
                    let userID = registerUser(firstnafnValue, lastnafnValue, emailValue, pwValue);
                    if(Boolean(userID)) {
                        router.push("/")
                    }
                }else {
                    console.log("password not match error!!!! noooo!!")
                }
            }else {
                console.log("email error!!!! no!!!!")
            }
        })
    }
    return (<form className="grid grid-cols-[30%_70%] font-medium" onSubmit={swagform}>
        <label className="col-span-2 md:col-span-1">Fornafn</label>
        <input className="col-span-2 md:col-span-1" type="text" name="nafn" value={firstnafnValue} onChange={(e) => setFirstnafn(e.target.value)} required/>
        <label className="col-span-2 md:col-span-1">Eftirnafn</label>
        <input className="col-span-2 md:col-span-1" type="text" name="nafn" value={lastnafnValue} onChange={(e) => setLastnafn(e.target.value)} required/>
        <label className="col-span-2 md:col-span-1">Email</label>
        <input className="col-span-2 md:col-span-1" type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <label className="col-span-2 md:col-span-1">Password</label>
        <input className="col-span-2 md:col-span-1" type={showPassword ? "text" : "password"} name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <div className="cursor-pointer select-none" onClick={(e) => {setPasswordVisibility(!showPassword)}}>Show Password!!</div>
        <label className="col-span-2 md:col-span-1">Repeat Password</label>
        <input className="col-span-2 md:col-span-1" type={showPassword2 ? "text" : "password"} name="pw2"  value={pw2Value} onChange={(e) => setPw2(e.target.value)} required/>
        <div className="cursor-pointer select-none" onClick={(e) => {setPasswordVisibility2(!showPassword2)}}>Show Password 2!!</div>

        <button className="my-2 py-2 rounded-[4px] col-span-2 bg-primary/80 hover:bg-primary dark:hover:bg-primary/60 text-white" type="submit">Register</button>
    </form>)
}