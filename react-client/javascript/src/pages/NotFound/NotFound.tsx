import { Button, Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  notFound: {
    color: theme.palette.secondary.main,
  },
  notFoundBox: {
    marginBottom: theme.spacing(1),
  },
  box: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  subtitle: {
    color: theme.palette.primary.main,
  },
  "@keyframes Bounce": {
    "0%": {
      transform: "translateY(-5px)",
    },
    "50%": {
      transform: "translateY(5px)",
    },
    "100%": {
      transform: "translateY(-5px)",
    },
  },
  bounce: {
    animation: `$Bounce 2000ms ${theme.transitions.easing.sharp}`,
    animationIterationCount: "infinite",
  },
  routeBtn: {
    background: `linear-gradient(45deg, #36C9E3, #66FA6F)`,
    color: "white",
    boxShadow: "0 5px 10px rgba(0,0,0,0.50)",
    alignSelf: "center",
    height: "50px",
    width: "150px",
  },
  spacing: {
    marginBottom: theme.spacing(20),
  },
  notFoundCaption: {
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
}));

const NotFound: React.FC<{}> = (props) => {
  const history = useLocation();
  const classes = useStyles();

  return (
    <Grid
      direction="column"
      container
      justify="center"
      alignItems="flex-start"
      style={{ height: "100%" }}
    >
      <Grid item className={classes.box}>
        <Typography variant="h1" className={classes.notFound}>
          I'm sorry, I can't find the path <u>{history.pathname}</u>
        </Typography>
      </Grid>
      <Grid item className={classes.notFoundCaption}>
        <Fade in timeout={3000}>
          <div>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Maybe you'd find what you're looking for on the landing page?
              <br />
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              It's a pretty cool landing page.
            </Typography>
          </div>
        </Fade>
      </Grid>
      <Grid item>
        <Link to="/" className={classes.link}>
          <Button
            variant="text"
            className={clsx([classes.bounce, classes.routeBtn])}
          >
            Jump to home
          </Button>
        </Link>
      </Grid>
      <Grid item className={classes.spacing} />
    </Grid>
  );
};

export default NotFound;
