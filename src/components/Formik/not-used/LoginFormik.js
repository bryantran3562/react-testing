import React from 'react'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { makeStyles } from '@material-ui/core/styles';
// import Textfield from './Components/FormsUI/Textfield';


import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MyTextfield from './FormikTextField'
import Box from '@mui/material/Box';
// import { makeStyles } from '@mui/styles';

// // BT - Define your own style.
// const useStyles = makeStyles((theme) => ({
//     formWrapper: {
//       marginTop: theme.spacing(5),
//       marginBottom: theme.spacing(8),
//     },
//   }));

//#####################################################
// BT - Step 1: Define your state.
//              Define your validationSchema.
//#####################################################
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const INITIAL_FORM_STATE = {
    // firstName: '',
    // lastName: '',
    email: '',
    password: '',
    confirm_password: ''
    // phone: '',
    // addressLine1: '',
    // addressLine2: '',
    // city: '',
    // state: '',
    // country: '',
    // arrivealDate: '',
    // departureDate: '',
    // message: '',
    // termsOfService: false
  };
  
  const FORM_VALIDATION = Yup.object().shape({
    // firstName: Yup.string()
    //   .required('Required'),
    // lastName: Yup.string()
    //   .required('Required'),
    email: Yup.string()
      .email('Invalid email.'),
    password: Yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirm_password: Yup
      .string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    //   .required('Required'),
    // phone: Yup.number()
    //   .integer()
    //   .typeError('Please enter a valid phone number')
    //   .required('Required'),
    // addressLine1: Yup.string()
    //   .required('Required'),
    // addressLine2: Yup.string(),
    // city: Yup.string()
    //   .required('Required'),
    // state: Yup.string()
    //   .required('Required'),
    // country: Yup.string()
    //   .required('Required'),
    // arrivealDate: Yup.date()
    //   .required('Required'),
    // departureDate: Yup.date()
    //   .required('Required'),
    // message: Yup.string(),
    // termsOfService: Yup.boolean()
    //   .oneOf([true], 'The terms and conditions must be accepted.')
    //   .required('The terms and conditions must be accepted.'),
  });

function LoginFormik() {

    // BT - Use it.
    // const classes = useStyles();

    return (
        <Grid container>

            <Grid item xs={12}>
            {/* <Header /> */}
            </Grid>

            <Grid item md={12}>
                
                    {/* BT - Passed in both initialValue and form validation defined above. */}
                    <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={ values => {
                        console.log(values)
                    }}
                    >
                        <Form>
                            {/* BT - Think of this Grid with container is as a big box */}
                            
                                {/* BT - Each Grid is a row where you can define how big it is for each column. 
                                         We want to have one row with the column width == 12 column
                                 */}
                                {/* Row 1 */}
                                
                                <Grid item>
                                    {/* BT - So, then we call our own function (Textfield) and then pass in to MUI <TextField></TextField> 
                                    function with:
                                    name
                                    label
                                    or anything that we want.
                                    */}
                                    <MyTextfield
                                    name="email"
                                    label="email"
                                    />
                                
                                </Grid>
                                
                                
                                {/* Row 2 */}
                                <Grid item>
                                    <MyTextfield
                                    name="password"
                                    label="password"
                                    />
                                </Grid>
                                

                                
                                {/*  Row 3 */}
                                <Grid item>                                  
                                    <MyTextfield
                                    name="confirm_password"
                                    label="confirm_password"
                                    />                              
                                </Grid>
                                
                                <button type="submit">Submit</button>
                            

                        </Form>

                    </Formik>

                
            </Grid>

        </Grid>
    )
}

export default LoginFormik