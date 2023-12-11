import { notFound } from "next/navigation"
import Listi from "./Listi"
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { listid: number }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.listid
 
  // fetch data
  const product = await fetch("http://localhost:3000/api/listdeetz", {
    method:"POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: id})})
    .then((res) => res.json());
    if(product.data[0].length === 0) {
      return {
        title: "Not Found | Shlist",
        openGraph: {
          title:"Listamynd",
          description:"yo"
        },
      }
    }
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: product.data[0][0].nameL + " | Shlist",
    openGraph: {
      title:"Listamynd",
      description:"yo"
    },
  }
}

export default function Page({ params }: { params: { listid: number } }) {
    return (<>
            <Listi id={params.listid}/>
    </>)
}