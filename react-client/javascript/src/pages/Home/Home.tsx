import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import config_text from "static/text";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout/Layout";
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
        </Grid>
    </Layout>
}

export default Home;