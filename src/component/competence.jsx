import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    competence : {
        display : "flex",
    },
    flexImg : {
        width : "50px",
        height : "50px",
        padding : "15px",
        paddingLeft : "0"
    },
    flexText : {
        display :"flex",
        flexDirection : "Column",
        justifyContent : "space-around",
        color : theme.palette.primary.dark,
    }
}));

const Competence = function ({ image, intitule }) {

    const classes = useStyles()

    return(
        <Grid item xs={6} sm={4} className={classes.competence}>
            <div className={classes.flexImg}><img width="50px" height="auto" src={image} alt="photo competence"></img></div>
            <div className={classes.flexText}><Typography variant="subtitle1" >{intitule}</Typography></div>
        </Grid>
    )
}

export default Competence;