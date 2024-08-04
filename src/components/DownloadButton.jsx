import React, { useContext } from 'react'
import { BiSolidDownload } from "react-icons/bi";
import VideoContext from '../contexts/VideoContext';


export const DownloadButton = () => {

    const { videoData } = useContext(VideoContext);
    console.log("button", videoData);
    const url = videoData.videos.items[0].url


    return (
        <div className=''>
            <button download={url} onClick={(e) => console.log(e.target)} type='button' id=''
                className='text-white bg-lime-400 rounded p-2 ps-4 pe-4 font-normal flex items-center'>
                <BiSolidDownload style={{ fontSize: '1rem', marginRight: '2px' }} />
                Download
            </button>
        </div>
    )
}
