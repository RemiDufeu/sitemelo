import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    link : {
        color : '#FFEBED',
        textDecoration : 'none',
        margin : '12px',
        fontSize : '1.3em'
    },
    activeLink : {
        color : theme.palette.primary.light,
        textDecoration : 'underline'
    },
    BarContainer : {
        backgroundColor: theme.palette.primary.main,
        position: '-webkit-sticky',
        position : 'sticky',
        width : '100%',
        textAlign: "center",
        top : "0",
        zIndex : "9999999"
       
    },
    ListContainer : {
        padding : '15px'
    }


  }));

const TopBar = function() {
    const classes = useStyles();

    return(
        <div className={classes.BarContainer}>
                <div className={classes.ListContainer}>
                    <NavLink className={classes.link} to="/" exact activeClassName={classes.activeLink}>Curriculum</NavLink>
                    <NavLink className={classes.link} to="/Portofolio" activeClassName={classes.activeLink}>Portofolio</NavLink>
                    <NavLink className={classes.link} to="/Contact"  activeClassName={classes.activeLink}>Contact</NavLink>
                </div>
        </div>
    )
}

export default TopBar;