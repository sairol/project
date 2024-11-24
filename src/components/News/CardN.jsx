import React from 'react'

function CardN({ imgURL, text1, text2 }) {
    return (
        <div className='flex flex-col space-y-4 md:col-span-1 col-span-3 pt-8'>
            <img src={imgURL} className='w-full h-auto' alt="" />
            <p className='md:text-2xl text-lg pr-1'>{text1}</p>
            <p className='text-zinc-500'>{text2}</p>
            <p className='border-b w-fit border-zinc-700'>READ ARTICLE</p>
        </div>
    )
}

export default CardN