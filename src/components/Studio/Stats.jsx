import React from 'react'
import MoreInfo from '../MoreInfo'

function Stats() {
    return (
        <div className='grid grid-cols-4 gap-8 pt-20 pb-20'>
            <MoreInfo text1="PROJECTS" text2="240+" text3="Delivering diverse architectural solutions, showcasing our expertise and creativity." />
            <div className='md:hidden flex border-b border-zinc-400 col-span-4 pt-16'>
            </div>

            <div className='md:border-l-2 md:border-r-2 border-zinc-400 md:col-span-1 col-span-4'>
                <MoreInfo text1="CLIENTS" text2="150+" text3="Building strong relationships through trust, collaboration, and exceptional service." />
            </div>
            <div className='md:hidden flex border-b border-zinc-400 col-span-4 pt-16'>
            </div>
            <div className='md:border-r-2 border-zinc-400 md:col-span-1 col-span-4'>
                <MoreInfo text1="HAPPY CLIENTS" text2="100%" text3="Client satisfaction is our top priority, reflected in glowing reviews." />
            </div>
            <div className='md:hidden flex border-b border-zinc-400 col-span-4 pt-16'>
            </div>
            <MoreInfo text1="COMMITMENT" text2="110%" text3="Going above and beyond to exceed expectations in every project." />
        </div>
    )
}

export default Stats