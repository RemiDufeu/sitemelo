import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Nicematin from '../../images/nicematin.jpg'
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titreSect : {
        padding: "15px 0",
        paddingTop: "35px"
    },
}));

const NiceMatin = function () {
    const classes = useStyles()

    return (
    <div  >  
        <Typography variant="h4" color="primary" className={classes.titreSect}>Apparition sur le journal Nice Matin</Typography>
        <br/>
        <Grid container justify="center">
            <Grid item xs={12} sm={8}><img src={Nicematin} alt="nicematin" width="100%"></img></Grid>
        </Grid>
        <br/>
        <br/>
        
    </div>)
}

export default NiceMatin;