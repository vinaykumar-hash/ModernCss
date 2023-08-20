import React from 'react'
const HomePage = () => {
  return (
    <div className='HomePage w-full px-2 py-4'>
        {/* <div className='h-40 w-40 blur-3xl bg-navbarColor-400 opacity-10 absolute top-0 left-0'></div> */}
        <div className='m-4'>
            <div className='text-2xl mx-2 font-semibold text-navbarColor-400'>Cursor</div>
            <div className='Homepagecat1_container sm:h-32 h-32 w-full px-2 py-2 flex justify-start items-center gap-2'>
                {/* <div className='homepage_item w-1/4 h-full bg-primary-300 rounded-lg overflow-hidden hover:scale-105 transition-all hover:shadow-lg'>
                </div> */}
            </div>
        </div>
        <div className='m-4'>
            <div className='text-2xl mx-2 font-semibold text-navbarColor-400'>Loading Bar</div>
            <div className='Homepagecat2_container sm:h-32 h-32 w-full px-2 py-2 flex justify-start items-center gap-2'>
                {/* <div className='homepage_item w-1/4 h-full bg-primary-300 rounded-lg overflow-hidden hover:scale-105 transition-all hover:shadow-lg'>
                </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default HomePage