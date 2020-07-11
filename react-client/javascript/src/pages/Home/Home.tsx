import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout/Layout";
import { Grid, Typography, makeStyles } from "@material-ui/core";
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
                <Typography variant="subtitle1" className={classes.missionText}>Enable others to realize their small business dreams and visions through beautiful, mobile responsive, full-stack websites.</Typography>
            </Grid>
        </Grid>
    </Layout>
}

export default Home;