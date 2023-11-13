import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { useEffect } from 'react';
import LoginPrompt from './loginPrompt';

export const metadata: Metadata = {
  title: 'Shlist',
  description: '',
}

let isLoggedIn:boolean = false;

export default function Home() {
  return (<>
  {isLoggedIn ? (
    <h1>loged</h1>
    ) : (
      <LoginPrompt/>
    )
  }
    </>
  )
}
