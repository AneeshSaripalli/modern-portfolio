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
        animation: `$fadeIn 3000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: .1,
        },
        "100%": {
            opacity: 1,
        }
    },
}));

const Home = () => {
    const classes = useStyles();
    return <Layout header={<Header />} footer={<Footer />} >
        <Grid direction="column" container justify="flex-start">
            <Grid item>
                <Typography variant="h1">My Mission</Typography><br /><br />
                <Typography variant="subtitle1" className={classes.missionText}>{config_text.mission}</Typography>
            </Grid>
        </Grid>
    </Layout>
}

export default Home;