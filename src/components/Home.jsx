import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Card2 from './Card2'
import MoreInfo from './MoreInfo'
import Card3 from './Card3'

function Home() {
  return (
    <div className='p-8'>
      <div class="relative w-full z-0 h-[80vh] overflow-hidden">
        <img class="object-cover w-full h-full object-center" src="https://framerusercontent.com/images/SPJO56o1RMfNOdjIATSlc2gtUuI.webp" alt="" />
      </div>

      <div className=' text-center z-10 bg-red-500 flex flex-col text-white text-3xl -mt-40'>
        <span>Architecture </span>
        <span>Studio in Oslo</span>
        <Link className='flex flex-col pt-2'>
          <span className='text-sm text-zinc-200'>DISCOVER</span>
          <span className='-mt-3'>↓</span>
        </Link>
      </div>
      <div className=' grid grid-cols-2 gap-8 pt-40 p-10'>
        <div className='md:col-span-1 col-span-2'>
          <span className='md:text-6xl text-3xl font-thin'>
            Innovative Architecture,<br /> Inspired by Oslo
          </span>
        </div>
        <div className='md:col-span-1 col-span-2 flex flex-col space-y-4'>
          <span className='text-black text-xl'>
            With a commitment to innovation and excellence, we transform ideas into reality, creating spaces that are both aesthetically pleasing and highly functional. Let us help you shape the future of your built environment.
          </span>
          <span className='text-zinc-500'>
            At our Oslo-based architecture studio, we are dedicated to creating spaces that inspire and endure. Specializing in commercial, multipurpose, and residential architecture, we blend creativity with functionality to bring your vision to life. Our approach is rooted in sustainability, ensuring that each project not only meets current needs but also contributes positively to the environment.
          </span><span className='text-zinc-500'>
            Our team of passionate architects and designers works closely with clients, fostering a collaborative process that prioritizes your unique needs and preferences. We believe that the best designs come from understanding the nuances of each project, from the bustling energy of commercial spaces to the versatile requirements of multipurpose facilities and the personalized touches of residential homes.
          </span>
          <Link to="/" className='border-b-2 w-fit border-black'>MORE ABOUT US</Link>
        </div>
      </div>

      <div className='grid grid-cols-3 md:gap-12 gap-4 pb-16 pt-20'>
        <Card imgURL="https://framerusercontent.com/images/TX9LvKmdLsHElASz1jWLWg4oPBo.webp" text1="Commercial" text2="Designing innovative, functional commercial spaces that enhance business productivity and create memorable experiences." />
        <Card imgURL="https://framerusercontent.com/images/uz4FHTqzsqO1lT8PifRjcXupxU.webp" text1="Mulpurpose" text2="Creating versatile, adaptable spaces that seamlessly integrate various functions, catering to diverse needs and activities." />
        <Card imgURL="https://framerusercontent.com/images/ziWHvRolvmyHdnGMqmD4kZHm9w.webp" text1="Residential" text2="Crafting personalized, sustainable homes that blend comfort, style, and functionality for modern living." />
      </div>

      <hr />

      <div className='pt-16 '>
        <div className='flex md:justify-between justify-center px-6 items-baseline'>
          <p className='md:text-5xl text-3xl'>Latest Projects</p>
          <Link className='border-b border-black font-light hidden md:inline' to="/" >ALL PROJECTS</Link>
        </div>
        <div className='grid-cols-2 grid grid-rows-2 gap-x-8 gap-y-2 pt-4 pb-20'>
          <Card2 imgURL="https://framerusercontent.com/images/pZZK9dzVATFkBuwi8wbm9r5sR4.webp" text1="Harborview Office" text2="RESIDENTIAL" text3="2025" />
          <Card2 imgURL="https://framerusercontent.com/images/cxzxC0muXXKc4Xd07KCydRb7A.webp" text1="Nordic Serenity" text2="MULTIPURPOSE" text3="2024" />
          <Card2 imgURL="https://framerusercontent.com/images/YBZT5o0sZuUJyJ7XjY9rTNvJjI.webp" text1="Green City" text2="COMMERCIAL" text3="2023" />
          <Card2 imgURL="https://framerusercontent.com/images/YwPI3yvMQnDZ86DuU0CU2CBy4.webp" text1="New Culture" text2="COMMERCIAL" text3="2024" />
        </div>


        <hr />


        <div className='grid grid-cols-4 gap-8 pt-20 pb-20'>
          <MoreInfo text1="PROJECTS" text2="240+" text3="Delivering diverse architectural solutions, showcasing our expertise and creativity." />
          <div className='md:hidden flex border-b border-zinc-500 col-span-4 pt-16'>
          </div>

          <div className='md:border-l-2 md:border-r-2 border-zinc-600 md:col-span-1 col-span-4'>
            <MoreInfo text1="CLIENTS" text2="150+" text3="Building strong relationships through trust, collaboration, and exceptional service." />
          </div>
          <div className='md:hidden flex border-b border-zinc-500 col-span-4 pt-16'>
          </div>
          <div className='md:border-r-2 border-zinc-600 md:col-span-1 col-span-4'>
            <MoreInfo text1="HAPPY CLIENTS" text2="100%" text3="Client satisfaction is our top priority, reflected in glowing reviews." />
          </div>
          <div className='md:hidden flex border-b border-zinc-500 col-span-4 pt-16'>
          </div>
          <MoreInfo text1="COMMITMENT" text2="110%" text3="Going above and beyond to exceed expectations in every project." />
        </div>
      </div>

      <hr />


      {/*  */}
      <div className='py-8'>
        <div className='flex justify-between py-4 items-baseline'>
          <span className='md:text-5xl text-3xl px-6'>Latest News</span><span className='w-fit pr-2 inline border-b text-sm border-black'>VIEW ALL</span>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <Card3 imgURL="https://framerusercontent.com/images/GFLSz8jaTsvlUvuI3o2WIlAF5wU.webp" text1="Sustainable Design: Building a Greener Future in Architecture" text2="Explore eco-friendly materials and innovative practices that are shaping the future of sustainable architecture, reducing environmental impact significantly." text3="READ ARTICLE" />
          <Card3 imgURL="https://framerusercontent.com/images/XcKCP3X9vk8eGYijbOiafGnKJ5M.webp" text1="Maximizing Space: Tips for Multipurpose Architecture" text2="Learn how to create versatile, adaptable spaces that meet various needs, optimizing functionality and flexibility in architectural design." text3="READ ARTICLE" />
          <Card3 imgURL="https://framerusercontent.com/images/psh8uKmMhwIBlQBBEHO5xUWABnM.webp" text1="Enhancing Business through Thoughtful Design" text2="Architectural design can improve customer experiences, boost productivity, and drive success in commercial environments." text3="READ ARTICLE" />
        </div>
      </div>
    </div>
  )
}

export default Home