import React from 'react'
import appLogo from '../assets/icon2.png';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
    } 
}));

export const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className="custom-navbar">
                <Toolbar>
                    <div className="logo-icon-nav">
                        <img className="icon-nav" src={appLogo} alt="AppLogo" />
                    </div>
                    <Typography variant="h6" className={classes.title}></Typography>
                        <NavLink to="/" className="nav-tabs">
                            INICIO
                        </NavLink>
                        <a href="#benefits" className="nav-tabs">BENEFICIOS</a>
                        <NavLink to="/login" className="nav-tabs nav-login-tab">
                            LOGIN
                        </NavLink>
                </Toolbar>
            </AppBar>
            {/* <div className={classes.offset}></div> */}
        </>
    )
}
