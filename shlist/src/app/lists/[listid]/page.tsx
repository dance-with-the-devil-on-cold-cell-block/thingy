import { notFound } from "next/navigation"
import dummydata from "../../../../public/dummydata.json"
import Listi from "./Listi"
import { Metadata } from "next"

export default function Page({ params }: { params: { listid: number } }) {
    const listanumer = (Number(params.listid)-1);
    if(dummydata.dumdata.lists[listanumer].listId == listanumer+1) {
    return (<Listi id={dummydata.dumdata.lists[listanumer].listId} name={dummydata.dumdata.lists[listanumer].nameL}/>)}
    else{
        notFound()
    }
}