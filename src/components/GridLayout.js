import { Grid, Typography, TextField,Button } from '@mui/material'
import React, { useState } from 'react'

export const GridLayout = () => {
    // BT - Declare your variables.

    const [name, setName] = useState()

    const handleClick = (name) => {

        alert(name)

    }
  return (
    <Grid container>
        {/* BT - No matter what we want it take an entire 12 colums */}
        <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h2" color="success.main"> This is a test</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField
                    label="your name"
                    size="small"
                    color="secondary"
                    required
                    helperText="Please, enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    >
            </TextField>

        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" color="primary" onClick={() => handleClick(name)}>Click Me</Button>
        </Grid>

    </Grid>
  )
}
