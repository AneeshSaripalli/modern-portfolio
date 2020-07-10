import { makeStyles, Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../Login/LoginButton';
import "./Header.scss";

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    grid: {
        height: "100%"
    },
    link: {
        borderBottom: "1px solid white",
        transition: "--var(--hoverTransition)",
        "&:hover": {
            // borderBottom: "1px solid gray"
            opacity: ".6",
            cursor: "pointer"
        }
    }
}))

const Header: React.FC<{}> = props => {
    const classes = useStyles();
    return <nav id="header-nav">
        <Grid container justify="space-between" alignItems="center" className={classes.grid}>
            <Grid container item sm={10} alignItems="center">
                <Grid container md={3} item justify="space-around">
                    <Link to="/">
                        <img height="50px" src="/logo/logo.svg" id="logo" />
                    </Link>
                </Grid>
                <Grid container md={5} item justify="space-around">
                    <Link to="/featured" style={{ textDecoration: "none" }} className={classes.link}>
                        <Typography variant="h2">Featured</Typography>
                    </Link>
                    <Link to="/personalized" style={{ textDecoration: "none" }} className={classes.link}>
                        <Typography variant="h2">Best Sellers</Typography>
                    </Link>
                </Grid>
            </Grid>

            <Grid item >
                <LoginButton />
            </Grid>
        </Grid>
    </nav>
}

export default Header;