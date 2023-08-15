import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import Category from '@/components/Category'
import HomePageFill from '@/components/HomePageFill'
import Categoryfill from '@/components/Categoryfill'
export const metadata = {
  title: 'ModernCSS',
  description: 'Modern css , custom css',
}

export default function RootLayout({children}) {
  return (
    <html>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
      <body>
        {children}
        <NavBar/>
        <div className='w-screen h-screen flex sm:justify-between justify-normal items-start sm:flex-row flex-col '>
          <Category/>
          <Categoryfill/>
          <HomePage/>
          <HomePageFill/>
        </div>
      </body>
    </html>
  )
}
