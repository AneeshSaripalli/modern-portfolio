import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    missionText: {
        opacity: 1,
    },
    gridHeader: {
        color: theme.palette.primary.main
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0
        },
        "66%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        }
    },
    gridSection: {
        marginBottom: theme.spacing(8),
    },
    btnBox: {
        width: "200px",
        height: '100px',
    },
    linkButton: {
        color: "white",
        height: "100%",
        fontWeight: 600,
        animation: "Bounce 1s linear infinite",

    },
    "@keyframes Bounce": {
        "0%": {
            bottom: "0px"
        },
        "100%": {
            bottom: "0px"
        },
        "50%": {
            bottom: "100px"
        }
    },
    industry: {
        background: `linear-gradient(45deg, #36C9E3, #66FA6F)`,
        [theme.breakpoints.up("md")]: {
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
    },
    consulting: {
        // background: `linear-gradient(45deg, #F542A4, #F0E035)`,
        background: `linear-gradient(45deg, #36C9E3, #66FA6F)`,

        [theme.breakpoints.up("md")]: {
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
    },
    link: {
        textDecoration: "none"
    }
}));

const Links: React.FC<{}> = props => {
    const classes = useStyles();
    return <Grid container item justify="space-around" className={classes.gridSection}>
        {/* <Link to="/about#industry" className={classes.link}>
            <Box className={classes.btnBox}>
                <Button fullWidth className={clsx([classes.industry, classes.linkButton])}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        Industry Work
                        </Grid>
                </Button>
            </Box>
        </Link>
        <Link to="/about#consulting" className={classes.link}>
            <Box className={classes.btnBox}>
                <Button fullWidth className={clsx([classes.consulting, classes.linkButton])}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        Consulting
                    </Grid>
                </Button>
            </Box>
        </Link> */
        }
        <Link to="/about#consulting" className={classes.link}>
            <Box className={classes.btnBox}>
                <Button variant="text" fullWidth className={clsx([classes.consulting, classes.linkButton])}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Typography variant="h3">
                            See what I do
                        </Typography>
                    </Grid>
                </Button>
            </Box>
        </Link>

    </Grid>
}

export default Links;