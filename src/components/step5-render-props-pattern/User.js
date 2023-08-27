import React, { useState } from 'react'

//##########################################################################################################
// BT - Think of this as follow:
// This is like you create a function included all the logic needed of the other components use it
// but need to render their ways.
//##########################################################################################################
export const User = ({render}) => {

    // BT - Setting our variables.

    const [count, setCount] = useState(0)

    const incrementCount = () => {
      setCount(count + 1)
    }


  return (

    //####################################################################################################
    // BT - If the param passed in is a function, you will need to have () to call the function.
    // <div>{render(count, incrementCount)} </div>
    // BT - You can also setting it up using {children}, make sure you also change the function
    //      receiving argument above as follow: ({children}). Change it back to render if you want
    //      to use render: ({render}).
    //On the calling function, you will call it between <User></User> open and closing the bracket.
    //Since, doing this is what called passing the param as children.
    //####################################################################################################
    <div>{render(count, incrementCount)} </div>
  )
}
