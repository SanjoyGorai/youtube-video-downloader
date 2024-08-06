import React, { useState } from 'react'
import ImageLoadContext from './ImageLoadContext';

const ImageLoadProvider = ({ children }) => {

    const [showElement, setShowElement] = useState(false);

    return (
        <ImageLoadContext.Provider value={{ showElement, setShowElement }}>
            {children}
        </ImageLoadContext.Provider>
    )
}
export default ImageLoadProvider;
