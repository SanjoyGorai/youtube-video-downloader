import React from 'react'
import { Link } from "react-router-dom";
import { Dropdown } from 'rsuite';

export const Navbar = () => {
    return (
        <div className='flex items-center justify-between  '>
            <ul className='flex items-center'>
                <Link to={'./'}> <img src="./logo.png" alt="" className='h-16 p-2' /></Link>
                <Link href=""> <h1 className='text-2xl text-blue-100 font-bold hover:text-pink-600'>Y2Meta.app</h1></Link>
            </ul>
            <div className='hidden md:flex flex-row justify-evenly'>
                <Link href="" className=' text-blue-100 font-normal hover:text-pink-500 '>Youtube HD 4K</Link>
                <Link href="" className='ms-4 text-blue-100 font-normal hover:text-pink-500 '> Youtube to to MP4  </Link>
                <Link href="" className='ms-4 text-blue-100 font-normal hover:text-pink-500 '> Youtube to to MP3  </Link>
                <Dropdown title="English" trigger="hover" className=' text-blue-100 font-normal ms-2 hover:text-pink-500'>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Hindi</Dropdown.Item>
                    <Dropdown.Item>Bengali</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Chinese</Dropdown.Item>
                </Dropdown>
            </div>

        </div>
    )
}
