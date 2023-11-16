import { Metadata } from 'next'
import { CredentialsProvider } from 'next-auth/providers/credentials';
import RegisterForm from './RegisterForm';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Register | Shlist',
  description: '',
}


export default function Home() {
  return (<>
    <h1>Register Now!!!</h1>
    <h1>todo:: next-auth</h1>
    <RegisterForm/>
    <p>Hefur account? <Link href="/login">Log In</Link></p>
    </>
  )
}
