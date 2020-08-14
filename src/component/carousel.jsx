import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    panorama : {
        transition : "0.5s",
        transform : "translate3d(0, 0, 0)",
        position : "relative",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
   carousel : {
     position : "relative",
     overflow : "hidden"
   },
   carouItem : {
     float : "left",
     display : "flex",
     flexDirection: "row",
     justifyContent:"center",
     alignItems: "center"
   },
   prevbtn : {
     position : "absolute",
     color : theme.palette.secondary.main,
     top : "calc(50% - 30px)",
     left : "3%"
   },
   nextbtn : {
    position : "absolute",
    color : theme.palette.secondary.main,
    top : "calc(50% - 30px)",
    right : "3%"
  },
    }));

/*

***structure du component :
un element parent et plusieurs enfant avec les diapos
element parent : plusieurs options -slides visible -slides to Scroll

entourer les slides par un parent qui bouge

<carousel className={classes.carrousel}>
  <panorama className={classes.panorama}>
    <carousel item>
      enfant pourquoi pas passer les images en parametres et ensuite les mapper ou alors les mettre en dur
    </caroussel item>
  </panorama>
</caroussel>

***pour le style : 
carrousel : position relative, overflow : "hidden"

panorama : width : largeur de l'enfant * nb d'enfants visible (ratio),  + ', 0, 0)" + transition 0.3s + translate3d(0,0,0)
panorama::after : contenu '', clear : both, display:table

carousel item : float left, width : ((100/ slides visibles) / ratio) + "%"

enfant : 


creer une methode pour changer le ratios pour le responsive ou alors creer un media querry avec un break point qui switch entre <Carrousel> et <CarouselMobile/>


***pour la navigation :
un useState avec un etat qui retient l'index de la div courrante
une fonction qui change l'index de la div courant en fonction du parametre
deux buttons :
  transform : "translate3d (' + (pourcentage d'elements visibles)
  next : onclick={next} style: position : absolute, 40px+40px, un svg en url de background et bien centré (center center no-repeat) + 20px*20px pour le background + border radius + top 50% ajuster les margins+
  prev : onclick={prev}


*/

const CarouselWithMediaQuery = function ({ imgs, nbImgVisible, nbImgScroll }) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return(
    <>
      {matches ? <CarouselComponent imgs={imgs} nbImgVisible={nbImgVisible} nbImgScroll={nbImgScroll}/> : <CarouselComponent imgs={imgs} nbImgVisible={1} nbImgScroll={1}/>}
    </>
  )
}


const CarouselComponent = function ({ imgs, nbImgVisible = 3, nbImgScroll= 3 }) {

    const classes = useStyles()
    const [indexCarou, SetCarou] = useState(0)
    const ratio = imgs.length / nbImgVisible

    

    const listeItemes = imgs.map((img, index) => <div className={classes.carouItem} key={index} style={{ width : ((100/nbImgVisible)/ratio)+'%',}}><img style={{ width : '90%'}} src={img}></img></div>)

    const prev = function () {
      // prend l'index actuel  et l'index cible
      let current = indexCarou
      let target = current - nbImgScroll
      if (target < 0) {
        //si l'index cible est négatif on place la cible a 0 et si la cible etait deja a 0 on revient aux dernieres slides
        if (current !== 0 ){
          target = 0
        } else {
          target = imgs.length - 1 - nbImgVisible + 1
        }
      } 
      SetCarou(target)
    }

    const next = function () {
      let current = indexCarou
      let target = current + nbImgScroll
      if ( target > (imgs.length - 1 - nbImgVisible + 1 ) ) {
        if (current == (imgs.length - 1 - nbImgVisible + 1 ) ){
          target = 0
        } else {
          target = (imgs.length - 1 - nbImgVisible + 1 )
        }
      } 
      SetCarou(target)
    }

    return(
        <div className={classes.carousel}>
          <div className={classes.panorama} style={{ width : (ratio * 100)+ "%", transform : `translate(${-indexCarou * (100/imgs.length)}%, 0` }}>
            {listeItemes}
          </div>
          <div className={classes.prevbtn} onClick={prev}><ChevronLeftIcon style={{ fontSize: 60 }}/></div>
    <div className={classes.nextbtn} onClick={next}><ChevronRightIcon style={{ fontSize: 60 }}/></div>
      </div>
    )
}

export default CarouselWithMediaQuery;