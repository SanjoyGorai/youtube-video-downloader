import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-5 mb-5 w-full'>
           {/* <hr className='mt-5 mb-5 w-full' /> */}
            <div className='mt-5'>©2024 Y2meta.app</div>
            <div className='flex justify-center mt-3'>
                <a href="" className=' text-yellow-500 font-normal cursor-pointer hover:underline hover:text-pink-500'> About </a>
                <a href="" className='ms-5 text-yellow-500 font-normal cursor-pointer hover:underline hover:text-pink-500'> Contact </a>
                <a href="" className='ms-5 text-yellow-500 font-normal cursor-pointer hover:underline hover:text-pink-500'> Terms of Service </a>
                <a href="" className='ms-5 text-yellow-500 font-normal cursor-pointer hover:underline hover:text-pink-500'> Privacy Policy </a>
            </div>
        </div>
    )
}
