import React from 'react';
import {useStyles} from '../public/styles/CoolButtonStyle';
import Grid from '@mui/material'
const FAQ = (props) => {
    const {image, icon, question, answer} = props;
    const classes = useStyles();
    return(
        <div>
            <Grid 
            container 
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                   <img src={image} alt="image"/>
                   <span><img src={icon} alt="icon"/> </span>
                   <Grid container spacing={3}>
                       <h3>{question}</h3>
                       <p>{answer}</p>
                   </Grid> 
                </Grid>
            </Grid>
        </div>    
    )
}