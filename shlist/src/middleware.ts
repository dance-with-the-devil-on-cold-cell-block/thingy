import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'is']
let defaultLocale = 'en-US'

match(languages, locales, defaultLocale) // -> 'en-US'
 
function parseLanguageHeader(header:string) {
  // Split the header string into individual language entries
  const languageEntries = header.split(',');

  // Filter and map the entries to extract language codes
  const languageArray = languageEntries
    .map(entry => entry.trim().split(';')[0]) // Extract language code
    .filter(entry => entry.length > 0); // Filter out empty entries

  return languageArray;
}

// Get the preferred locale, similar to the above or using a library
function getLocale(request:NextRequest) {
  let headerlocales = request.headers.get('accept-language');
  console.log(headerlocales)
  let parsedlang = (parseLanguageHeader(headerlocales))
  return match(parsedlang, locales, defaultLocale)
 }
 
export function middleware(request:NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}