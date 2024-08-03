import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='flex items-center justify-between  '>
            <ul className='flex items-center'>
                <a to={'./'}> <img src="./logo.png" alt="" className='h-16 p-2' /></a>
                <a href=""> <h1 className='text-2xl text-blue-100 font-bold hover:text-pink-600'>Y2Meta.app</h1></a>
            </ul>
            <div className=' flex flex-row justify-evenly'>
                <a href="" className=' text-blue-100 font-normal hover:text-pink-500 '>Youtube HD 4K</a>
                <a href="" className='ms-4 text-blue-100 font-normal hover:text-pink-500 '> Youtube to to MP4  </a>
                <a href="" className='ms-4 text-blue-100 font-normal hover:text-pink-500 '> Youtube to to MP3  </a>
                <a href="" className=' ms-4 me-1 text-blue-100 font-normal hover:text-pink-500 '>English </a>
            </div>

        </div>
    )
}
