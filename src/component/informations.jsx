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
    listeinfo : {
        listStyle : "none",
        paddingRight : "20px",
        paddingLeft : "30px",
        color : theme.palette.primary.dark,
        paddingTop : "5px",
        zIndex : "1000000",
        marginBottom : "0"
    },
    li : {
        paddingBottom : "6px"
    },
    lien : {
        textDecoration : "none",
        color : theme.palette.primary.light,
        zIndex : "1000000"
    },
    cvSection : {
        paddingTop : "10px"
    }
}));

const Informations = function () {
    const classes = useStyles()

    return (
    <div className={classes.cvSection}> 
        <Typography color="primary" variant="h4" className={classes.titreSection}>Informations<hr className={classes.hrSection}></hr></Typography>
        <ul className={classes.listeinfo}>
            <li className={classes.li} style={{textAlign : "center"}}><Typography color="secondary" variant="h5">Méloée Delannoy</Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Date de naissance : 21 décembre 1998</Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Email : <a className={classes.lien} href="mailto:meloee974@yahoo.fr">meloee974@yahoo.fr</a></Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Téléphone : <a className={classes.lien} href="tel:+33689265208">06 89 26 52 08</a></Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Linkedin : <a className={classes.lien} target="blank" href="https://www.linkedin.com/in/m%C3%A9lo%C3%A9e-delannoy-b83535171/">@meloeedelannoy</a></Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Adresse : 2 rue du général Vandenberg, 06600 Antibes</Typography></li>
            <li className={classes.li}><Typography variant="subtitle1">Titulaire du Permis B</Typography></li>
        </ul>
        <div>

        </div>
    </div>)
}

export default Informations;