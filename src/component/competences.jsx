import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core';

import Competence from '../component/competence'
import photoshop from '../images/photoshop.svg'
import packoffice from '../images/packoffice.svg'
import illustrator from '../images/illustrator.svg'
import html from '../images/html.svg'
import css from '../images/css.png'
import socialnetwork from '../images/socialnetwork.png'
import redaction from '../images/redaction.png'
import clap from '../images/clap.png'
import chart from '../images/chart.png'

const useStyles = makeStyles((theme) => ({
    titreSection : {
        padding : "20px",
        paddingBottom : "0"
    },
    hrSection : {
        border : `2px solid ${theme.palette.primary.main}`,
        marginTop : "8px"
    },
    competencesGrid : {
        display : "flex",
        justifyContent :"space-around",
        width : "100%",
        paddingLeft : "10px"
    }
}));

const Competences = function () {
    const classes = useStyles()

    return (<div className={classes.cvSection}> 
        <Typography color="primary" variant="h4" className={classes.titreSection}>Compétences<hr className={classes.hrSection}></hr></Typography>
        <Grid className={classes.competencesGrid} container>
            <Competence image={photoshop} intitule="Photoshop"/>
            <Competence image={illustrator} intitule="Illustrator"/>
            <Competence image={packoffice} intitule="Microsof Office"/>
            <Competence image={redaction} intitule="Rédaction"/>
            <Competence image={html} intitule="HTML"/>
            <Competence image={css} intitule="CSS"/>
            <Competence image={socialnetwork} intitule="Gestion réseaux sociaux"/>
            <Competence image={chart} intitule="Statistiques des réseaux sociaux"/>
            <Competence image={clap} intitule="Réalisation vidéo et photos"/>
        </Grid>
    </div>)
}

export default Competences;