import React from 'react'
import { Link } from 'react-router-dom'
import CardQ from './CardQ'





function Project() {
    return (
        <div className='pt-16 '>
            <div className='flex justify-center px-6 items-baseline'>
                <p className='md:text-5xl text-3xl'>Projects</p>
            </div>
            <div className='grid-cols-1 grid grid-rows-2 gap-x-8 gap-y-2 pt-4 pb-20'>
                <CardQ imgURL="https://framerusercontent.com/images/pZZK9dzVATFkBuwi8wbm9r5sR4.webp" text1="Harborview Office" text2="RESIDENTIAL" text3="2025" />
                <CardQ imgURL="https://framerusercontent.com/images/cxzxC0muXXKc4Xd07KCydRb7A.webp" text1="Nordic Serenity" text2="MULTIPURPOSE" text3="2024" />
                <CardQ imgURL="https://framerusercontent.com/images/YBZT5o0sZuUJyJ7XjY9rTNvJjI.webp" text1="Green City" text2="COMMERCIAL" text3="2023" />
                <CardQ imgURL="https://framerusercontent.com/images/YwPI3yvMQnDZ86DuU0CU2CBy4.webp" text1="New Culture" text2="COMMERCIAL" text3="2024" />
            </div>
        </div>
    )
}

export default Project