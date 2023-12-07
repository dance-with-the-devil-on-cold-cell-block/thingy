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
    <div onClick={(e) => {if(e.target === e.currentTarget){showModal(!modal)}}} className={`fixed w-screen h-screen ${modal ? "block" : "hidden"} top-0 bg-[#0000004b] z-50 flex justify-center items-center`}><ListModal/></div>
    </>
    )
}

function ListModal() {
    return (
        <div className="w-2/3 h-2/4 z-100 bg-white">
            <h1>modal!</h1>
        </div>
    )
}

export function List({listId, listName}:{listId:string, listName:string}) {
    return (<div className="mx-auto my-16">
    <Link href={"/lists/"+listId}>
        <div className="bg-primary/80 dark:bg-white hover:bg-primary dark:hover:bg-white/80 text-white dark:text-teal-600 font-medium p-2 text-2xl w-36 sm:w-48 h-36 sm:h-48 rounded-2xl shadow-sm">{listName}</div>
    </Link>
    </div>
    )
}