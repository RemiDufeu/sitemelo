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

const Xppro = function () {
    const classes = useStyles()

    return (
    <div className={classes.containerSection}>
        <Typography color="primary" variant="h4" className={classes.titreSection}>Expériences proffessionnelles<hr className={classes.hrSection}></hr></Typography>
        <div className={classes.experiences}>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Action culturelle de la Communauté d'Agglométation Sophia Antipolis</Typography>
                <Typography variant="h6" className={classes.date}>Stage Janvier - Mars 2019</Typography>
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Etablissement d'un plan de communication pour la promotion du salon du livre jeuness</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Création de visuels et de biographies d'auteurs</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Gestion des réseaux sociaux</Typography></li>
                    </ul>
            </div>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Le Booketin - achats reventes de livres d'occasion en ligne</Typography>
                <Typography variant="h6" className={classes.date}>Micro-entreprise 2019 - 2020 <a className={classes.lien} target="blank" href="https://www.lebooketin.com/">www.lebooketin.com</a></Typography>
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Création du site internet</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Gestion des réseaux sociaux et analyse statistique</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Gestion des produits et des commandes</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Création de newsletter et offres promotionnelles</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Entretien du lien social avec les différents prospects</Typography></li>
                    </ul>
            </div>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Employée Carrefour Market</Typography>
                <Typography variant="h6" className={classes.date}>Travail étudiant 2018 - 2019 </Typography>
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Charcuterie</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Agent de caisse</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Contact client</Typography></li>
                    </ul>
            </div>
        </div>
    </div>)
}

export default Xppro;