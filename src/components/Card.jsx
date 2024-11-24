import React from 'react'

function Card({imgURL,text1 , text2}) {
  return (
    <div className='flex flex-col space-y-4 md:col-span-1 col-span-3'>
        <img src={imgURL} className='w-full' alt="" />
        <span className='text-2xl'>{text1}</span>
        <span className='pr-4 text-zinc-500'>{text2}</span>
        <span className='border-b border-black w-fit pr-2 font-light'>More Information</span>
    </div>
  )
}

export default Card