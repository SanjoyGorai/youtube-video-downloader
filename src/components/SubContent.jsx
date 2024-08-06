import React from 'react'


export const SubContent = () => {
    return (
        <div className='flex flex-col items-center   '>
            <hr className='mb-4 mt-5 ' />
            <div className='flex flex-col items-start'>
                <p className='mt-3 mb-2 text-start '>Tip: Insert "zz" after the word "youtube" in the link to download videos and mp3 files from YouTube as Link faster way.</p>
                <img src="src/assets/download_img.jpg" alt="" className='mt-2 mb-2' />

                <div className='flex flex-col lg:flex-row '>
                    <div>
                        <div className='flex justify-center text-start '>
                            <div className='w-36 mt-2 flex flex-col items-start  '>
                                <img src="src/assets/hills.jpeg" alt="jew" className='' />
                                <span className='font-semibold text-xl'>Find Your Path</span>
                            </div>
                            <div className='w-36 mt-2 flex flex-col items-start ms-2.5  '>
                                <img src="src/assets/jewllery.jpeg" alt="jew" className='' />
                                <span className='font-semibold text-xl'>Discover Hidden Gems</span>
                            </div>
                        </div>
                        <div className='flex justify-center text-start '>
                            <div className='w-36 mt-2 flex flex-col items-start  '>
                                <img src="src/assets/hills.jpeg" alt="jew" className='' />
                                <span className='font-semibold text-xl'>Find Your Path</span>
                            </div>
                            <div className='w-36 mt-2 flex flex-col items-start ms-2.5  '>
                                <img src="src/assets/jewllery.jpeg" alt="jew" className='' />
                                <span className='font-semibold text-xl'>Discover Hidden Gems</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col ms-4 items-start text-start'>
                        <p className='mt-2 text-[16px] font-roboto'>If you can’t directly download video to your PC, please follow the <br />
                            guidelines below: </p>
                        <p className='mt-2 text-[16px] font-roboto'> Step1: Select the format you want and click "Download" button.</p>
                        <p className='mt-2 text-[16px] font-roboto'>  Step2: In new window, press "CTRL + S" to save video OR right click to <br />
                            video, then select "Save as Video".</p>
                    </div>

                </div>
            </div>
           
        </div>
    )
}
