import { makeStyles, useMediaQuery, useTheme, Typography, Avatar } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import MobileNavMenu from './components/NavMenu/MobileNavMenu';
import DesktopNavMenu from './components/NavMenu/DesktopNavMenu';

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    topGrid: {
        height: "40px"
    },
    link: {
        textDecoration: "none",
        color: 'black',
        transition: "ease 250ms all",
        "&:hover": {
            opacity: ".6"
        },
    }
}))

const Header: React.FC<{}> = props => {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));


    return <nav id="header-nav">
        <Grid container justify="space-between" alignItems="flex-end" className={classes.topGrid}>
            <Grid item sm={4}>
                <Link to="/" className={classes.link}>
                    <Typography display="inline" align="center" variant="h3">
                        {mobile ? "Aneesh" : "Aneesh - Software Engineer"}
                    </Typography>
                </Link>
            </Grid>
            {mobile ? <MobileNavMenu /> : <DesktopNavMenu />}
        </Grid >
    </nav >
}

export default Header;