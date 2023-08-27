import React, { useReducer } from 'react'

import { Grid, Button, Typography } from '@mui/material'

//#######################################################################################
// BT - Pretty much the same as useState hook. The different is that - you have to
//      dispatch to your reducer function when you want to update your variable.
//#######################################################################################


// BT - Right here is where you declare your variable: integer, objects, array, string, boolean...etc.
const initialState = {
    first_name: '',
    last_name: '',
    age: null
}

// BT - action = {
//     type:
//     payload:
// }

const reducer = (state, action) => {

    switch(action.type){
        case 'ADD':
            // BT - So if your dispatch matched this case, then it will update the variable.
            return state = {
                first_name: 'Trong',
                last_name: 'Tran',
                age: 59
            }
        default:
            return state
    }

}

export const UseReducer = () => {

    //###########################################################################################
    // BT - Note: After you have updated your variable with the reducer function above, it
    //            update this count variable and you use it in your html template.
    //            not the 'state' or 'initialState'
    //###########################################################################################
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <Grid container>
        <Grid item xs={12} sm={6} md={12}>
            <Typography variant='subtitle2' color='primary'>{count.first_name} - {count.last_name} - {count.age}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            {/* BT - This is where you want to update your variable, you will have to dispatch
                     to your reducer() above.
             */}
            <Button variant='contained' color='error' onClick={()=>dispatch({type:'ADD'})}>Add</Button>
        </Grid>         
    </Grid>
  )
}
