import React, { useState } from 'react'
import FormSubmitContext from './FormSubmitContext'

const FormSubmitContextProvider = ({ children }) => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div>
            <FormSubmitContext.Provider value={{ isSubmitted, setIsSubmitted }}>
                {children}
            </FormSubmitContext.Provider>
        </div>
    )
}

export default FormSubmitContextProvider