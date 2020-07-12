import { Grid, makeStyles, Typography, Avatar, Divider } from "@material-ui/core";
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
        marginBottom: theme.spacing(5),
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
    avatar: {
        width: "64px",
        height: "64px",
        [theme.breakpoints.up("md")]: {
            width: "128px",
            height: "128px",

        },
        marginRight: theme.spacing(2),
        display: "inline-block"
    }
}));

const Home = () => {
    const classes = useStyles();
    return <Layout header={<Header />} footer={<Footer />} >
        <Grid direction="column" container justify="flex-start">
            <Grid container direction="row" item alignItems="center" justify="flex-start" className={classes.gridSection}>
                <Grid item sm={2}>
                    <Avatar variant="circle" className={classes.avatar} alt="Face picture" src="/assets/images/face.png" />
                </Grid>
                <Grid item>
                    <Typography variant="h1" >Hey, it's great to meet you!</Typography><br />
                    <Typography variant="caption">Hope your day goes well.</Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Divider light />
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" >My Mission</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.mission}</Typography>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" >How do I work with you?</Typography><br /><br />
                <Typography variant="body1" className={classes.missionText}>{config_text.home.how}</Typography>
            </Grid>
            <Grid item className={classes.gridSection}>
                <Typography variant="h1" >What can you expect?</Typography><br /><br />
                <Typography variant="h2" className={classes.missionText}>Cooperative Exploration</Typography>

                <Typography variant="body1">
                    {config_text.home.what.exploration}
                </Typography><br />

                <Typography variant="h2" className={classes.missionText}>Iterative Process</Typography>
                <Typography variant="body1">
                    {config_text.home.what.iterative_process}
                </Typography><br />


                <Typography variant="h2" className={classes.missionText}>Phase "Conclusion"</Typography>
                <Typography variant="body1">
                    {config_text.home.what.iterative_conclusion}
                </Typography><br />

            </Grid>
            <Links />
        </Grid>
    </Layout >
}

export default Home;