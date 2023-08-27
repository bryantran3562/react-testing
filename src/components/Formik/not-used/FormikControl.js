import React from 'react'

import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import RadioButton from './RadioButton'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

function FormikControl(props) {

    // BT - Extract out the props: control
    //      to see which input it is. If it is 'input', then
    //      we will call <Input /> component and pass in all the params with the ...rest.
    const { control, ...rest } = props

    switch(control){

        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        // case 'chakraInput':
        //     return <ChakraInput {...rest} />
        default:
            return null

    }
}

export default FormikControl