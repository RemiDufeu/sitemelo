import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import casaLogo from '../images/lacasa/casaLogo.svg'

import Presentation from './LaCASAComponenets/presentation'

const useStyles = makeStyles((theme) => ({
    bodyContainer : {
        textAlign : "center",
        paddingTop : "25px"
    },
    section : {
        paddingTop : "30px"
    }

}));

const LaCasa = function () {
    const classes = useStyles()

    return (<div className={classes.bodyContainer}>
        <img src={casaLogo} width="200x"/>
        <div className={classes.section}><Presentation/> </div>
        <div className={classes.section}></div>
        <div className={classes.section}></div>
        <div className={classes.section}></div>
        <div className={classes.section}></div>
        <div className={classes.section}></div>
    </div>)
}

export default LaCasa;