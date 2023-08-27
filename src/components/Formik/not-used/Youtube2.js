import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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



function Youtube2() {


    const formik = useFormik({
        // BT - Contained all of your form field values
        initialValues,
        //#############################################################################
        // BT - It will automatically received all the values from your form fields.
        //#############################################################################
        onSubmit,
        // BT - Commented out our own validation and replaced with Yup below
        // validate
        validationSchema
    })

    console.log('Formik', formik)
    // console.log(`BT - formik with values:`, formik.values)
    // console.log(`BT - formik with errors:`, formik.errors)


    return (

        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            </div>
            { formik.touched.name && formik.errors.name ? formik.errors.name : null }

            <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <input
                type='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
            </div>

            { formik.touched.email && formik.errors.email ? formik.errors.email : null }

            <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <input
                type='text'
                id='channel'
                name='channel'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}
            />
            </div>

            { formik.touched.channel && formik.errors.channel ? formik.errors.channel : null }

        <button type='submit'>Submit</button>

      </form>
    )
}

export default Youtube2