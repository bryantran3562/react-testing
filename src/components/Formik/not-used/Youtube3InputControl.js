import React from 'react'

import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function Youtube3InputControl(props) {

    console.log(`BT - Youtube3InputControl`, props)

    const { label, name, ...rest } = props

    return (
        <div>
            {/* BT - We just use the params passed above. */}
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Youtube3InputControl