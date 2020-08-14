import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core';
import ImgWText from '../ImgWText'
import Logo from '../../images/logobooketin.png'
import preparationcommande from '../../images/preparationcommande.jpg'
import box from '../../images/box.jpg'
import marquepage from '../../images/marquepage.jpeg'

const useStyles = makeStyles((theme) => ({
    soustitre : {
        color : theme.palette.primary.light
    },
    doubleimage : {
        padding : "20px 0"
    }
}));

const SiteInternet = function () {
    const classes = useStyles()

    return (
    <>
    <br/>
    <Typography variant="h3" color="primary">Creation du Site internet</Typography>
    <ImgWText Img={Logo} Text="Le Booketin blabla bla bla bla raconté un peu la volnté, Méloée le fera mieux"><div><br/><Button variant="contained" color="primary" href="https://www.lebooketin.com/" target="blank">Visiter le site</Button></div></ImgWText>
    <Typography variant="h4" className={classes.soustitre}>Référencement de plus de 500 livres</Typography>
    <br/>
    <Grid container justify="center">
        <Grid item xs={12} sm={6}><iframe src="https://www.lebooketin.com/thrillers/7-ans-apres-de-guillaume-musso.html" width="100%" height="720px" frameBorder="none"></iframe></Grid>
    </Grid>
    <br/>
    <br/>
    <ImgWText Img={preparationcommande} Text="Préparation, logisitique et envoi de commandes"><br/><Typography variant="h6" color="primary">Je porte une attention particulière aux colis de mes clients. Chaque livre est soigneusement emballé et nous assurons la livraison en France en Belgique ainsi qu'au Luxembourg</Typography></ImgWText>
    <br/>
    <Typography variant="h4" className={classes.soustitre}>Stratégie de Cross-selling</Typography>
    <br/>
    <Grid container justify="center">
        <Grid item xs={12} sm={6}><Typography variant="h6" color="primary">Dans le but d'augmenter le panier moyen de mes clients, j'ai créé un produit complémentaire : "Les marques pages Le Booketin" ainsi que la vente de Box.</Typography></Grid>
    </Grid>
    <Grid container justify="space-around">
        <Grid item xs={10} sm={5} className={classes.doubleimage}><img src={box} width="75%"></img></Grid>
        <Grid item xs={10} sm={5} className={classes.doubleimage}><img src={marquepage}  width="100%"></img></Grid>
    </Grid>
    
    </>)
}

export default SiteInternet;