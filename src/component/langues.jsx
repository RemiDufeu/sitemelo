import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, LinearProgress } from '@material-ui/core';
import Anglais from '../images/drapeauAnglais.svg'
import Italie from '../images/drapeauItalie.svg'

const useStyles = makeStyles((theme) => ({
    titreSection : {
        padding : "20px",
        paddingBottom : "0"
    },
    hrSection : {
        border : `2px solid ${theme.palette.primary.main}`,
        marginTop : "8px"
    },
    flexitem : {
        padding: "15px",
        display: "flex",
        color : theme.palette.primary.dark
    },
    flexgrid : {

    },
    text : {
        width:"70%",
        marginRight : "10px"
    },
    drapeau : {
        margin : "10px",
        marginLeft : "15px",
        marginRight: "15px",
        marginBottom :"auto",
        border: `5px solid ${theme.palette.primary.light}`,
        borderRadius : "5px"
    },
    textbar : {
        display :"flex",
        justifyContent: "space-between",
        paddingRight : "5px"
    },
    imgcnotainer : {
        width : "110px"
    }
}));

const Competences = function () {
    const classes = useStyles()

    return (
    <div className={classes.cvSection}>
        <Typography color="primary" variant="h4" className={classes.titreSection}>Langues<hr className={classes.hrSection}></hr></Typography>
        <Grid container className={classes.flexgrid}>
            <Grid item xs={12} sm={12} className={classes.flexitem}>
                <div className={classes.imgcnotainer}><img src={Anglais} width="auto" height="35px" className={classes.drapeau} /></div>
                <div className={classes.text}>
                    <Typography variant="h5">Anglais</Typography>
                    <div className={classes.textbar}>
                        <Typography variant="body2">Niveau de maîtrise</Typography>
                        <Typography color="primary" variant="body2">Avancé</Typography>
                    </div>
                    <LinearProgress color="primary" variant="determinate" value={80} />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.flexitem}> 
            <div className={classes.imgcnotainer}><img src={Italie} width="auto" height="35px" className={classes.drapeau} /></div>
                <div className={classes.text}>
                    <Typography variant="h5">Italien</Typography>
                    <div  className={classes.textbar}>
                    <Typography variant="body2">Niveau de maîtrise</Typography>
                    <Typography color="secondary" variant="body2">Bilingue</Typography>
                    </div>
                    <LinearProgress color="secondary" variant="determinate" value={100} />
                </div>
            </Grid>
        </Grid>
    </div>)
}

export default Competences;