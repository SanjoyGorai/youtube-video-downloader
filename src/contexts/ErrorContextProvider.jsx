import React, { useState } from 'react'
import ErrorContext from './ErrorContext';

const ErrorContextProvider = ({ children }) => {
    const [isError, setIsError] = useState(false);
    return (
        <ErrorContext.Provider value={{ isError, setIsError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContextProvider