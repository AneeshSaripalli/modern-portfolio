import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { ProjectEntry } from "static/text";

type IProps = {
    entries: ProjectEntry[];
}

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
    },
    divider: {
        marginTop: theme.spacing(4)
    }
}));

const Industry: React.FC<IProps> = ({ entries }) => {
    const classes = useStyles();

    return <Grid item className={classes.gridSection}>
        <Typography variant="h1" ><u>Industry</u></Typography><br /><br />
        {entries.map(({ title, description, duration, tags }, idx) => (
            <Box key={idx} className={classes.spaced}>
                <Typography variant="h2" className={classes.infoText}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" className={classes.infoText}>
                    {duration}
                </Typography>
                <Typography variant="caption" className={classes.infoText}>
                    <i>My job in one sentence -</i>
                </Typography>
                <Typography variant="body2" className={classes.infoText}>
                    {description}
                </Typography>
            </Box>))
        }
    </Grid >

}

export default Industry;