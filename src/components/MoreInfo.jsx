import React from 'react'

function MoreInfo({ text1, text2, text3 }) {
    return (
        <div className='flex flex-col h-60 md:col-span-1 col-span-4 p-4'>

            <span className=''>{text1}</span>

            <p className='text-7xl pt-14'>{text2}</p>
            <span className='pr-4'>{text3}</span>

        </div>
    )
}

export default MoreInfo