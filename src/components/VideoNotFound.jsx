import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { MdError } from "react-icons/md";

export const VideoNotFound = () => {
    return (
        <>
            <div className='w-[28rem] border rounded flex flex-row justify-center 
            items-center p-2 bg-red-50 lg:w-[48rem]' >
                <MdError className='text-red-600 me-2' />
                <p className='text-red-600'>
                    0 search results found.
                </p>
            </div>
        </>
    )
}
