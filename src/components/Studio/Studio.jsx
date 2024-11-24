import React from 'react'
import Stats from './Stats';
import CardL from './CardL';

function Studio() {
    return (
        <div className='p-4'>
            <div className='relative'>
                {/* Text positioned at the top center horizontally */}
                <div className='absolute top-4 left-1/2 transform -translate-x-1/2 text-center'>
                    <span className='text-zinc-300 text-xl'>OSLO</span>
                    <p className='text-5xl text-white'>Studio</p>
                </div>

                {/* Image */}
                <img
                    src="https://framerusercontent.com/images/mSehSXJvOWYFNgBWmLquwwGHJfk.webp"
                    className='w-full h-[90vh] object-cover'
                    alt="Studio"
                />
            </div>

            <div className='grid grid-cols-2 gap-8 px-4 pt-20 pb-20'>
                <span className='md:col-span-1 col-span-2 md:text-6xl text-3xl leading-snug'>
                    Innovative Architecture
                    with a Personal Touch
                </span>

                <div className='md:col-span-1 col-span-2 flex flex-col space-y-4 pr-12'>
                    <span className='md:text-2xl text-lg font-extralight text-zinc-700 pt-4 leading-8'>
                        Welcome to our Oslo-based architecture studio, where creativity meets functionality in every design. We specialize in commercial, multipurpose, and residential architecture, crafting spaces that not only meet your needs but also inspire and delight. Our approach is rooted in a deep understanding of each client's vision, allowing us to tailor our designs to reflect your unique style and requirements.<br />
                    </span>

                    <span className='text-zinc-500 leading-6'>
                        Our team is committed to integrating cutting-edge technology with sustainable practices, ensuring that every project is both forward-thinking and environmentally responsible. From bustling commercial hubs to versatile multipurpose venues and personalized residential homes, we strive to create environments that enhance user experiences and stand the test of time.<br />
                    </span>

                    <span className='text-zinc-500 leading-6'>
                        Collaboration is at the heart of our process. We work closely with you to ensure that every detail aligns with your goals, resulting in spaces that are not only functional but also meaningful. Our dedication to excellence and innovation drives us to push the boundaries of architecture, delivering exceptional results that elevate the way people live and work. Let us bring your architectural dreams to life with our expertise and passion for design.
                    </span>
                </div>
            </div>

            <div className='md:px-20'>
                <hr/>
                <Stats />
                <hr/>
            </div>

            <div className='grid grid-cols-3 gap-8 pb-12'>
                <CardL imgURL="https://framerusercontent.com/images/38XkVw3vOOXLkn8xjqQMElbHIk.webp?scale-down-to=1024" role="SENIOR ARCHITECT" name="Lars Johansen" desc="Lars brings a wealth of experience in commercial architecture, innovative designs that enhance functionality." />
                <CardL imgURL="https://framerusercontent.com/images/3ehHyId8G0vs8krJjLYAVwi5lI.webp?scale-down-to=1024" role="PROJECT MANAGER" name="Erik Pedersen" desc="Erik develops flexible spaces that accommodate various functions and enhance community interactions." />
                <CardL imgURL="https://framerusercontent.com/images/JQcrzKnl4eydyP4cu9cIjC4SzM.webp?scale-down-to=1024" role="CREATIVE DIRECTOR" name="Ingrid Berg" desc="Innovative designer with a focus on commercial architecture, Ingrid blends creative solutions with practical design." />
                <CardL imgURL="https://framerusercontent.com/images/sl1O3eBkMxEKlHwhDlNvx21eE.webp?scale-down-to=1024" role="RESIDENTIAL ARCHITECT" name="Martin Olsen" desc="Martin creates custom homes that combine personal style with comfort and sustainable solutions." />
                <CardL imgURL="https://framerusercontent.com/images/6NOxUrAHojlBkM7VU36QC8GPUA.webp?scale-down-to=1024" role="ENVIRONMENT ARCHITECT" name="Anna Nyberg" desc="Anna integrates eco-friendly materials and practices to ensure energy efficiency and environmental responsibility.." />
                <CardL imgURL="https://framerusercontent.com/images/CpB7v6LzkBOkM7rowX5H0neoCE.webp?scale-down-to=1024" role="DESIGN ARCHITECT" name="Sara Hansen" desc="Sara combines versatility with functionality to meet diverse needs and improve user experiences." />
            </div>
            <hr/>
        </div>
    )
}

export default Studio;
