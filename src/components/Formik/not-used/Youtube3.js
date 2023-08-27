import React from 'react'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Youtube3Control from './Youtube3Control';
import TextField from '@mui/material/TextField';


function Youtube3() {

const initialValues = {
    email:'',
}

const validationSchema = Yup.object({

    email: Yup.string().email('Invalid Email format').required('Required')
})

const onSubmit = (values) => {
    console.log(`BT - onSubmit(): `, values)
}

    

    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >

                {
                    (formik) => (

                        <Form>
                            {/* <Youtube3Control
                            control="MUIInput"
                            type="email"
                            label="email"
                            name="email"
                            margin="normal"
                            >
                            </Youtube3Control> */}

                            <TextField
                            margin="normal"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                                                
                            />
                            <button type="submit">Submit</button>
                        </Form>

                    )
                }

            </Formik>
        </div>
    )
}

export default Youtube3