"use client"
import './globals.css'
import { useEffect } from 'react'

// export const metadata = {
//   title: 'ModernCSS',
//   description: 'Modern css , custom css',
// }

export default function RootLayout({children}) {
  
  
  return (
    <html>
      <title>ModernCSS</title>
      <head>

      </head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
      <body>
        {children}
        {/* <Link id='navigate' href="/mainpage"></Link> */}
      </body>
    </html>
  )
}
