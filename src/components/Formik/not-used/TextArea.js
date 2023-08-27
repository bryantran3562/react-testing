import React from 'react'

import { Field, ErrorMessage } from 'formik'

import TextError from './TextError'

function TextArea(props) {

    // BT - Extract out all the props. But get the two most important.
    //      label = 'Email', name = 'email' .

    const { label, name, ...rest } = props    

    return (
        
        <div className='form-control'>

        <label htmlFor={name}>{label}</label>
        {/* BT - Field is a formik control where it will control:
                 onChange
                 onBlur
                 update value in the html. This is why need the name. */}
        <Field as='textarea' id={name} name={name} {...rest} />
        {/* BT - ErrorMessage is another formik control where it will display an error. But where is the Yup??? */}
        <ErrorMessage component={TextError} name={name} />
        
        </div>
    )
}

export default TextArea