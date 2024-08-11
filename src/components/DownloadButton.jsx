import React, { useContext } from 'react'
import { BiSolidDownload } from "react-icons/bi";
import VideoContext from '../contexts/VideoContext';


export const DownloadButton = () => {

    const { videoData, setvideoData } = useContext(VideoContext);
    const videoItems = videoData.adaptiveFormats;
    const length = Object.keys(videoData).length;

    const uniqueItems = Array.from(new Map(videoItems?.
        map(item => [item.height, item])).values());
    const mp4Formats = videoItems.filter(format => format.mimeType.includes('video/mp4'));
    // console.log('DownloadButton: ', mp4Formats);

    const downloadVideo = (e) => {
        console.log('downloadVideo called');
        console.log('mp4Formats from DownloadButton :', mp4Formats);
    };

    return (
        <div className=''>
            <button onClick={downloadVideo} type='button' id=''
                className='text-white bg-green-600 rounded p-1.5 ps-3 pe-3 font-normal flex items-center hover:bg-green-700'>
                <BiSolidDownload style={{ fontSize: '1rem', marginRight: '2px' }} />
                Download
            </button>
        </div>
    )
}
