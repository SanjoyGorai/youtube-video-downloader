import React, { useState, useEffect, useContext } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ImageLoadContext from '../contexts/ImageLoadContext';
import VideoContext from '../contexts/VideoContext';

export const AdImage = () => {
    const { showElement, setShowElement } = useContext(ImageLoadContext);
    const { videoData, setVideoData } = useContext(VideoContext);
    console.log("from Add image ", showElement);

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
                    <img src={videoData.thumbnail[1].url} className='mt-4' alt='img' />
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
