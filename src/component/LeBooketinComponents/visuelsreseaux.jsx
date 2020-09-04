import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReseauWText from '../ReseauWText'
import { Container, Typography, Grid } from '@material-ui/core';
import Carousel from '../carousel';
import ImgWText from '../ImgWText'

import story1 from '../../images/story/1.jpg'
import story2 from '../../images/story/2.jpg'
import story3 from '../../images/story/3.jpg'
import story4 from '../../images/story/4.jpg'

import Fade from '../fade'

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
    caption2 : {
        padding: "0 15px",
        color : theme.palette.primary.light,
        textAlign : "end",
    },
    insta : {
        display : "flex",
        textAlign : "center",
        justifyContent: "center"
    }
}));

const VisuelsReseaux = function () {
    const classes = useStyles()
    
useEffect(()=>{
    const script = document.createElement("script");

    script.src = "//www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script)
})

    const imgsPostInsta=[
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/101643932_558460951537603_4083724367809165501_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tQhi50cfNlgAX-9zC1I&oh=bb3ba9ceaa8dc4d858b2ecc69323089c&oe=5F53EC86",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116871818_1157349857981423_7449719412935003045_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ayAVDiMXjWgAX9uIgY0&oh=8299ec6092d20ee1e4f70eba43980e42&oe=5F571125",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100925361_2383625045273314_1733818829018440017_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=epqCEPFjKUcAX9Tp77H&oh=95d7501cfb967424d947b2633c49b53b&oe=5F564AC7",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/107988223_170210947894951_8167854472061392164_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KqJi-paluCQAX9dVZBm&oh=50e7e10c450cd971c756ae78d241d53a&oe=5F56FD96",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/104681201_167115998145351_6754225193069049575_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=X95UaNeCG58AX_JSUVG&oh=320c6a5c06469da317e8feae7902c67a&oe=5F54179B",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/91643932_2832324356803717_2095262506869921476_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=seSvbSYM9RQAX9DkvzB&oh=e1ece154453b56ce721df0847cbdaa50&oe=5F53B9F9",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/101644031_574986443412194_7549200907680986451_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=kZ672KIGCPYAX9k4AQe&oh=b4ab2ad97bb84b8f2ef6830d876433d8&oe=5F555FF4",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/107273332_2614988098818457_4580355094118727008_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1utBJowyblAAX-8BQqp&oh=9ec31ce432dfdc69e547a99fd3843ef8&oe=5F56D341",
        "https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/97947326_330902484560303_1891668842437499853_n.jpg?_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=WmN4sFr6QksAX8DyKcK&oh=d4726fe83b5daabe9f830b158a2489b6&oe=5F53E6C4"
    ]

    return (<>
            <Fade><ReseauWText Text="Gestion des réseaux sociaux"/></Fade>
            <Fade>
                <Typography variant="h4" className={classes.soustitre}  >Création de contenu original</Typography>
                <br></br>
                <Typography variant="h5" className={classes.caption2}  >Feed Instagram</Typography>
                <Carousel imgs={imgsPostInsta}/>
            </Fade>
            <br/>
            <br/>
            <Fade>
                <Typography variant="h5" className={classes.caption2}  >Template de stories</Typography>
                <Carousel imgs ={[story1, story2, story3, story4]} nbImgScroll={2} nbImgVisible={2} />
            </Fade>
            <br/>
            <br/>
            <Fade>
                <Typography variant="h5" className={classes.caption2}  >Publications Facebook</Typography>
                <br></br>
                <Grid container justify="center"  >
                    <Grid item sm={6} xs={12}> <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flebooketin%2Fphotos%2Fa.105079874309633%2F189075629243390%2F%3Ftype%3D3&width=500" width="95%" height="720px" style={{border: "none" ,overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></Grid>
                </Grid>
            </Fade>
            <Fade>
                <Typography variant="h4" className={classes.soustitre}  >Partenariat</Typography>
                <Typography variant="subtitle1" className={classes.caption}  >Le partenariat avec différentes influenceuses permet d’augmenter considérablement la visibilité, c’est pourquoi j’ai demandé à Cynthia si elle voulait collaborer. Après lui avoir envoyer quelques livres de son choix, elle a partagé son avis sur la boutique en toute transparence et a même eu un code promo pour ses abonnés !</Typography>
                <div className={classes.insta}  ><blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CC3RYtKqr9R/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style={{background:"#FFF", border: "0", borderRadius: "3px", boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin: "1px", maxWidth: "540px", minWidth: "326px" , padding: "0", width: "99.375%", width: "-webkit-calc(100% - 2px)", width: "calc(100% - 2px)"}}><div style={{padding: "16px"}}> <a href="https://www.instagram.com/p/CC3RYtKqr9R/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background: "#FFFFFF", lineHeight: "0", padding: "0 0", textAlign: "center", textDecoration: "none", width:"100%", target:"_blank"}}> <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}> <div style={{backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: "0", height: "40px", marginRight: '14px', width: "40px"}}></div> <div style={{display: "flex", flexDirection: "column", flexGrow: '1', justifyContent: "center"}}> <div style={{backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: "0", height: "14px", marginBottom: '6px', width: '100px'}}></div> <div style={{backgroundColor: "#F4F4F4", borderRadius: '4px', flexGrow: '0', height: "14px", width: "60px"}}></div></div></div><div style={{padding: "19% 0"}}></div> <div style={{display:'block', height: '50px', margin: '0 auto 12px', width: '50px'}}><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style={{paddingTop: "8px"}}> <div style={{color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "550", lineHeight: "18px"}}> Voir cette publication sur Instagram</div></div><div style={{padding: "12.5% 0"}}></div> <div style={{display: "flex", flexDirection: "row", marginBottom: '14px', alignItems: 'center'}}><div> <div style={{backgroundColor: "#F4F4F4", borderRadius: "50%", height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}}></div> <div style={{backgroundColor: "#F4F4F4", height: "12.5px", transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: "12.5px", flexBrow: '0', marginRight: "14px", marginLeft: "2px" }}></div> <div style={{backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}}></div></div><div style={{marginLeft: "8px"}}> <div style={{backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: '0', height: '20px', width: '20px'}}></div> <div style={{width: "0", height: '0', borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: "2px solid transparent", transform: "translateX(16px) translateY(-4px) rotate(30deg)"}}></div></div><div style={{marginLeft: "auto"}}> <div style={{width: "0px", borderTop: '8px solid #F4F4F4', borderRight: "8px solid transparent", transform: "translateY(16px)"}}></div> <div style={{ backgroundColor: "#F4F4F4", flexGrow: "0", height: "12px", width: "16px", transform: "translateY(-4px)"}}></div> <div style={{width: "0", height: '0', borderTop: '8px solid #F4F4F4', borderLeft: "8px solid transparent", transform: "translateY(-4px) translateX(8px)"}}></div></div></div></a> <p style={{margin: "8px 0 0 0", padding:"0 4px"}}> <a href="https://www.instagram.com/p/CC3RYtKqr9R/?utm_source=ig_embed&amp;utm_campaign=loading" style={{color:"#000", fontFamily:"Arial,sans-serif", fontSize:"14px", fontStyle:"normal", fontWeight: "normal", lineHeight: "17px", textDecoration: "none", wordWrap: "break-word"}} target="_blank">Je crois pouvoir affirmer sans hésiter que Mathis est le plus grand lecteur de la maison. Il dévore les livres à une vitesse impressionnante et il est toujours à la recherche de nouveaux ouvrages à se mettre sous la dent 😄 De ce fait, je suis à l’affût des bons plans pour lui trouver les séries qu’il adore à petits prix, et je sais que je ne suis pas la seule. Il y a quelques jours je vous ai montré en Stories une réception de bandes dessinées en provenance de la boutique @le_booketin. Ce site de rachat et de vente de livres d’occasion propose de nombreux titres en très bon état ( jeunesse ou pas ! ) à des prix vraiment très raisonnables. À titre d’exemple, on y trouve des bandes dessinées à 3€ ! Mathis a choisi de nouveaux tomes de la saga Les Légendaires pour continuer sa collection, ainsi que deux bandes dessinées des Simpsons. Et vous, sur quoi allez vous craquer ? 😉 Avec le code CYNTHIA10 vous avez -10% sur la boutique @le_booketin , marque page et box inclus ( valable jusqu’au 26 Juillet ) . . . #bookstagramfrance #bookstagrammer #booksandcoffee #bookcommunity #mangafr #cupsinframe #japanlover #culturetripbooks #homelibrary #mybookfeatures #simplethingsmadebeautiful #bookster #slowmoment #calmversation #mybookfeatures #livresjeunesse #simplemoments #seekthesimplicity #amonthoflovely #myinteriorsquares #bandesdessinees #showemyourstyled #leslegendaires #simpleandstill #cosycorner</a></p> <p style={{color:"#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", lineHeight:"17px", marginBottom: "0", marginTop: "8px", overflow:"hidden", padding: "8px 0 7px", textAlign: "center", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>Une publication partagée par <a href="https://www.instagram.com/cynthiakanaie/?utm_source=ig_embed&amp;utm_campaign=loading" style={{color:"#c9c8cd", fontFamily: "Arial,sans-serif", fontSize:"14px", fontStyle: "normal", fontWeight: "normal", lineHeight: "17px"}} target="_blank"> Freaky Family Story</a> (@cynthiakanaie) le <time style={{fontFamily: "Arial,sans-serif", fontSize: "14px", lineHeight: "17px"}} dateTime="2020-07-20T12:18:25+00:00">20 Juil. 2020 à 5 :18 PDT</time></p></div></blockquote></div>
            </Fade>
    </>)
}

export default VisuelsReseaux;