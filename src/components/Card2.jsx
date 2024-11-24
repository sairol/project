import React from 'react'

function Card2({imgURL,text1,text2,text3}) {
  return (
    <div className='flex flex-col space-y-4 md:col-span-1 col-span-2 p-4'>
        <img src={imgURL} className='w-full' alt="" />
        <div className='flex justify-between items-center'>
            <p className='text-2xl'>{text1}</p>
            <p className='text-sm'>{text2}<span className='pl-4'>{text3}</span></p>
        </div>
    </div>
  )
}

export default Card2