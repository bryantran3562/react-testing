import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'



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

    // const validate = values => {

    //     //########################################################################################
    //     //BT - The below are the one that is available to us for accessing it and modifying them.
    //     //########################################################################################
    //     //values.name, values.email, values.channel
    //     //errors.name, errors,email, errors.channel
    //     //errors.name = 'This field is required'

    //     let errors = {}

    //     //BT - If values.name is blank, then we displaying an error.name of that field with 'This field is required'
    //     if (!values.name){
    //         errors.name = 'This field is required'
    //     }

    //     if (!values.email){
    //         errors.email = 'This field is required'
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    //         errors.email = 'Invalid Email format'
    //     }

    //     if (!values.channel){
    //         errors.channel = 'This field is required'
    //     }

    //     //BT - You must return an object.

    //     return errors
    // }

    //###########################################################################
    // BT - formik will give us some of the methods and other property to use.
    //###########################################################################

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

    console.log('Formik visitted', formik.touched)


    return (

        // BT - handleSubmit

        <form onSubmit={formik.handleSubmit}>

        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            // BT - formit is the object we defined above. The two below will allow 
            //      formik automatically track our data field input for data change.

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        { formik.errors.name && formik.touched.name ? <div> { formik.errors.name } </div> : null }
  
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

        { formik.errors.email && formik.touched.email ? <div> { formik.errors.email } </div> : null }

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            //####################################################################################################
            // BT - If the field is visited, marked it as visited.
            //      We want to know if the field has been visited or not. If not, then
            //      we should not displaying any error unless it is visited or touched && the user filled in
            //      with an invalid field.
            //#####################################################################################################
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
        </div>

        { formik.errors.channel && formik.touched.channel ? <div> { formik.errors.channel } </div> : null }

        <button type='submit'>Submit</button>
      </form>
    )
}

export default Youtube