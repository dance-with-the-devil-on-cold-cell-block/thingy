"use client"
import { checkEmail } from "./CheckEmail";
import { useState } from "react";

export default function RegisterForm(){
    const [nafnValue, setNafn] = useState('');
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
        console.log(`Nafn: ${nafnValue}
Email: ${emailValue}
password1: ${pwValue}
password2: ${pw2Value}`)
    }
    return (<form onSubmit={swagform}>
        <label>Nafn</label>
        <input type="text" name="nafn" value={nafnValue} onChange={(e) => setNafn(e.target.value)} required/>
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