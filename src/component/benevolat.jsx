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

const Benevolat = function () {
    const classes = useStyles()

    return (
        <div className={classes.containerSection}>
        <Typography color="primary" variant="h4" className={classes.titreSection}>Benevolat<hr className={classes.hrSection}></hr></Typography>
        <div className={classes.experiences}>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Société Kimcap Création</Typography>
                <Typography variant="h6" className={classes.date}>2018 - 2020 <a href="https://www.kimcapcreations.fr/" target="blank" className={classes.lien}>www.kimcapcreations.fr</a></Typography>
                
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Création du logo et des cartes de visites</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Création et design du site marchand</Typography></li>
                    </ul>
                
            </div>
            <div className={classes.experience}>
                <Typography color="secondary" variant="h5">Blog Passion Cultur'All</Typography>
                <Typography variant="h6" className={classes.date}>2018 - 2019 <a href="https://blogpassionculturall.wordpress.com/" target="blank" className={classes.lien}>www.blogpassionculturall.com</a></Typography>
                    <ul className={classes.listecompetences}>
                        <li className={classes.li}><Typography variant="body1" >Ecriture de chroniques littéraires</Typography></li>
                        <li className={classes.li}><Typography variant="body1" >Création de visuels pour le blog</Typography></li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

export default Benevolat;