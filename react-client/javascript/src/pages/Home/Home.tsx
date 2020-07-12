import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import config_text from "static/text";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout/Layout";
import clsx from "clsx";
import { Link } from "react-router-dom";
async function load() {
    const result = await import('wasm');

    result.start_websocket();
}
load();

const useStyles = makeStyles(theme => ({
    missionText: {
        // animation: `$fadeIn 3000ms ${theme.transitions.easing.easeInOut}`,
        // animationDelay: "1s",
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
    linkButton: {
        boxShadow: "0 5px 10px rgba(0,0,0,0.50)",
        color: "white",
        fontWeight: 600,
        width: "150px",
        height: '80px',
    },
    industry: {
        background: `linear-gradient(45deg, #795CFA, #36C9E3)`,
    },
    consulting: {
        color: "white",
        fontWeight: 600,
        backgroundColor: theme.palette.primary.main,
        background: `linear-gradient(45deg, #F542A4, #F0E035)`
    }
}));

const Home = () => {
    const classes = useStyles();
    return <Layout header={<Header />} footer={<Footer />} >
        <Grid direction="column" container justify="flex-start">
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" className={classes.gridHeader}>My Mission</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.mission}</Typography>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" className={classes.gridHeader}>How do I do it?</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.how}</Typography>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" className={classes.gridHeader}>What can I do?</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.what}</Typography>
            </Grid>
            <Grid container item justify="space-around" className={classes.gridSection}>
                <Link to="/about#industry" style={{ textDecoration: "none" }}>
                    <Button className={clsx([classes.industry, classes.linkButton])}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            Industry Work
                    </Grid>
                    </Button>
                </Link>

                <Button className={clsx([classes.consulting, classes.linkButton])}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        Consulting
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    </Layout>
}

export default Home;