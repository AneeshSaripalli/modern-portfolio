import { Divider, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from 'react';
import config_text from "static/text";
import Industry from "./components/Industry";
import Consulting from "./components/Consulting";

const useStyles = makeStyles(theme => ({
    infoText: {
        opacity: 1,
    },
    h2: {
        marginBottom: theme.spacing(1)
    },
    fadeIn: {
        animation: `$fadeIn 2000ms ${theme.transitions.easing.sharp}`,
        display: "inline",
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: .2
        },
        "100%": {
            opacity: 1,
        }
    },
    gridSection: {
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
            padding: theme.spacing(2),
            borderRadius: theme.spacing(1)
        }
    },
    avatar: {
        width: "64px",
        height: "64px",
        [theme.breakpoints.up("md")]: {
            width: "128px",
            height: "128px",

        },
        margin: theme.spacing(0, 2, 2, 0),
        display: "inline-block"
    },
    spaced: {
        marginBottom: theme.spacing(5),
    },
    filter: {
        color: "black"
    }
}));

const Work: React.FC<{}> = props => {
    const classes = useStyles();

    return <Grid direction="column" container justify="flex-start">
        <Grid container direction="row" item alignItems="center" justify="flex-start" className={clsx([classes.gridSection, classes.fadeIn])}>
            <Grid item>
                <Typography variant="h1" >Work</Typography><br />
            </Grid>
            <Grid item>
                <Typography variant="caption" className={clsx([classes.fadeIn, classes.filter])}>
                    Some amazing projects I've been fortunate to work on with some great people!
                </Typography>
            </Grid>
        </Grid>

        <Grid container className={classes.gridSection} >
            <Typography variant="h2">
                If you're looking for any specific technologies, here's a place to search.
            </Typography>
            <Grid container item lg={6}>
                <TextField fullWidth label="Search (ex. React, Docker)" placeholder="React.js" className={classes.filter} />
            </Grid>
        </Grid>
        <Divider light className={classes.spaced} placeholder="React" />
        <Industry />
        <Divider light className={classes.spaced} />

        <Consulting />

    </Grid>

}

export default Work;