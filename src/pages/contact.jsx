import React from 'react'
import Particles from 'react-particles-js'
import { makeStyles, Typography } from '@material-ui/core';
import "../component/particles.css"

import Footer from '../component/footer'
const useStyles = makeStyles((theme) => ({
    container : {
        backgroundColor : theme.palette.primary.light,
        height : "100%"
    },
    contact : {
        textAlign : "center",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
		height : "734px",
		color : theme.palette.primary.dark,
		position : "absolute",
		zIndex : "10000",
		top : "0",
		left : "0",
		right : "0"	
	},
	lien : {
        textDecoration : "none",
        color : theme.palette.primary.main,
        zIndex : "9999"
	},
	fakediv : {
		height : "743px"
	}
}));

const Contact = function () {
    const classes = useStyles()
    return (
        <div className ={ classes.container}>
            <div className = {classes.bubble} >
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 30,
	            "random": true,
	            "anim": {
	                "speed": 3,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
            </div>
        <div className ={ classes.contact}>
                <Typography color="primary" variant="h2">Méloée Delannoy</Typography>
				<Typography variant="h5">Mail : <a className={classes.lien} href="mailto:meloee974@yahoo.fr">meloee974@yahoo.fr</a></Typography>
				<Typography variant="h5">Téléphone : <a className={classes.lien} href="tel:+33689265208">06 89 26 52 08</a></Typography>
				<Typography variant="h5">Linkedin : <a className={classes.lien} target="blank" href="https://www.linkedin.com/in/m%C3%A9lo%C3%A9e-delannoy-b83535171/">@meloeedelannoy</a></Typography>
        </div>
		<div className ={ classes.fakediv}>

		</div>
        <Footer/>
        </div>
    )
}

export default Contact;