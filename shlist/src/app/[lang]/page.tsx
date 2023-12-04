import { Metadata } from 'next'
import LoginPrompt from './loginPrompt';
import Lists from './lists';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Shlist',
  description: '',
}

let isLoggedIn:boolean = true;

export default function Home() {
  return (<>
  {isLoggedIn ? (
    <Suspense fallback={<p>loading...</p>}>
      <Lists userId="1"/>
    </Suspense>
    ) : (
      <LoginPrompt/>
    )
  }
    </>
  )
}
