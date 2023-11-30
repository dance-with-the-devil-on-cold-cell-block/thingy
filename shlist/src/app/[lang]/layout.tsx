import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:"Shlist",
  description:"",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
    </html>
  )
}
