import React from 'react'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import MyTextfield from '../components/Formik/FormikTextField'
// import Box from '@mui/material/Box';
import MyButton from '../components/Formik/FormikButton'

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//#####################################################
// BT - Step 1: Define your state.
//              Define your validationSchema.
//#####################################################
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

//##########################################################################################
// BT - You can add many states as you want, formik will manage these states for you.
//##########################################################################################
const INITIAL_FORM_STATE = {
    email: '',
    password: '',
    confirm_password: ''

  };

  //###########################################################
  //BT - Define how you want to validate your input
  //###########################################################
  
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
      //BT - This is how to define your own rule.   
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



// ##########################################################################################
// BT - Step 1: Initialize the theme. This is so that your template can access default theme.
//      and modify the color or other stuff in the theme.
// Note: You can modify directly by passing a {} into the createTheme() function and have any
//       valid CSS rule and then you can access it in your template along with the CSS rule in
//        theme.
//       But this guy only intialize it and get an empty () so that he can access theme
//       CSS property without modifing it.
//###########################################################################################
const theme = createTheme();

export const MUITesting = () => {


    return (

        // BT - Step 2: You must wrap around your component with the <ThemeProvider and pass in the theme={theme}
        <ThemeProvider theme={theme}>

        {/* BT - A fluid container width is bounded by the maxWidth prop value.
                 Basicly, this is like an windows on the outer most.
                 Note: It will center your stuff horizontally.
         */}
        <Container component="main" maxWidth="xs">
            {/* BT - This is from MUI. It just ensured crossed browser has a consistency looks */}
        <CssBaseline />
            {/* BT - This another windows but within your above container */}
            <Grid container rowSpacing={5}>

                <Grid item xs={12} sm={12} md={10}>
                    <h2>Log In</h2>
                {/* <Header /> */}
                </Grid>

                <Grid item xs={12} sm={12} md={10}>
                    {/* BT - Passed in initialValues, validationSchema,onSubmit. This Formik component will automatically
                             track on all changes of your input, onBlur, onChange,and update the value or your input, it
                             will also call your onSubmit function too. */}
                    <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={ values => {
                        console.log(values)
                    }}
                    >
                        {/* BT - Basic idea is that - formik gives us the following:
                            <Formik> - initialValues, validationSchema, onSubmit.
                            <Form> - Require.
                            <Field> - Allow us to hook up to third party MUI
                         */}
                        <Form>
                            {/* BT - Think of this Grid with container is as a big box */}
                            
                                {/* BT - Each Grid is a row where you can define how big it is for each column. 
                                        We want to have one row with the column width == 12 column
                                */}
                                {/* Row 1 */}
                                <Grid item sx={{mb: 1}}>
                                    {/* BT - These are our own components that will hook up to the formik for manage, validate on our
                                             input and also give us an MUI appearance. We only need to passin, the name attribute is
                                             very important.
                                             The idea is that - When we call our function or component <MyTextfield> and pass in our
                                             props - name and label. Look at the FormikTextField.js
                                    */}
                                    <MyTextfield
                                    name="email"
                                    label="email"
                                    />
                                
                                </Grid>                           
                                {/* Row 2 */}
                                <Grid item sx={{mb: 1}}>
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
                    
                                <Grid item md={12} sx={{mt: 5}}> 
                                <MyButton>Submit</MyButton>
                                </Grid>
                                
                        </Form>
                    
                    </Formik>
                </Grid>
                
            </Grid>

        {/* </Box> */}
        </Container>
        </ThemeProvider>
    )
}
