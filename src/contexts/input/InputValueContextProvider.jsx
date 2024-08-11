
import React, { useState } from 'react'
import InputValueContext from './InputValueContext'

const InputValueContextProvider = ({ children }) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <InputValueContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </InputValueContext.Provider>
    )
}

export default InputValueContextProvider