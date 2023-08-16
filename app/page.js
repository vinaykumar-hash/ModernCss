import { redirect } from 'next/navigation';
import React from 'react'
const Home = () => {
  redirect('/mainpage');
  return (
    <div></div>
  )
}

export default Home