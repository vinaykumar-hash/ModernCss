import React from 'react'
const Iteminside = (name) => {
  return (
    <div className='w-full h-1/3 flex justify-center items-center sm:flex-row flex-col px-10 sm:gap-20 gap-10 mt-20'>
        <div className='ActiveElement sm:w-1/5 w-full h-40 rounded-lg flex justify-center items-center relative overflow-hidden'></div>
        <div>
          <h1 className='mod_name text-2xl font-semibold text-navbarColor-400'></h1>
          <div className='LangPercentage w-40 h-2 flex'>
            <div className='html_split bg-orange-500 h-full rounded-l-lg'></div>
            <div className='css_split bg-cyan-500  h-full'></div>
            <div className='js_split bg-red-500  h-full rounded-r-lg'></div>
          </div>
          <div className='flex mt-4'>
            <div className='flex justify-center items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-orange-500'></div>
              <div>Html</div>
            </div>
            <div className='flex justify-center items-center gap-2 mx-4'>
              <div className='w-2 h-2 rounded-full bg-cyan-500'></div>
              <div>Css</div>
            </div>
            <div className='flex justify-center items-center gap-2 mx-4'>
              <div className='w-2 h-2 rounded-full bg-red-500'></div>
              <div>Javascript</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Iteminside