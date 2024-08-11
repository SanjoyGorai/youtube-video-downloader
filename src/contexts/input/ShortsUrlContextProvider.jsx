import React, { useState } from 'react'
import ShortsUrlContext from './ShortsUrlContext';

const ShortsUrlContextProvider = ({ children }) => {

    const [isShortFromUrl, setIsShortFromUrl] = useState(false);

    return (
        <ShortsUrlContext.Provider value={{ isShortFromUrl, setIsShortFromUrl }}>
            {children}
        </ShortsUrlContext.Provider>
    )
}

export default ShortsUrlContextProvider