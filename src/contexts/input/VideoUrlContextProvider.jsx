import React, { useState } from 'react'
import VideoUrlContext from './VideoUrlContext';

const VideoUrlContextProvider = ({ children }) => {

    const [videoFromUrl, setVideoFromUrl] = useState(false);

    return (
        <VideoUrlContext.Provider value={{ videoFromUrl, setVideoFromUrl }}>
            {children}
        </VideoUrlContext.Provider>
    )
}

export default VideoUrlContextProvider