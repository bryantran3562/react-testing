import React from 'react'
import Youtube3InputControl from './Youtube3InputControl'
import MUIInput from './MUIInput'

//############################################################################################################
// BT - When you call this function, you must pass the variable: control
//      props == control.
//      Then you can just destructure it: const { control } = props
//      This is nothing more that you are calling a function and passing to it a param called: control.
//      Then this function will received it as a: props object, you can then destructure it.
//#############################################################################################################
function Youtube3Control(props) {

    const { control, ...rest } = props

    console.log(`BT - Youtube3Control - props: `, props)
    

    switch(control){

        case 'input':
            return <Youtube3InputControl {...rest} />
        // case 'textarea':
        //     return <TextArea {...rest} />
        // case 'select':
        //     return <Select {...rest} />
        // case 'radio':
        //     return <RadioButton {...rest} />
        // case 'checkbox':
        //     return <CheckboxGroup {...rest} />
        // case 'date':
        //     return <DatePicker {...rest} />
        case 'MUIInput':
            return <MUIInput {...rest} />
        default:
            return null

    }

    // return (
    //     <div>Youtube3Control</div>
    // )
}

export default Youtube3Control