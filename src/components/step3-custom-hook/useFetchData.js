import {useReducer} from 'react'

import axios from 'axios'


//###############################################
// BT - We are dealing with an object now.
//###############################################
const initialState = {
    loading: true,
    error: '',
    posts: [],
    post: {}
}

const reducer = (state, action) => {

    switch (action.type){

        case 'FETCH_SUCCESSFUL':
            if (Array.isArray(action.payload)){

                return {
                    loading: false,
                    error: '',
                    posts: action.payload,
                    post:{}
                }

            }
            else if (action.payload instanceof Object) {
                return {
                    loading: false,
                    error: '',
                    post: action.payload,
                    posts:[]
                }                
            }
            break

        case 'FETCH_FAILURE':
            return {
                loading: false,
                error: 'Something went wrong',
                posts: [],
                post:{}               
            } 
        default:
            return state   
    }

}


//##############################################################
// BT - The idea is that:
//a. Create your normal function and make it works.
//b. Then exposed your: return [variables, function]
//##############################################################

export const useFetchData = () => {
    //########################################################################################################
    // BT - Still same as useState, pass in two argument to useReducer function, reducer, initialState.
    //      It will return a new state and a dispatch method for you to call or set the state.
    //########################################################################################################
    const [state, dispatch] = useReducer(reducer, initialState)


    // BT -  How do we expose the variable and function?

    const fetchData = (url) => {

        axios.get(url)
         .then(res => {           
            dispatch({type: 'FETCH_SUCCESSFUL', payload: res.data})
         })
         .catch(err => {
            dispatch({type: 'FETCH_FAILURE'})
         })
    }
    
    //##############################################################################
    // BT - The different between a custom hook and the useContext is that:
    //a. custom hook => return [variable, function]
    //b. context => return (<AuthContext.Provider value={{variable, function}})
    //##############################################################################

    return [state,fetchData]
    
}
