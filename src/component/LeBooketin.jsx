import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VisuelsReseaux from './LeBooketinComponents/visuelsreseaux'
import LeBooketinLogo from '../images/LeBooketinLogo.png'
import { Container, Paper } from '@material-ui/core'
import Newsletter from './LeBooketinComponents/newsletter'
import NiceMatin from './LeBooketinComponents/NiceMatin'
import SiteInternet from './LeBooketinComponents/SiteInternet'

import InitialFade from "./initialFade"
import Fade from "./fade"

const useStyles = makeStyles((theme) => ({
    bodyContainer : {
        textAlign : "center"
    }

}));

const LeBooketin = function () {
    const classes = useStyles()

    return (<div className={classes.bodyContainer}>
        <InitialFade><img src={LeBooketinLogo} width="250px"></img></InitialFade>
        <SiteInternet/>
        <VisuelsReseaux/>
        <Fade><Newsletter/></Fade>
        <Fade><NiceMatin/></Fade>
        
    </div>)
}
// rajouter de l'espace entre les éléments
export default LeBooketin;