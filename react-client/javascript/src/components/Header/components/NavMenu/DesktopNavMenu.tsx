import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    topGrid: {
        height: "40px"
    },
    link: {
        padding: theme.spacing(.5),
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "18px",
        color: 'black',
        transition: "ease 250ms all",
        "&:hover": {
            opacity: ".6"
        }
    }
}))
const DesktopNavMenu: React.FC<{}> = props => {
    const classes = useStyles();

    return <Grid md={4} item container justify="space-between" alignItems="flex-end">
        <Grid item>
            <Link to="/about" className={classes.link}>About me</Link>
        </Grid>
        <Grid>
            <Link to="/work" className={classes.link}>Work</Link>
        </Grid>
        <Grid item>
            <Link to="/resume" className={classes.link}>Resume</Link>
        </Grid>
    </Grid>
}

export default DesktopNavMenu;