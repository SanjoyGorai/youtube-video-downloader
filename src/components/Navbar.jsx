import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Dropdown } from 'rsuite';
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* desktop menu */}
            <div>
                <div className='hidden justify-between items-center md:flex lg:flex'>
                    <ul className='flex items-center'>
                        <Link to={'./'}> <img src="./logo.png" alt="" className='h-16 p-2' /></Link>
                        <Link href=""> <h1 className='text-2xl font-bold hover:text-pink-600'>Y2Meta.app</h1></Link>
                    </ul>
                    <div className='hidden md:flex flex-row justify-evenly lg:items-center'>
                        <Link href="" className='  font-normal hover:text-pink-500 '>Youtube HD 4K</Link>
                        <Link href="" className='ms-4  font-normal hover:text-pink-500 '> Youtube to to MP4  </Link>
                        <Link href="" className='ms-4  font-normal hover:text-pink-500 '> Youtube to to MP3  </Link>
                        <Link href="" className='ms-4  font-normal hover:text-pink-500 '> English  </Link>
                        {/* <Dropdown title="English" trigger="hover" className='border-none outline-none font-normal ms-2 hover:text-pink-500'>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Hindi</Dropdown.Item>
                    <Dropdown.Item>Bengali</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Chinese</Dropdown.Item>
                </Dropdown> */}
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div>
                <div className='flex justify-between items-center md:hidden lg:hidden'>
                    <ul className='flex items-center'>
                        <Link to={'./'}> <img src="./logo.png" alt="" className='h-16 p-2' /></Link>
                        <Link href=""> <h1 className='text-2xl font-bold hover:text-pink-600'>Y2Meta.app</h1></Link>
                    </ul>
                    <Link><IoMdMenu id='mobile-menu-button' style={{ fontSize: '1.8rem' }} /></Link>
                </div>
            </div>
            <div id='mobile-menu' className='sm:hidden md:hidden hidden flex-row justify-evenly lg:items-center'>
                <Link href="" className='  font-normal hover:text-pink-500 '>Home</Link>
                <Link href="" className='ms-4  font-normal hover:text-pink-500 '> Youtube to to MP4  </Link>
                <Link href="" className='ms-4  font-normal hover:text-pink-500 '> Youtube to to MP3  </Link>
                <Link href="" className='ms-4  font-normal hover:text-pink-500 '> English  </Link>
            </div>
        </>

    )
}


function mobileMenuByChatgpt(params) {
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800">Logo</span>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none sm:hidden">
                        {isOpen ? (
                            // Close (X) icon
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="hidden sm:flex sm:items-center">
                    <a href="#" className="text-gray-800 px-3 py-2 text-sm font-medium">Home</a>
                    <a href="#" className="text-gray-800 px-3 py-2 text-sm font-medium">About</a>
                    <a href="#" className="text-gray-800 px-3 py-2 text-sm font-medium">Services</a>
                    <a href="#" className="text-gray-800 px-3 py-2 text-sm font-medium">Contact</a>
                </div>
            </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <div className="sm:hidden">
                <a href="#" className="block text-gray-800 px-4 py-2 text-sm font-medium">Home</a>
                <a href="#" className="block text-gray-800 px-4 py-2 text-sm font-medium">About</a>
                <a href="#" className="block text-gray-800 px-4 py-2 text-sm font-medium">Services</a>
                <a href="#" className="block text-gray-800 px-4 py-2 text-sm font-medium">Contact</a>
            </div>
        )}
    </nav>

}