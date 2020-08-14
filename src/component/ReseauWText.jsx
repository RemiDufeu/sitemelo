import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Facebook from '../images/Facebook_logo_36x36.svg'
import Instagram from '../images/Instagram.svg'
import Twitter from '../images/Twitter_Bird.svg'
import './mouseover.css'

const useStyles = makeStyles((theme) => ({
    containerDiapo : {
        padding: "20px 0"
    },
    textDiapo : {
        width : '48%',
        display: 'flex',
        justifyContent : 'space-around',
        flexDirection : 'column',
        paddingBottom : "20px"
    },
    Twitter : {
        border : "5px solid #00acee",
        margin : "7px",
        borderRadius : "10px",
        color : "#00acee"
    },
    Insta : {
        border : "5px solid #833AB4",
        margin : "7px",
        borderRadius : "10px",
        color : "#833AB4"
    },
    Facebook : {
        border : "5px solid #3b5998",
        margin : "7px",
        borderRadius : "10px",
        color : "#3b5998"
    }
  }));

const ImageWText = function ({ Text }) {
    
    const classes = useStyles();
    return (<Grid container className={classes.containerDiapo} justify="space-around" alignItems="center">
                
                <Grid item xs={12} sm={12} className={classes.textDiapo} >
                    <Typography variant="h3" color="primary" >
                        {Text}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} container justify="space-around" alignItems="center">
                    <Grid item xs={2}><a href="https://www.instagram.com/le_booketin/?hl=fr" target="blank"><img className="mouseoverRS" width ="100%" src={Instagram}/></a></Grid>
                    <Grid item xs={2}><a href="https://twitter.com/le_booketin" target="blank"><img className="mouseoverRS" width ="100%" src={Twitter}></img></a></Grid>
                    <Grid item xs={2}><a href="https://www.facebook.com/lebooketin/" target="blank"><img className="mouseoverRS" width ="100%" src={Facebook} style={{borderRadius : "10px"}}></img></a></Grid>
                </Grid>
        
            </Grid>)
}

export default ImageWText;