import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='mt-5 mb-5 w-full'>
            <hr className='mt-5 mb-5 w-full' />
            <div className='mt-5 '>©2024 Y2meta.app</div>
            <div className='flex flex-col justify-start text-start m-auto mt-3'>
                <Link href="" className='ms-3 font-normal cursor-pointer hover:underline hover:text-pink-500'> About </Link>
                <Link href="" className='ms-3 font-normal cursor-pointer hover:underline hover:text-pink-500'> Contact </Link>
                <Link href="" className='ms-3 font-normal cursor-pointer hover:underline hover:text-pink-500'> Terms of Service </Link>
                <Link href="" className='ms-3 font-normal cursor-pointer hover:underline hover:text-pink-500'> Privacy Policy </Link>
            </div>
        </div>
    )
}
