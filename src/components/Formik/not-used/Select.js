import React from 'react'

import { Field, ErrorMessage } from 'formik'

import TextError from './TextError'

function Select(props) {

    const { label, name, options, ...rest } = props

    return (
        
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
            {/* BT - Received the opions, then using the map to iterate over the array and print out the option in options array. */}
            {options.map(option => {
            // BT - each 'option' we return an html option.
            return (
                <option key={option.value} value={option.value}>
                {option.key}
                </option>
            )
            })}
        </Field>
        <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Select