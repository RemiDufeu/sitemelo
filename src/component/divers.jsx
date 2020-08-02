import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titreSection : {
        padding : "20px",
        paddingBottom : "0"
    },
    hrSection : {
        border : `2px solid ${theme.palette.primary.main}`,
        marginTop : "8px"
    },
    containerinterets : {
        padding : "5px 35px",
        color : theme.palette.primary.dark,
    },
    linespacing : {
        marginTop : "6px"
    }
}));

const Divers = function () {
    const classes = useStyles()

    return (
    <div className={classes.cvSection}>
        <Typography color="primary" variant="h4" className={classes.titreSection}>Centres d'intérêt<hr className={classes.hrSection}></hr></Typography>
        <Grid container className={classes.containerinterets}>
            <Grid item xs={12} className={classes.linespacing}><Typography variant="h6">Lecture (policier, thriller...)</Typography></Grid>
            <Grid item xs={12} className={classes.linespacing}><Typography variant="h6">Ecriture de roman</Typography></Grid>
            <Grid item xs={12} className={classes.linespacing}><Typography variant="h6">Cuisine</Typography></Grid>
        </Grid>
    </div>)
}

export default Divers;