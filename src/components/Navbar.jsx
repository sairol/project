import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Navbar */}
            <div className={`flex justify-between items-center p-4 py-8 w-full ${isMenuOpen ? 'h-96' : 'h-[10vh]'} transition-all`}>
                {/* Left Side: Icons */}
                <div className="hidden space-x-2 items-center md:flex">
                    {/* Your SVG icons */}
                    <span className="h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="h-6 w-6">
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
                            </g>
                        </svg>
                    </span>
                    <span className="h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="h-6 w-6">
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path>
                            </g>
                        </svg>
                    </span>
                    <span className="h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="h-6 w-6">
                            <g color="rgba(14, 16, 17, 0.6)" weight="light">
                                <path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path>
                            </g>
                        </svg>
                    </span>
                </div>

                {/* Center Section (Links) */}
                <div className="hidden md:flex flex-grow justify-center space-x-4 items-center">
                    <Link to="/">
                        <span className="font-medium px-2 py-1">HOME</span>
                    </Link>
                    <Link to="/work">
                        <span className="font-medium px-2 py-1">PROJECTS</span>
                    </Link>
                    <Link to="/">
                        <span className="font-medium px-2 py-1">SERVICES</span>
                    </Link>
                    <Link to="/">
                        <span className="text-3xl px-2 py-1">AYANO</span>
                    </Link>
                    <Link to="/studio">
                        <span className="font-medium px-2 py-1">STUDIO</span>
                    </Link>
                    <Link to="/blog">
                        <span className="font-medium px-2 py-1">NEWS</span>
                    </Link>
                    <Link to="/">
                        <span className="font-medium px-2 py-1">CONTACT</span>
                    </Link>
                </div>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-3xl px-2 py-1">
                        {isMenuOpen || (<div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="h-6 w-6">
                                <path d="M32,56H224a8,8,0,0,0,0-16H32A8,8,0,0,0,32,56Zm0,48H224a8,8,0,0,0,0-16H32A8,8,0,0,0,32,104Zm0,48H224a8,8,0,0,0,0-16H32A8,8,0,0,0,32,152Zm0,48H224a8,8,0,0,0,0-16H32A8,8,0,0,0,32,200Z" />
                            </svg>
                        </div>)}
                    </button>
                </div>
            </div>

            {/* Popup Menu (Visible on mobile when hamburger is clicked) */}
            {isMenuOpen && (
                <div className="absolute top-10 left-0 w-full bg-opacity-80 flex flex-col items-center space-y-4 h-80">
                    <Link to="/" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">HOME</span>
                    </Link>
                    <Link to="/work" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">PROJECTS</span>
                    </Link>
                    <Link to="/" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">SERVICES</span>
                    </Link>
                    <Link to="/" onClick={toggleMenu}>
                        <span className="text-3xl px-2 py-1">AYANO</span>
                    </Link>
                    <Link to="/studio" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">STUDIO</span>
                    </Link>
                    <Link to="/blog" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">NEWS</span>
                    </Link>
                    <Link to="/" onClick={toggleMenu}>
                        <span className="font-medium px-2 py-1">CONTACT</span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
