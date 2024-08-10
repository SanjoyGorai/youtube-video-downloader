import React, { useState } from 'react'
import VideoUrlContext from './VideoUrlContext';
import ShortsUrlContext from './ShortsUrlContext copy';

const ShortsUrlContextProvider = ({ children }) => {

    const [isShortFromUrl, setIsShortFromUrl] = useState(false);

    return (
        <ShortsUrlContext.Provider value={{ isShortFromUrl, setIsShortFromUrl }}>
            {children}
        </ShortsUrlContext.Provider>
    )
}

export default ShortsUrlContextProvider