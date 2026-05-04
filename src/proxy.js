import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(req) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

   if(!session){

    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);


    return NextResponse.redirect(loginUrl)
   }
     return NextResponse.next();

}
 
export const config = {
  matcher: ['/my-profile', '/product-details/:path']
}