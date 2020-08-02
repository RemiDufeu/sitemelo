import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    containerfooter : {
        width : "100%",
        backgroundColor: theme.palette.primary.light,
    },
    contenu : {
        color : "white",
        padding : "70px",
        display : "flex",
        flexWrap : "wrap"
    },
    lien : {
        textDecoration : "none",
        color : theme.palette.primary.main
    },
    span : {
        paddingRight : "20px",
        paddingTop : "10px"
    }
}));

const Footer = function () {
    const classes = useStyles()

    return (<div className={classes.containerfooter}>
        <div className={classes.contenu}>
            <div className={classes.span}>Site web par Rémi Dufeu</div>
            <div className={classes.span} >Mise à jour le 01/08/2020</div>
            <div className={classes.span} > Icônes par <a className={classes.lien} target="_blank" href="https://icones8.fr">Icons8</a></div>
        </div>
    </div>)
}

export default Footer;