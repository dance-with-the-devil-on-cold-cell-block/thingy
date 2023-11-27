import { Metadata } from 'next'
import LoginPrompt from './loginPrompt';
import List from './lists';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Shlist',
  description: '',
}

let isLoggedIn:boolean = true;



export default async function Home() {
  var listaJson;
  await fetch("http://localhost:3000/api/listitems", {
  method: "POST",
  headers: {
    "Content-Type": 'application/json'
  },
  body: (JSON.stringify({id:1}))
}).then((res) => listaJson = (res.json()))
  let listarArray = await listaJson!
  console.log(listarArray.data)
  return (<>
  {isLoggedIn ? (
    <Suspense fallback={<p>loading...</p>}>
      {listarArray.data[0].map((listi:any) => {return(<>
        <List key={listi.nameL} listId="1" listName={listi.nameL}/>
      </>)
      })}
    </Suspense>
    ) : (
      <LoginPrompt/>
    )
  }
    </>
  )
}
