"use client";
import Link from "next/link"
import { useState } from "react";

export function AddList() {
    const [modal, showModal] = useState(false);
    return (<>
    <div className="mx-auto my-16" onClick={() => showModal(!modal)}>
        <div className="bg-black/10 dark:bg-primary hover:bg-[rgba(0,0,0,0.13)] dark:hover:bg-primary/80 w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm cursor-pointer">
            <svg width={"100%"} height={"100%"}>
                <line x1={"50%"} y1={"25%"} x2={"50%"} y2={"75%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
                <line x1={"25%"} y1={"50%"} x2={"75%"} y2={"50%"} strokeWidth={"20%"} stroke="white" strokeLinecap="round"></line>
            </svg>
        </div>
    </div>
    <div onClick={(e) => {if(e.target === e.currentTarget){showModal(!modal)}}} className={`fixed w-screen h-screen ${modal ? "block opacity-100" : "hidden opacity-0"} left-0 top-0 bg-[#0000004b] z-50 flex justify-center items-center`}><ListModal/></div>
    </>
    )
}

function ListModal() {
    return (<>
        <div className="w-[48em] h-4/5 z-100 bg-white text-black rounded-xl mx-8 py-4">
            <form className="flex flex-col mx-auto w-4/5 h-full">
                <h1 className="text-center font-bold text-4xl p-5">Gera lista</h1>
                <label className="mb-0 font-medium">Nafn lista:</label>
                <input placeholder="JFHAGUIAOFJIUFHU"></input>
                <div className="flex justify-between items-end pt-[50%]">
                    <button className="border-gray-300 active:border-gray-400/50 active: px-6 py-3 bg-gray-200 hover:bg-gray-300/80 rounded-full text-xl font-medium shadow-md">Cancel</button>
                    <button className="px-6 py-3 bg-primary/90 hover:bg-primary rounded-full text-white text-xl font-medium shadow-md">Confirm</button>
                </div>
            </form>
        </div>
    </>)
}

export function List({listId, listName}:{listId:string, listName:string}) {
    return (<div className="mx-auto my-16">
    <Link href={"/lists/"+listId}>
        <div className="bg-primary/80 dark:bg-white hover:bg-primary dark:hover:bg-white/80 text-white dark:text-teal-600 font-medium p-2 text-2xl w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">{listName}</div>
    </Link>
    </div>
    )
}