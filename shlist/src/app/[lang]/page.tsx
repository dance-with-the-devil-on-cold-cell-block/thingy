import { Metadata } from 'next'
import LoginPrompt from './loginPrompt';
import { List, Add{ List, AddList } } from './lists';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Shlist',
  description: '',
}

let isLoggedIn:boolean = true;

export default async function Home() {
  var listsAvailable:boolean = false;
  var listarArray;
  if(isLoggedIn) {
  var listaJson;
  await fetch("http://localhost:3000/api/listitems", {
  method: "POST",
  headers: {
    "Content-Type": 'application/json'
  },
  body: (JSON.stringify({id:2}))
}).then((res) => listaJson = (res.json()))
  listarArray = await listaJson || undefined;
  if(listarArray != undefined) {
  listsAvailable = listarArray.data[0].length != 0;}
  }
  return (<>
  {isLoggedIn ? (
    <Suspense fallback={<p>loading...</p>}>
      <div className='mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:w-[80%]'>
        {listsAvailable ? (
          listarArray.data[0].map((listi:any) => {return(
          <List key={listi.nameL} listId={listi.listId} listName={listi.nameL}/>
        )
        })) : (
          <p>nopers uh uh fucko</p>
        )}
        <AddList/>
      </div>
    </Suspense>
    ) : (
      <LoginPrompt/>
    )
  }
    </>
  )
}
