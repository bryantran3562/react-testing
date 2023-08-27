import React from 'react'

import { Grid, Card, CardContent, Typography } from '@mui/material'

// import { useContext } from 'react'

// import { AuthContext } from '../components/step4-use-context/FetchDataContext'

import { useFetchAllData } from '../components/step4-use-context/FetchDataContext'


export const Home = () => {
    
    // BT - Right here, data is available for you to access.

    const state = useFetchAllData()


  return (
    <Grid container>
        <Grid item xs={12} sm={6} md={12}>
                       
            {
                state.state.posts.length > 1 ? state.state.posts.map(post => { return <div key={post.id}>{post.title}</div>})
                : <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {state.state.post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {state.state.post.body}
                        </Typography>
                    
                    </CardContent>
                  </Card> 
            }
            
        </Grid>       
    </Grid>    
  )
}
