import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import photoCv from '../images/tetemelo.jpg'
import Particles from 'react-particles-js'
import { Container, Typography, Grid } from '@material-ui/core';

import Competences from '../component/competences'
import Langues from '../component/langues'
import Divers from '../component/divers'
import Informations from '../component/informations'
import Xppro from '../component/xppro'
import Benevolat from '../component/benevolat'
import ParcoursScolaire from '../component/parcoursscolaire'
import Footer from '../component/footer'

import '../component/cvparticles.css'

const useStyles = makeStyles((theme) => ({
    headerCV : {
        backgroundColor : theme.palette.primary.light,
        textAlign : "center",
        height : "200px",
        zIndex : "10",
    },
    imagetete : {
        borderRadius : "100%",
        border : "7px solid white",
        position : "relative",
        bottom: "-100px",
        zIndex : "100"
    },
    cvBody : {
        backgroundColor : theme.palette.secondary.light,
        maxWidth : "1000px",
        paddingTop : "50px",
    },
    
}));

const Curriculum = function () {
    const classes = useStyles();
    return (
        <div>    
            <div className ={classes.headerCV}>
                <Particles
                    height="264px"
                    params={{
                        particles: {
                            number: {
                                value: 300,
                                density: {
                                    enable: true,
                                    value_area: 1500
                                }
                            },
                            line_linked: {
                                enable: true,
                                opacity: 0.10
                            },
                            move: {
                                direction: "top",
                                speed: 0.10
                            },
                            size: {
                                value: 2.3
                            },
                            opacity: {
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.10
                                }
                            }
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                }
                            },
                            modes: {
                                push: {
                                    particles_nb: 1
                                }
                            }
                        },
                        retina_detect: true
                    }} />
                <img className={classes.imagetete} src={photoCv} width="160px" height="auto"/>
            </div>
            
            <Container className={classes.cvBody}>
                <Competences/>
                <ParcoursScolaire />
                <Grid container>
                    <Grid item sx={12} sm={6}>
                        <Informations/>
                    </Grid>
                    <Grid item sx={12} sm={6}>
                        <Langues/>
                        <Divers/>
                    </Grid>
                    
                </Grid>
                <Xppro/>
                <Benevolat/>
                
                <br></br>
                <br></br>
            </Container>

            <Footer />
        </div>
    )
}

export default Curriculum;