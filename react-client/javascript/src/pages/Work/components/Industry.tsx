import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import config_text from "static/text";


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

const Industry: React.FC<{}> = props => {
    const classes = useStyles();
    return <Grid item className={classes.gridSection}>
        <Typography variant="h1" >Industry</Typography><br /><br />
        {config_text.work.industry.map(({ title, description }) => (
            <>
                <Typography variant="h2" className={classes.infoText}>
                    {title}
                </Typography>
                <Typography variant="body1" className={classes.infoText}>
                    {description}
                </Typography>
            </>))}

    </Grid>

}

export default Industry;