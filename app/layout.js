"use client"
import './globals.css'
import { useEffect } from 'react'

// export const metadata = {
//   title: 'ModernCSS',
//   description: 'Modern css , custom css',
// }

export default function RootLayout({children}) {
  useEffect(()=>{
    // let NewCursor = document.createElement("div")
    // NewCursor.classList.add("h-40","w-40","bg-navbarColor-400","fixed","blur-3xl","opacity-10")
    // NewCursor.style.zIndex = "-90"
    // document.querySelector("body").appendChild(NewCursor)
    // document.addEventListener("mousemove",(e)=>{
    //   NewCursor.style.top = e.pageY-50+"px"
    //   NewCursor.style.left = e.pageX-50+"px"
    // })
  },[])
  
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
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-0 left-32' style={{zIndex:"-90"}}></div>
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-96 right-96'></div>
        <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-10 right-10'></div>
        {/* <Link id='navigate' href="/mainpage"></Link> */}
      </body>
    </html>
  )
}
