import { Metadata } from 'next'
import { CredentialsProvider } from 'next-auth/providers/credentials';
import RegisterForm from './RegisterForm';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export const metadata: Metadata = {
  title: 'Register | Shlist',
  description: '',
}


export default function Home() {
  if(Boolean(cookies().get('userToken')?.value)) {
    redirect("/")
  }
  return (<>
    <div className="mx-auto w-[24em] md:w-[32em]">
      <h1 className="col-span-2 my-10 text-4xl font-bold text-center">You should register yourself Now!!!</h1>
      <RegisterForm/>
      <p className="col-span-2">Hefur account? <Link className="text-blue-600 dark:text-blue-400 hover:underline" href="/login">Log In</Link></p>
    </div>
    </>
  )
}
