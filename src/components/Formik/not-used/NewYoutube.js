import React from 'react'


// BT - To use the formik provided component, you must include the following line:

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


//################################################################
// BT - formik provided us with the following:
//a. Formik component.
//b. Form component.
//c. Field component.
//d. ErrorMessage.
//Note: The capital of the first letter.
//################################################################



function Youtube() {


    const initialValues = {
        // BT - Must be corresponding to name="name" or name="email"
        name: '',
        email: '',
        channel: ''

    }

    //#############################################################################################
    // BT - So, instead of writing our own validation, we use a lib called 'yup' to help us out.
    //#############################################################################################

    const validationSchema = Yup.object({

        name: Yup.string().required('Required'),
        // BT - Check the email format first, then check for required.
        email: Yup.string().email('Invalid format').required('Require'),
        channel: Yup.string().required('Required')

    })

    const onSubmit = (values) => {
        //BT - This is where you can make an API call to a remote server.
        console.log('formik - submit button', values)
    }


    // console.log('Formik visitted', formik.touched)


    return (

        // BT - Wrapped around the whole form with <Formik></Formik>. This will replaced the following:
        //     // const formik = useFormik({
        //     // BT - Contained all of your form field values
        //     initialValues,
        //     //#############################################################################
        //     // BT - It will automatically received all the values from your form fields.
        //     //#############################################################################
        //     onSubmit,
        //     // BT - Commented out our own validation and replaced with Yup below
        //     // validate
        //     validationSchema
        // })

        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >

            {/* BT - Note: The <Form></Form> tag will automatically linking to the onSubmit above. No need to specify it. */}
            <Form>

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    {/* ############################################################################
                    BT - Replace all the HTML input field with Field 
                    Notes: The <Field></Field> tag will do the following:
                        a. OnChange.
                        b. OnBlur.
                        c. Update the field value
                    ################################################################################*/}
                    <Field
                        type='text'
                        id='name'
                        name='name'
                        // BT - formit is the object we defined above. The two below will allow 
                        //      formik automatically track our data field input for data change.

                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.name}

                        // BT - The below is a replacement of the 3 above lines.
                        // {...formik.getFieldProps('name')}
                    />

                    <ErrorMessage name='name' />
                </div>


                {/* { formik.errors.name && formik.touched.name ? <div> { formik.errors.name } </div> : null } */}

                
        
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                        // {...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name='email' />
                </div>

                {/* BT - Replace the line below with <ErrorMessage /> from formik */}
                {/* { formik.errors.email && formik.touched.email ? <div> { formik.errors.email } </div> : null } */}
                

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                        // onChange={formik.handleChange}
                        // //####################################################################################################
                        // // BT - If the field is visited, marked it as visited.
                        // //      We want to know if the field has been visited or not. If not, then
                        // //      we should not displaying any error unless it is visited or touched && the user filled in
                        // //      with an invalid field.
                        // //#####################################################################################################
                        // onBlur={formik.handleBlur}
                        // value={formik.values.channel}
                        // {...formik.getFieldProps('channel')}
                    />
                    <ErrorMessage name='channel' />
                </div>

                {/* { formik.errors.channel && formik.touched.channel ? <div> { formik.errors.channel } </div> : null } */}

                

                <button type='submit'>Submit</button>
            </Form>
      </Formik>
    )
}

export default Youtube