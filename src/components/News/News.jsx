import React from 'react'
import CardN from './CardN'

function News() {
    return (
        <div className='md:p-8 p-2'>
            <span className='md:text-6xl text-3xl flex justify-center'>
                Blog
            </span>

            <div className='grid grid-cols-3 gap-8 p-4'>
                <CardN imgURL="https://framerusercontent.com/images/GFLSz8jaTsvlUvuI3o2WIlAF5wU.webp?scale-down-to=512" text1="Sustainable Design: Building a Greener Future in Architecture" text2="Explore eco-friendly materials and innovative practices that are shaping the future of sustainable architecture, reducing environmental impact significantly." />
                <CardN imgURL="https://framerusercontent.com/images/XcKCP3X9vk8eGYijbOiafGnKJ5M.webp?scale-down-to=1024" text1="Maximizing Space: Tips for Multipurpose Architecture" text2="Learn how to create versatile, adaptable spaces that meet various needs, optimizing functionality and flexibility in architectural design." />
                <CardN imgURL="	https://framerusercontent.com/images/psh8uKmMhwIBlQBBEHO5xUWABnM.webp?scale-down-to=1024" text1="Enhancing Business through Thoughtful Design" text2="Architectural design can improve customer experiences, boost productivity, and drive success in commercial environments." />
                <CardN imgURL="	https://framerusercontent.com/images/cQZAK7njAeNfwW4PUSG3XhnM8gk.webp?scale-down-to=1024" text1="Residential Architecture: Crafting Personalized Living Spaces" text2="Delve into the art of designing homes that reflect personal styles, ensuring comfort, functionality, and aesthetic appeal." />

                <CardN imgURL="https://framerusercontent.com/images/gENYekLjwvmvfVtN8JiecHAgCjI.webp?scale-down-to=1024" text1="Oslo's Architectural Gems: Inspiration from Our City" text2="Take a tour of Oslo’s most iconic buildings and landmarks, and find inspiration for your next architectural project." />

                <CardN imgURL="https://framerusercontent.com/images/ISEMwhktMRi6V4psnWA9fqzRvN4.webp?scale-down-to=1024" text1="The Role of Technology in Modern Architecture" text2="Examine how cutting-edge technology is revolutionizing architecture, enhancing design precision, functionality, and sustainability." />

            </div>
        </div>
    )
}

export default News