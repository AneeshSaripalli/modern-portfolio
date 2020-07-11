import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    topGrid: {
        borderBottom: "1px solid gray"
    },
    link: {
        transition: "--var(--hoverTransition)",
        "&:hover": {
            // borderBottom: "1px solid gray"
            opacity: ".6",
            cursor: "pointer",
            color: "#4BB6F9"

        },
        "&:active": {
            color: "#4BB6F9"
        },
        textDecoration: "none",
        fontSize: "18px"
    }
}))

const Header: React.FC<{}> = props => {
    const classes = useStyles();
    return <nav id="header-nav">
        <Grid container justify="space-between" alignItems="stretch" className={classes.topGrid}>
            <Grid container item md={4} alignItems="flex-end">
                <Link to="/" className={classes.link}>
                    Aneesh - Software Engineer
                </Link>
            </Grid>
            <Grid md={4} item container justify="space-between" alignItems="flex-end">
                <Grid item>
                    <Link to="/" className={classes.link}>About me</Link>
                </Grid>
                <Grid>
                    <Link to="/" className={classes.link}>Work</Link>
                </Grid>
                <Grid item>
                    <Link to="/" className={classes.link}>Resume</Link>
                </Grid>
            </Grid>
        </Grid>
    </nav>
}

export default Header;