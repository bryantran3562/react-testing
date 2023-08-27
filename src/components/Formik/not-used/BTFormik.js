import React from 'react'

//########################################################################################################
// BT - We are using useFormik hook from formik. Remember, useXXX, means hook for state in which it
//      has some states.
//########################################################################################################
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

function BTFormik() {
    
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted


    // const formik = useFormik({
    
    // // BT - These are tracked by the formik
    // initialValues: {
    //     email: '',
    // },

    // // BT - formik will give you all the 'values' in your form when you are clicking on the 'submit' button.

    // onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2));
    // },

    // });

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


    return (

        <Formik
        //BT - Setup our variable to allow formik tracked them.
        initialValues={{
            email: '',
            password: '',
            confirm_password: ''
        }}
        // BT - Do our validation.
        validationSchema={Yup.object({

            email: Yup.string().email("Please enter a valid email").required("Required"),
            password: Yup
              .string()
              .min(5)
              .matches(passwordRules, { message: "Please create a stronger password" })
              .required("Required"),
            confirm_password: Yup
              .string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Required"),
   
          })}
          onSubmit={ values => {
            console.log(values)
          }}
        >
            {/* BT - Form will automatically has a onSubmit and it will called for us */}
            <Form>

                <label htmlFor="email">Email Address</label>
                <Field
                id="email"
                name="email"
                type="email"
                />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field
                id="password"
                name="password"
                type="password"
                />
                <ErrorMessage name="password" />
                
                <label htmlFor="email">Confirm Password</label>
                <Field
                id="confirm_password"
                name="confirm_password"
                type="password"
                />
                <ErrorMessage name="confirm_password" />

                <button type="submit">Submit</button>
            </Form>

        </Formik>
    );
    
}

export default BTFormik