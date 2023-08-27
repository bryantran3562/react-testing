import React from 'react'

export const ClickHover = (props) => {

    // BT - Setting our variables.

    // const [count, setCount] = useState(0)

    // const handleMouseOver = () => {
    //     setCount(count + 1)
    // }

  return (
    <>
    

    <p onMouseOver={props.incrementCount}>Hover mouse over: { props.count }</p>

    </>
  )
}
