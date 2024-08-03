import React from 'react'


export const DownloadButton = (props) => {

    const handleDownload = () => {

    };
    return (
        <div className=''>
            <button onClick={props.click} type='button' id='download-btn' className='text-white bg-green-500 rounded p-2'>
                Download
            </button>
        </div>
    )
}
