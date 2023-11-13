import { notFound } from "next/navigation"

export default function Page({ params }: { params: { listid: number } }) {
    if(params.listid == 2) {
    return params.listid}
    else{
        notFound()
    }
}