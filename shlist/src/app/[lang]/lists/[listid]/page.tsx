import { notFound } from "next/navigation"
import Listi from "./Listi"
import { Metadata } from "next"

export const metadata: Metadata = {
    title:"listi!",
    description:"",
  }

export default function Page({ params }: { params: { listid: number } }) {
    return (<>
            <Listi id={params.listid}/>
    </>)
}