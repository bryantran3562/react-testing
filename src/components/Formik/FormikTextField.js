import React from 'react'

// BT - This is TextField function from the MUI
import TextField from '@mui/material/TextField';

// BT - To make the formik aware of this <TextField></TextField> function from the MUI.
//      We must use the formik hook: useField from formik.

import { useField } from 'formik';

// ####################################################################################################
// BT - We define our own function, then we will received, the most important one: name, and we take
//      in the rest.
//      When we run our function, we will received the following params:
//      name (This is the only props that we care about and it was sent from the MUITesting)
//      ...otherProps (This contained all the props or params we passed in from our own MyTextField in
//                     LoginForm.js)
// ####################################################################################################

const TextfieldWrapper = ({name, ...otherProps}) => {

    // console.log(`BT - TextfieldWrapper - name: `,name)
    // console.log(`BT - TextfieldWrapper - ...otherProps: `,otherProps)

    // BT - formik has a state hook, all we have to do is passing in our variable that we want
    //      formik to handle.
    //It will then return two objects:
    //field object - This object is a json object where it contained all the current value and other useful info
    //mata object - This object is a json object where it contained all the errors on this specific element.


    //##########################################################################################################################
    // BT - In order for the formik to track our input html name, we must pass it to useField() hook which is from formik.
    //      The useField will return - field, and mata for us to add or modify as needed.
    //##########################################################################################################################

    const [field, mata] = useField(name)

    // console.log(`BT - TextfieldWrapper - field: `,field)
    // console.log(`BT - TextfieldWrapper - mata: `,mata)

    // BT - Setting up the default config to our <TextField></TextField> component from the MUI
    const configTextfield = {
        //BT - Pass the ...field from formik to MUI TextField component so that we can update our TextField component from MUI.
        ...field,
        //BT - Passing in along with other props that passed to us and we pass them along to MUI component.
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    // BT - Handle the error. 

    if (mata && mata.touched && mata.error) {
        // BT - Add the more fields to configTextfield to tell MUI TextField function to display our error checking.
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
      }

    //########################################################################################################################
    // BT - The idea is that, we put all of our need stuff in the - configTextfield object and then config the MUI
    //      TextField with that config so that formik can track it. Another word, we make all the MUI wigget can do
    //      tracking value changes and valiation using formik.
    //########################################################################################################################

    return (
        // BT - Passed in the configTextfield. Note: TextField is MUI component. Not our own custom <Textfield></Textfield>

        <TextField {...configTextfield}/>
    )
}

export default TextfieldWrapper