import { Metadata } from 'next'
import { CredentialsProvider } from 'next-auth/providers/credentials';


export const metadata: Metadata = {
  title: 'Login | Shlist',
  description: '',
}


export default function Home() {
  return (<>
    <h1>Log In Now Maybe?</h1>
    <h1>todo:: next-auth</h1>
    </>
  )
}
