import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between items-center bg-red-400 text-black p-4 h-[10vh]'>
            <div>
                fa
            </div>
            <div className='space-x-4 items-center hidden md:flex'>
                <Link to="/">
                    <span className='font-medium  px-2 py-1'>
                        HOME
                    </span>
                </Link>
                <Link to="/">
                    <span className='font-medium  px-2 py-1'>
                        PROJECTS
                    </span>
                </Link>
                <Link to="/">
                    <span className='font-medium  px-2 py-1'>
                        SERVICES
                    </span>
                </Link>
                <Link to="/">
                    <span className='text-3xl  px-2 py-1'>
                        AYANO
                    </span>
                </Link>

                <Link to="/else">
                    <span className='font-medium px-2 py-1'>
                        STUDIO
                    </span>
                </Link>
                <Link to="/else">
                    <span className='font-medium px-2 py-1'>
                        NEWS
                    </span>
                </Link>
                <Link to="/else">
                    <span className='font-medium px-2 py-1'>
                        CONTACT
                    </span>
                </Link>
            </div>
            <div className='md:hidden inline'>
                <Link to="/">
                    <span className='text-3xl  px-2 py-1'>
                        AYANO
                    </span>
                </Link>
            </div>
            <div>
                dark
            </div>
        </div >
    )
}

export default Navbar