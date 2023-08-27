import React from 'react'

// BT - To use the formik provided component, you must include the following line:

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import FormikControl from './FormikControl'


function FormikContainer() {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]

    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
    })

    const onSubmit = values => console.log('Submit', values)

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik => (<Form>
                                {/* BT - Call the FormikControl and passed in:
                                control
                                type
                                label
                                name
                                 */}
                              <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                              <FormikControl
                                control='textarea'
                                label='description'
                                name='description'
                            />

                            <FormikControl
                                control='select'
                                label='Select a topic'
                                name='selectOption'
                                options={dropdownOptions}
                            />
                            <FormikControl
                                control='radio'
                                label='Radio topic'
                                name='radioOption'
                                options={radioOptions}
                            />
                            <FormikControl
                                control='checkbox'
                                label='Checkbox topics'
                                name='checkboxOption'
                                options={checkboxOptions}
                            />
                            <FormikControl
                                control='date'
                                label='Pick a date'
                                name='birthDate'
                            />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer