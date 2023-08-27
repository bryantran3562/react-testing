import React from 'react';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';


// BT - Receiving params from the LoginForm.js
const ButtonWrapper = ({
  //BT - children is just the name of the button
  children,
  ...otherProps
}) => {

  //######################################################################################
  // BT - Another formik hook that will return a function that you can later can call.
  //      In this case, submitForm()
  //######################################################################################
  const { submitForm } = useFormikContext();

  // console.log(`BT - ButtonWrapper: `, children)

  // BT - return a function
  // console.log(`BT - ButtonWrapper: `, submitForm)


  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
    >
      {/* BT - The name of the button or children inner text */}
      {children}
    </Button>
  );
};

export default ButtonWrapper;