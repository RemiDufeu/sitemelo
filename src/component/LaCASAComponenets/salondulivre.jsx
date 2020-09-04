import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core';
import ImageWText from '../ImgWText';
import Salon from "../../images/lacasa/devanturesalon.jpg"
import Carousel from "../carousel"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ComposedChart,
  } from 'recharts';

import insta from "../../images/lacasa/INSTACASA.png"

import Affiche1 from "../../images/lacasa/affiche/1.jpg"
import Affiche2 from "../../images/lacasa/affiche/2.jpg"
import Affiche3 from "../../images/lacasa/affiche/3.jpg"

import p1 from "../../images/lacasa/livret/p1.jpg"
import p2 from "../../images/lacasa/livret/p2.jpg"
import p3 from "../../images/lacasa/livret/p3.jpg"
import p4 from "../../images/lacasa/livret/p4.jpg"
import p5 from "../../images/lacasa/livret/p5.jpg"
import p6 from "../../images/lacasa/livret/p6.jpg"
import p7 from "../../images/lacasa/livret/p7.jpg"
import p8 from "../../images/lacasa/livret/p8.jpg"
import p9 from "../../images/lacasa/livret/p9.jpg"
import p10 from "../../images/lacasa/livret/p10.jpg"
import p11 from "../../images/lacasa/livret/p11.jpg"
import p12 from "../../images/lacasa/livret/p12.jpg"
import p13 from "../../images/lacasa/livret/p13.jpg"
import p14 from "../../images/lacasa/livret/p14.jpg"
import p15 from "../../images/lacasa/livret/p15.jpg"
import p16 from "../../images/lacasa/livret/p16.jpg"
import p17 from "../../images/lacasa/livret/p17.jpg"
import p18 from "../../images/lacasa/livret/p18.jpg"
import p19 from "../../images/lacasa/livret/p19.jpg"
import p20 from "../../images/lacasa/livret/p20.jpg"

import calendrier1 from "../../images/lacasa/calendrier/1.jpg"
import calendrier2 from "../../images/lacasa/calendrier/2.jpg"
import LienPDF from './lienpdf';

import Fade from '../fade'
import InitialFade from "../initialFade"

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
    }
}));

const data = [
    {
      name: 'Semaine 0', prévisions: 0, abonnés: 0
    },
    {
      name: 'Semaine 1', prévisions: 40, abonnés: 43
    },
    {
      name: 'Semaine 2', prévisions: 80, abonnés: 102
    },
    {
      name: 'Semaine 3', prévisions: 120, abonnés: 152
    },
    {
      name: 'Semaine 4', prévisions: 160, abonnés: 170
    }
  ];

const data2 = [
  {
    age : '13-17', pourcentage : 1
  }, {
    age : '18-24', pourcentage : 13
  }, {
    age : '25-34', pourcentage : 32
  }, {
    age : '35-44', pourcentage : 31
  }, {
    age : '45-54', pourcentage : 14
  }, {
    age : '65+', pourcentage : 3
  },
]

const data3 = [
  {
    ville : "Antibes", pourcentage : 19
  },{
    ville : "Paris", pourcentage : 16
  },{
    ville : "Nice", pourcentage : 10
  },{
    ville : "Velbonne", pourcentage : 4
  },{
    ville : "Cannes", pourcentage : 3
  },
]

const SalonduLivre = function () {


    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm')); 

    return (
    <>
        <InitialFade>
          <Typography className={classes.titreSect} variant="h4" color="primary">Salon du livre jeunesse édition 2019</Typography>
          <ImageWText Text="Afin de finaliser ma licence en information et communication, j’ai eu la chance de participer à l’organisation de la 2nd édition du salon du livre jeunesse d’Antibes, et plus particulièrement la communication du salon. L’équipe m’a laissé carte-blanche pour m’occuper précisément des réseaux sociaux, canal de communication qu’ils avaient délaissé aux profits d’une communication plus classique." Img={Salon}/>
        </InitialFade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Mise en page de l'affiche du salon</Typography>
          <Typography className={classes.caption} variant="subtitle1">En collaboration avec Michel Alzéal, dessinateur de ces personnages, et de l’équipe graphique, nous avons ensemble réfléchi à l’affiche officielle du salon. Après avoir présenté nos idées, c’est finalement ma base qui a été retenu.</Typography>
          <Carousel imgs={[Affiche1, Affiche2, Affiche3]} nbImgVisible={3} nbImgScroll={3}></Carousel>
        </Fade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Rédaction du livret de présentation</Typography>
          <Typography className={classes.caption} variant="subtitle1">A la suite de la création de l’affiche, l’équipe m’a laissé faire la maquette et la réalisation finale du livret de présentation. Ce livret a pour but de promouvoir le salon, présenter les différents auteurs et ateliers mais également toutes les horaires pour que le visiteur soit renseigné au mieux.</Typography>
          <Carousel imgs={[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20]} nbImgVisible={2} nbImgScroll={1}></Carousel>
        </Fade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Alimentation des réseaux sociaux</Typography>
          <Typography className={classes.caption} variant="subtitle1">J’ai établi un plan de communication pour les réseaux sociaux afin de présenter ma stratégie à l’ensemble de l’équipe. Mettre en avant des couvertures de livres sur Instagram, présenter des auteurs par écrit sur Facebook et interagir avec eux sur Twitter ont été les bases. J’ai ensuite étudié les horaires afin de partager ce contenu à des moments opportuns.</Typography>
          {matches ? <Carousel imgs={[calendrier1, calendrier2]} nbImgVisible={1} nbImgScroll={1}></Carousel> : <LienPDF/> }
        </Fade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Statistiques Instagram</Typography>
          <ImageWText Text="Alors que le compte Facebook avait été délaissé par la petite équipe, le compte Instagram n’avait pas du tout été créé. Forte de proposition, je leur avais établi une ligne à suivre ainsi qu’une liste d’idée de contenu à produire, même une fois mon stage fini. Nous avions fixé ensemble différents objectifs en terme d’abonnés, objectifs plus que réussi." Img={insta}><div><br/><Button variant="contained" color="primary" href="https://www.instagram.com/mediatheques_casa/?hl=fr" target="blank">Visiter l'instagram</Button></div></ImageWText>
        </Fade>
        <Fade>
            <Typography className={classes.soussoustitre} variant="h6">Croissance du compte Instagram</Typography>
            <div style={{ width: '100%', height: 300, maxWidth:750, margin : "auto", paddingBottom :"35px"}}> 
              <ResponsiveContainer>
                  <LineChart
                  data={data}
                  margin={{
                      top: 10, right: 30, left: 0, bottom: 0,
                  }}
              >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line  dataKey="prévisions" stroke="#EFBD13" />
                      <Line  dataKey="abonnés" stroke="#EF4F13" />
                  </LineChart>
              </ResponsiveContainer>
            </div>
        </Fade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Détermination de l'audiance</Typography>
          <Typography className={classes.soussoustitre} variant="h6">Pourcentage d'audiance par tranche d'âge</Typography>
          <div style={{ width: '100%', height: 300, maxWidth:750, margin : "auto", paddingBottom :"35px"}}> 
            <ResponsiveContainer>
              <ComposedChart
                data={data2}
                layout="vertical"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid />
                <XAxis type="number" />
                <YAxis dataKey="age" type="category" />
                <Tooltip />
                <Legend />
                <Bar  dataKey="pourcentage" fill="#ee6c4d" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Fade>
        <Fade>
          <Typography className={classes.soussoustitre} variant="h6">Pourcentage d'audiance par ville</Typography>
              <div style={{ width: '100%', height: 300, maxWidth:750, margin : "auto", paddingBottom :"35px"}}> 
                  <ResponsiveContainer>
                    <ComposedChart
                    data={data3}
                    layout="vertical"
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis type="number" />
                    <YAxis dataKey="ville" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar  dataKey="pourcentage" fill="#ee6c4d" />
                  </ComposedChart>
                  </ResponsiveContainer>
                </div>
          <Typography className={classes.caption} variant="subtitle1">Les statistiques obtenus nous ont permis de cibler notre audience et donc affiner nos horaires de publication ainsi que le contenu. </Typography>
        </Fade>
        <Fade>
          <Typography className={classes.soustitre} variant="h5">Facebook</Typography>
          <Typography className={classes.caption} variant="subtitle1">Afin de promouvoir le salon du livre j'ai publié des biographies d'auteurs présent à l'évènement.</Typography>
          <Grid container justify="center" style={{paddingBottom : "35px"}}>
              <Grid item md={6} xs={12}> <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmediatheque.casa%2Fphotos%2Fa.2093880874028189%2F2154049984677944%2F%3Ftype%3D3&width=500" width="95%" height="660px" style={{border: "none" ,overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></Grid>
              <Grid item md={6} xs={12}> <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmediatheque.casa%2Fphotos%2Fa.2093880874028189%2F2145960628820213%2F%3Ftype%3D3&width=500" width="95%" height="660px" style={{border: "none" ,overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></Grid>
          </Grid>
        </Fade>
    </>)
}

export default SalonduLivre;