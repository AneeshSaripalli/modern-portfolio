import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    gridSection: {
        marginBottom: theme.spacing(8),
    },
    btnBox: {
        width: "200px",
        height: '80px',
    },
    linkButton: {
        color: "white",
        height: "100%",
        boxShadow: "0 5px 10px rgba(0,0,0,0.50)",
    },
    "@keyframes Bounce": {
        "0%": {
            transform: "translateY(-5px)"
        },
        "50%": {
            transform: "translateY(5px)"
        },
        "100%": {
            transform: "translateY(-5px)"
        }
    },
    bounce: {
        animation: `$Bounce 2000ms ${theme.transitions.easing.sharp}`,
        animationIterationCount: "infinite"
    },
    consulting: {
        background: `linear-gradient(45deg, #36C9E3, #66FA6F)`,
        fontWeight: 600,
        boxShadow: "0px"
    },
    link: {
        textDecoration: "none"
    }
}));

const Links: React.FC<{}> = props => {
    const classes = useStyles();
    return (
        <Grid container item justify="space-around" className={clsx([classes.gridSection, classes.bounce])}>
            <Link to="/about" className={classes.link}>
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
        </Grid>)
}

export default Links;