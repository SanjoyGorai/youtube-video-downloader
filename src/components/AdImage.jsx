import React, { useState, useEffect, useContext } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ImageLoadContext from '../contexts/ImageLoadContext';
import VideoContext from '../contexts/VideoContext';
import Video from './Video';

export const AdImage = () => {
    const { showElement, setShowElement } = useContext(ImageLoadContext);
    const { videoData, setVideoData } = useContext(VideoContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(false);
        })
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div>
                {showElement ?
                    (
                        <>
                            <img src={'https://i.ytimg.com/vi/coUY1kd8xFk/mqdefault.jpg'} className='mt-4' alt='img' />
                            <h5 className='font-bold max-w-80 text-start '> {'Incredible 4K HDR 60 FPS Dolby Vision (4K Video)'}  </h5>
                            <img src={'https://i.ytimg.com/vi/nBwMnDK4wNs/mqdefault.jpg'} className='mt-4' alt='img' />
                        </>
                    )
                    : (
                        <Stack spacing={1} className='mt-4'>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="rectangular" width={210} height={60} />
                            <Skeleton variant="rounded" width={210} height={60} />
                        </Stack>
                    )
                }
            </div>
        </div>
    )
}
