import React from 'react'

import { Field, ErrorMessage } from 'formik'
import { TextField } from '@mui/material'
import TextError from './TextError'

function MUIInput(props) {

    console.log(`BT - MUIInput: `, props)

    const { name, label, ...rest } = props

    const configTextField = {
        ...rest,
        fullWidth: true,
        variant: 'outlined'
    }

    return (
        <div>
            <Field name={name}>

                {
                    ({field, form}) => {

                        console.log(`BT - field object: `, field)
                        console.log(`BT - form object: `, form)

                        return(
                            <>
                            <TextField {...configTextField} {...field} error={form.errors[name]}>                               
                            </TextField>
                            {/* <ErrorMessage name={name} component={TextError} /> */}
                            </>

                        )
                    }
                }

            </Field>
        </div>
    )
}

export default MUIInput