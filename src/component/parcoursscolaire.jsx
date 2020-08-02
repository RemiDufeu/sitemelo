import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titreSection : {
        padding : "20px",
        paddingBottom : "0"
    },
    hrSection : {
        border : `2px solid ${theme.palette.primary.main}`,
        marginTop : "8px"
    },
    containerSection : {
        width : "100%",
        padding : "0px "
    },
    experiences : {
        padding : "0 30px",
        color : theme.palette.primary.dark
    },
    experience : {
        marginBottom : "15px"
    },
    date : {
        padding :"5px 15px"
    },
    listecompetences : {
        listStyle : "none",
        padding : "0px 20px",
        margin : "0"
    },
    li : {
        paddingTop : "3px"
    },
    lien : {
        textDecoration : "none",
        color : theme.palette.primary.light
    }
}));

const ParcoursScolaire = function () {
    const classes = useStyles()

    return (
    <div className={classes.containerSection}>
        <Typography color="primary" variant="h4" className={classes.titreSection}>Parcours scolaire<hr className={classes.hrSection}></hr></Typography>
        <div className={classes.experiences}>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Licence information et communication</Typography>
                <Typography variant="h6" className={classes.date}>Obtenu en 2019 - mention assez bien</Typography>
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Faculté des lettres de Nice Sophia Antipolis</Typography></li>
                    </ul>
            </div>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Baccalauréat Littéraire européen italien</Typography>
                <Typography variant="h6" className={classes.date}>Obtenu en 2016 - mention bien et mention européenne</Typography>
                
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Lycée Audiberti, Antibes</Typography></li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

export default ParcoursScolaire;