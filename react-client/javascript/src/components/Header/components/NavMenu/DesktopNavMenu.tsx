import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
  topGrid: {
    height: "40px",
  },
  link: {
    padding: theme.spacing(0.5),
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "18px",
    color: "black",
    transition: "ease 250ms all",
    "&:hover": {
      opacity: ".6",
    },
  },
}));
const DesktopNavMenu: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <Grid md={4} item container justify="space-between" alignItems="flex-end">
      <Grid item>
        <Typography variant="h3">
          <Link to="/about" className={classes.link}>
            About me
          </Link>
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h3">
          <Link to="/work" className={classes.link}>
            Work
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">
          <Link to="/resume" className={classes.link}>
            Resume
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DesktopNavMenu;
