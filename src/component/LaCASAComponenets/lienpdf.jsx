import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import CalendrierPdf from '../../images/lacasa/calendrier/calendrierCom.pdf'

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles((theme) => ({
    cadre : {
        border : `3px solid ${theme.palette.primary.main}`,
        margin : "15px 0",
        listStyle : "none",
        color : theme.palette.primary.light,
        textDecoration : "underline",
        cursor : "pointer"
    }
}));

const LienPDF = function () {
    const classes = useStyles()

    return (<>
    <a href={CalendrierPdf} target="_blank">
    <Grid container justify="center">
        <Grid item className={classes.cadre} xs={11} sm={7} >
            <ListItem>
                <ListItemText>Calendrier de communication</ListItemText>
                <ListItemSecondaryAction><PictureAsPdfIcon color="secondary"/></ListItemSecondaryAction>
            </ListItem>
        </Grid>
    </Grid>
    </a>
    </>)
}

export default LienPDF;