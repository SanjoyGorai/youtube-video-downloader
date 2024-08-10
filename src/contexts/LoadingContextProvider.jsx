import React, { useState } from 'react'
import LoadingContext from '../contexts/LoadingContext'

const LoadingContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider