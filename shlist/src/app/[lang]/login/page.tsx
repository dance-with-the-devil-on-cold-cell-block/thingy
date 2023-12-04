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
    <div className="mx-auto w-[24em] md:w-[32em]">
      <h1 className="col-span-2 my-10 text-4xl font-bold text-center">Log In Now Maybe?</h1>
      <LoginForm/>
      <p className="col-span-2">Hefur ekki account? <Link className="text-blue-600 dark:text-blue-400 hover:underline" href="/register">Register</Link></p>
    </div>
    </>
  )
}
