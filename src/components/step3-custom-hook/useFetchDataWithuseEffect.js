import { useState, useEffect } from 'react'

import axios from 'axios'

// BT - Create axios instance and configure some values.

const reqInstanceAxios = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com/posts',

    headers:{

        'Content-Type': 'application/json',

    }

})

export const useFetchDataWithuseEffect = (url) => {

    const [posts, setPosts] = useState([])

    //#####################################################################################################
    // BT - The reason we useEffect hook here is that. We want react run it whatever we use this
    //      useFetchDataWithuseEffect custom hook in other program, component or functional component.
    //If we do not need the useEffect hook running our code, then we don't need to include it. 
    //Here it is just a regular function that we need to use for computation or do something...etc.
    //##################################################################################################### 
    useEffect(() =>{

        const getPost = async () => {
            
            try{
                let response = await reqInstanceAxios.get(url)
                console.log(response)
                setPosts(response.data)
            }
            catch (error){
                console.log(error)
            }

        }

        getPost()

    },[url])

    // BT - Expose our variable and function.
    return [posts]
}
