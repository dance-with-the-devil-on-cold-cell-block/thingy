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
    return (<form onSubmit={swagform}>
        <label>Fornafn</label>
        <input type="text" name="nafn" value={firstnafnValue} onChange={(e) => setFirstnafn(e.target.value)} required/>
        <br/> <br/>
        <label>Eftirnafn</label>
        <input type="text" name="nafn" value={lastnafnValue} onChange={(e) => setLastnafn(e.target.value)} required/>
        <br/> <br/>
        <label>Email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmail(e.target.value)} required/>
        <br/> <br/>
        <label>Password</label>
        <input type="password" name="pw" value={pwValue} onChange={(e) => setPw(e.target.value)} required/>
        <br/> <br/>
        <label>Repeat Password</label>
        <input type="password" name="pw2"  value={pw2Value} onChange={(e) => setPw2(e.target.value)} required/>
        <br/> <br/>
        <button type="submit">Register</button>
    </form>)
}