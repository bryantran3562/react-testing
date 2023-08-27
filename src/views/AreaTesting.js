import React from 'react'
// import { useIncrementCount } from '../components/step3-custom-hook/useIncrementCount'
import { useFetchDataWithuseEffect } from '../components/step3-custom-hook/useFetchDataWithuseEffect'

export const AreaTesting = () => {

    // const [count, incrementCount] = useIncrementCount()

    //######################################################################################################
    // BT - Since our custom hook has used - useEffect() hook to run an external API call
    //      then when we run our code here, it will just automatically get all the data coming back
    //      from our remote API server and let us use it right away. In this case, posts variable.
    //SUMMARY:
    //A custom hook allows you to re-use a piece of code or function.Think of this like you have created
    //a function and then you can use it everywhere or call to use it.
    //You can also pass argument to it as a normal function.
    //
    //######################################################################################################
    const [posts] = useFetchDataWithuseEffect('https://jsonplaceholder.typicode.com/comments')

  return (
    <div>
        <h2>AreaTesting</h2>

        {/* The area testing: { count }
        <br />
        <button onClick={incrementCount}>Click to Add 1</button> */}

        {
            posts.map((post) => <div key={post.id}> { post.title } </div>)
        }
    </div>
  )
}
