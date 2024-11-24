import React from 'react'

function Card3({ imgURL, text1, text2, text3 }) {
    return (
        <div className='flex flex-col space-y-4 md:col-span-1 col-span-3 p-4'>
            <img src={imgURL} className='w-full' alt="" />
            <p className='text-2xl'>{text1}</p>
            <p className='text-zinc-500'>{text2}</p>
            <p className='pr-2 border-b text-sm border-black w-fit'>{text3}</p>
        </div>
    )
}

export default Card3