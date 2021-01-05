import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Link } from "react-router-dom";
import DesktopNavMenu from "./components/NavMenu/DesktopNavMenu";
import MobileNavMenu from "./components/NavMenu/MobileNavMenu";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
  topGrid: {
    height: "40px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    transition: "ease 250ms all",
    "&:hover": {
      opacity: ".6",
    },
  },
  header: {
    height: theme.spacing(8),
    margin: theme.spacing(1, 0, 2, 0),
    borderBottom: "1px solid rgba(100, 100, 100, 0.2)",
  },
  image: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.spacing(8),
  },
}));

const Header: React.FC<{}> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav className={classes.header}>
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        className={classes.topGrid}
      >
        <Grid item sm={4}>
          <Link to="/" className={classes.link}>
            <Typography display="inline" align="center" variant="h3">
              Home
            </Typography>
          </Link>
        </Grid>
        {mobile ? <MobileNavMenu /> : <DesktopNavMenu />}
      </Grid>
    </nav>
  );
};

export default Header;
