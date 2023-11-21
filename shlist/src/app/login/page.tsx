import { Metadata } from 'next'
import { CredentialsProvider } from 'next-auth/providers/credentials';
import LoginForm from './LoginForm';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Login | Shlist',
  description: '',
}


export default function Home() {
  return (<>
    <h1>Log In Now Maybe?</h1>
    <LoginForm/>
    <p>Hefur ekki account? <Link href="/register">Register</Link></p>
    </>
  )
}
