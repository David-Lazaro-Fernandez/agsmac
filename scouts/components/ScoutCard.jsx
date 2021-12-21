import React from 'react';
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
const ScoutCard = (props) => {
    const {image, name} = props;
    return (
        <div>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                        <img src={image}/>
                    </Grid>    
                    <Grid item xs={6} sm={6}>
                        <h3>{name}</h3>
                    </Grid>    
                </Grid>
            </Card>    
        </div>
    );
}

export default ScoutCard;