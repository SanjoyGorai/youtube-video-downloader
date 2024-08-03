import React from 'react'
import { BiSolidDownload } from "react-icons/bi";


export const DownloadButton = (props) => {

    const handleDownload = () => {

    };
    return (
        <div className=''>
            <button onClick={props.click} type='button' id='download-btn'
                className='text-white bg-lime-400 rounded p-2 ps-4 pe-4 font-normal flex items-center'>
                <BiSolidDownload />
                Download
            </button>
        </div>
    )
}
