import { Avatar, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import config_text from "static/text";
import Links from "./components/Links";
async function load() {
    const result = await import('wasm');

    result.start_websocket();
}
load();

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
    }
}));

const Home = () => {
    const classes = useStyles();
    return <Grid direction="column" container justify="flex-start">
        <Grid container direction="row" item alignItems="center" justify="flex-start" className={clsx([classes.gridSection, classes.fadeIn])}>
            <Grid item sm={2}>
                <Avatar variant="circle" className={classes.avatar} alt="Face picture" src="/assets/images/face.jpg" />
            </Grid>
            <Grid item>
                <Typography variant="h1" >Hey, it's great to meet you!</Typography><br />
                <Typography variant="caption" className={classes.fadeIn}>I hope your day goes well.</Typography>
            </Grid>
        </Grid>
        <Divider light className={classes.spaced} />
        <Grid item className={classes.gridSection}>
            <Typography variant="h1" >My Mission</Typography><br /><br />
            <Typography variant="body1" className={classes.infoText}>{config_text.home.mission}</Typography>
        </Grid>
        <Divider light className={classes.spaced} />

        <Grid item className={classes.gridSection}>
            <Typography variant="h1" >How do I work with you?</Typography><br /><br />
            <Typography variant="body1" className={classes.infoText}>{config_text.home.how}</Typography>
        </Grid>
        <Divider light className={classes.spaced} />

        <Grid item className={classes.gridSection}>
            <Typography variant="h1" >What can you expect?</Typography><br /><br />
            <Typography variant="h2" className={clsx([classes.infoText, classes.h2])}>Cooperative Exploration</Typography>

            <Typography variant="body1">
                {config_text.home.what.exploration}
            </Typography><br />

            <Typography variant="h2" className={clsx([classes.infoText, classes.h2])}>Iterative Process</Typography>
            <Typography variant="body1">
                {config_text.home.what.iterative_process}
            </Typography><br />


            <Typography variant="h2" className={clsx([classes.infoText, classes.h2])}>Phase Conclusion</Typography>
            <Typography variant="body1">
                {config_text.home.what.iterative_conclusion}
            </Typography><br />
        </Grid>
        <Divider light className={classes.spaced} />

        <Links />
    </Grid>
}

export default Home;