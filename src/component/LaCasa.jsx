import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import casaLogo from '../images/lacasa/casaLogo.svg'

import Presentation from './LaCASAComponenets/presentation'
import SalonduLivre from './LaCASAComponenets/salondulivre'

const useStyles = makeStyles((theme) => ({
    bodyContainer : {
        textAlign : "center",
        paddingTop : "25px"
    }

}));

const LaCasa = function () {
    const classes = useStyles()

    return (<div className={classes.bodyContainer}>
        <Presentation/>
        <SalonduLivre/>
    </div>)
}

export default LaCasa;