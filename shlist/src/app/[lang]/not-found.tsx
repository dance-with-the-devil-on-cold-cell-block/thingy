import { Metadata } from "next"
import BackButton from "./backButton"

export const metadata: Metadata = {
    title: 'Shlist | 404!',
    description: '',
  }

export default function NotFound() {
    return(<><h1>404 not found</h1>
    <BackButton />
    </>)
}