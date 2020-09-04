import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core';
import ImgWText from '../ImgWText'
import Logo from '../../images/logobooketin.png'
import preparationcommande from '../../images/preparationcommande.jpg'
import box from '../../images/box.jpg'
import marquepage from '../../images/marquepage.jpeg'
import Fade from '../../component/fade'
import InitialFade from '../../component/initialFade'


const useStyles = makeStyles((theme) => ({
    titreSect : {
        padding: "15px 0",
        paddingTop: "35px"
    },
    soustitre : {
        padding: "20px 0",
        color : theme.palette.primary.main,
        paddingTop: "35px"
    },
    soussoustitre : {
      paddingTop: "15px",
      color : theme.palette.primary.main
  },
    caption : {
        padding: "15px 0",
        color : theme.palette.primary.dark
    },
    doubleimage : {
        padding : "20px 0"
    }
}));

const SiteInternet = function () {
    const classes = useStyles()


    return (
    <>
        <InitialFade>
            <Typography variant="h4" color="primary" className={classes.titreSect}>Création du Site internet</Typography>
            <ImgWText Img={Logo} Text="Le Booketin est un site permettant l’achat et la revente de livre d’occasion afin de leur offrir une nouvelle vie ! J’avais la volonté de faire des prix bas afin de laisser un libre accès à la culture pour tous !"><div><br/><Button variant="contained" color="primary" href="https://www.lebooketin.com/" target="blank">Visiter le site</Button></div></ImgWText>
        </InitialFade>
        <Fade>
            <Typography variant="h5" className={classes.soustitre} >Référencement de plus de 600 livres</Typography>
            <Grid container justify="center">
                <Grid item xs={12} sm={6}><iframe src="https://www.lebooketin.com/young-adult/fille-des-cauchemars.html" width="100%" height="720px" frameBorder="none"></iframe></Grid>
            </Grid>
            <br></br>
            <br></br> 
        </Fade>
        <Fade>
            <Typography variant="h5" className={classes.soustitre}>Préparation, logistique et envoi de commande</Typography>
            <ImgWText Img={preparationcommande} Text="Je porte une attention particulière aux colis de mes clients. Chaque livre est soigneusement emballé afin qu’ils arrivent dans le meilleur état possible. J’assure les livraisons en France, ainsi qu’en Belgique et au Luxembourg. Par la suite, d’autres pays s’ajouteront à cette petite liste."><br/><Typography variant="h6" color="primary"></Typography></ImgWText>
        </Fade>
        <Fade>
            <Typography variant="h5" className={classes.soustitre}>Stratégie de Cross-selling</Typography>
            <Grid container justify="center">
                <Grid item xs={12} sm={6}><Typography variant="subtitle1" className={classes.caption}>Afin d’augmenter le panier moyen de mes clients, j’ai créé une gamme de produit complémentaire : les marques-pages. Ils sont dessinés et imprimés en France dans un nombre très limité pour que mes clients soient les seuls à les avoir.</Typography></Grid>
            </Grid>
        </Fade>
        <Fade>
            <Grid container justify="space-around" alignItems="center">
                <Grid item xs={10} sm={5} className={classes.doubleimage}><img src={box} width="100%"></img></Grid>
                <Grid item xs={10} sm={5} className={classes.doubleimage}><img src={marquepage}  width="100%"></img></Grid>
            </Grid>
        </Fade>
    </>)
}

export default SiteInternet;