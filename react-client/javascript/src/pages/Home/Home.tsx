import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import config_text from "static/text";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout/Layout";
import Links from "./components/Links";
async function load() {
    const result = await import('wasm');

    result.start_websocket();
}
load();

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
                <Typography variant="h1" className={classes.gridHeader}>How do I work with you?</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.how}</Typography>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" className={classes.gridHeader}>What can you expect?</Typography><br /><br />

                <Typography variant="h2" className={classes.missionText}>Cooperative Exploration</Typography>
                <Typography variant="body1">
                    {config_text.home.what.exploration}
                </Typography><br />

                <Typography variant="h2" className={classes.missionText}>Iterative Process</Typography>
                <Typography variant="body1">{config_text.home.what.exploration}</Typography><br />

                <Typography variant="h2" className={classes.missionText}>Phase Conclusion</Typography>
                <Typography variant="body1">{config_text.home.what.exploration}</Typography><br />


            </Grid>
            <Links />
        </Grid>
    </Layout>
}

export default Home;