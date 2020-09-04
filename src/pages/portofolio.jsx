import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, Box, Card, Typography, Button } from '@material-ui/core';
import Footer from '../component/footer';
import logobooketin from '../images/logobooketin.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import casalogo from "../images/casalogo.svg"
import LeBooketin from "../component/LeBooketin"
import LaCasa from "../component/LaCasa"


const useStyles = makeStyles((theme) => ({

    cvBody : {
        backgroundColor : theme.palette.secondary.light,
        maxWidth : "1000px",
        paddingTop : "30px",
    },
    card : {
        margin : "40px 0",
        boxShadow : "none",
        border : `4px solid ${theme.palette.primary.main}`,
        backgroundColor : theme.palette.secondary.light,
        color : theme.palette.primary.main,
        padding : "10px"
    },
    icons : {
        padding : "10px",
        
    },
    flex : {
        display : "flex"
    },
    align : {
        alignItems : "center"
    },
    typo : {
        marginLeft : "45px"
    },
    hrSection : {
        border : `2px solid ${theme.palette.primary.main}`,
        marginTop : "8px"
    }
    
}));


const FakeContenu = <Grid container justify="center" style={{paddingTop : "100px",paddingBottom : "100px",}}></Grid>



const Portofolio = function () {
    const [currentContent, SetContent] = useState(0)
    const classes = useStyles()



    const PortofolioContent = function() {
        if (currentContent === 1) {
            return(<LeBooketin/>)
        }
        if (currentContent === 2) {
            return(<LaCasa/>)
        }
        return (FakeContenu)
        
    }

    function ChangeContent (nb) {
        SetContent(nb)
    }

    const Content1 = function () {
        ChangeContent(1)
    }

    const Content2 = function () {
        ChangeContent(2)
    }
    
    return (
        <>
            <Container className={classes.cvBody}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Grid container className={classes.card} alignItems="center" justify="center">
                            <Grid item xs={5} sm={3}><img width="100%" src={logobooketin}></img></Grid>
                            <Grid item xs={8} sm={5} className={classes.align}><Typography variant="h4">Le Booketin</Typography></Grid>
                            <Grid item xs={8} sm={4} className={classes.align}><Button color="primary" onClick={Content1} className={classes.typo} disabled={currentContent==1}>{ currentContent==1 ? <><Typography variant="h6" >Ouvert</Typography><ArrowDownwardIcon/></> : <><Typography variant="h6" >Ouvrir</Typography><ArrowForwardIosIcon/></>}</Button></Grid>
                        </Grid>
                        <Grid container className={classes.card} alignItems="center" justify="center">
                            <Grid item xs={5} sm={3}><img width="88%" className={classes.icons} src={casalogo}></img></Grid>
                            <Grid item xs={8} sm={5} className={classes.align}><Typography variant="h4">La C.A.S.A</Typography></Grid>
                            <Grid item xs={8} sm={4} className={classes.align}><Button color="primary" onClick={Content2} className={classes.typo} disabled={currentContent==2}>{ currentContent==2 ? <><Typography variant="h6" >Ouvert</Typography><ArrowDownwardIcon/></> : <><Typography variant="h6" >Ouvrir</Typography><ArrowForwardIosIcon/></>}</Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <hr className={classes.hrSection}></hr>
                <PortofolioContent/>
            </Container>
            <Footer/>
        </>
    )
}

export default Portofolio;