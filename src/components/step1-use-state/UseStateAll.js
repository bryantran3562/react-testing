import React from 'react'

import { useState } from 'react'
import { Grid, Button } from '@mui/material'

export const UseStateAll = () => {
    // BT - Declare your variables.

    const [number, setNumber] = useState(0)
    const [string, setString] = useState('')
    const [bool, setBool] = useState(false)
    const [object, setObject] = useState({
        first_name: '',
        last_name: '',
        age: null
    })
    const [myArray, setMyArray] = useState([])

    const handleClick = () => {

        setNumber(2)
        setString('This is a test')
        setBool(true)
        console.log(bool)
        setObject({
            first_name: 'trong',
            last_name: 'Tran',
            age: 59
        })
        setMyArray([...myArray,{id: myArray.length,value:'testing'}])
    

    }


  return (
    <Grid container>
        <Grid item xs={12} sm={6} md={12}>
            <div>UseStateAll</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <div>Number: { number }</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <div>String: { string }</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <div>Boolean: { String(bool) }</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <div>Object: {object.first_name} - {object.last_name} - {object.age}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <div>MyArray: { myArray.map(item => { return <div key={item.id}>{item.value}</div> }) }</div>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
            <Button variant="contained" color="success" onClick={handleClick}>Click Me</Button>
        </Grid>         
    </Grid>
  )
}
