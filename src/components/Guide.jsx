import React from 'react'
import { BsGiftFill } from "react-icons/bs";
import { FaAudioDescription } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";

export const Guide = () => {
    return (
        <div>

            <div className='flex flex-col justify-between mt-5 lg:flex lg:flex-row'>
                <div className='ms-3'>
                    <h4 className='text-xl font-semibold text-start'> Instructions</h4>
                    <ul className='text-start text-[17px]'>
                        <li className='mt-2 text-sky-50'>  1. Search by name or directly paste the link of video you want to <br /> convert </li>
                        <li className='mt-2 text-sky-50'> 2. Click "Start" button to begin converting process </li>
                        <li className='mt-2 text-sky-50'>  3. Select the video/audio format you want to download, then click <br /> "Download" button </li>
                    </ul>
                </div>
                <div className='ms-3 mt-3'>
                    <h4 className='text-xl font-semibold text-start'> Features</h4>
                    <ul className='text-start text-[17px]'>
                        <li className='mt-2 text-sky-50'> • Unlimited downloads and always free </li>
                        <li className='mt-2 text-sky-50'> • High-speed video converter </li>
                        <li className='mt-2 text-sky-50'>  • No registration requirement </li>
                        <li className='mt-2 text-sky-50'>  • Support downloading with all formats </li>
                    </ul>
                </div>
            </div>
            <hr className='mt-5 mb-5' />

            <div className='mt-4'>
                <h3 className='text-2xl font-bold'>Online YouTube Video Downloader</h3>
                <p className='text-[16px] mt-2 ms-2 me-5 '>Y2meta.app allows you to convert & download video from YouTube, Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD. Y2meta supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube and other websites.</p>
            </div>

            <hr className='mt-5 mb-5' />

            <div className='flex flex-col lg:flex lg:flex-row mt-2'>
                <div className='mt-3 w-96 flex flex-col items-center'>
                    <BsGiftFill style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                    <h5 className='font-bold text-xl text-pink-600'> Free Download</h5>
                    <span className='text-xl mt-2 font-roboto semo'>Unlimitedly free conversions and <br /> downloads.</span>
                </div>
                <div className='mt-3 w-96  flex flex-col items-center'>
                    <FaAudioDescription style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                    <h5 className='font-bold text-xl text-pink-600'>  Video & Audio</h5>
                    <span className='text-xl mt-2 font-roboto semo'> Directly Download Video & <br /> Music.</span>
                </div>
                <div className='mt-3 w-96  flex flex-col items-center '>
                    <MdOutlineDownloadDone style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                    <h5 className='font-bold text-xl text-pink-600'> Easy Download</h5>
                    <span className='text-xl mt-2 font-roboto semo'>Fully compatible with all <br />  browsers.</span>
                </div>
            </div>
        </div>
    )
}
