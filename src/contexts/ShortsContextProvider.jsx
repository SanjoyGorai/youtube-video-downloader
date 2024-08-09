import React, { useState } from 'react'
import ShortsContext from './ShortsContext'

const ShortsContextProvider = ({ children }) => {

    const [shortsData, setShortsData] = useState(null);

    return (
        <ShortsContext.Provider value={{ shortsData, setShortsData }}>
            {children}
        </ShortsContext.Provider>
    )
}

export default ShortsContextProvider