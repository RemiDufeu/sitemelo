import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerDiapo : {
        padding : "25px 0",
        
    },
    textDiapo : {
        width : '48%',
        display: 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        color  : theme.palette.primary.dark,
        padding : "15px",
        marginBottom : "30px"
    },
  }));

const ImageWText = function ({ Text, Img, children }) {
    
    const classes = useStyles();
    return (<Grid container justify="space-evenly" className={classes.containerDiapo}>
                <Grid item xs={12} sm={6} className={classes.textDiapo}  >
                    <Typography variant="subtitle1" >
                        {Text}
                    </Typography>
                    {children}
                </Grid>
                <Grid item xs={10} sm={4}>
                    <img src={Img} alt='livre' width="100%"></img>
                </Grid>
        
            </Grid>)
}

export default ImageWText;