import React from 'react'



export const ClickCounter = (props) => {

    // BT - Setting our variables.

    // const [count, setCount] = useState(0)

    // const handleClick = () => {
    //     setCount(count + 1)
    // }

  return (

    <>

    <button onClick={props.incrementCount}>Click Me: { props.count }</button>

    </>
  )
}
