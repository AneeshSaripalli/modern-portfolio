import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Fade,
} from "@material-ui/core";
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";
import keyword_map from "static/keyword_map";
import config_text from "static/text";
import Consulting from "./components/Consulting";
import Industry from "./components/Industry";

const useStyles = makeStyles((theme) => ({
  infoText: {
    opacity: 1,
  },
  h2: {
    marginBottom: theme.spacing(1),
  },
  fadeIn: {
    animation: `$fadeIn 2000ms ${theme.transitions.easing.sharp}`,
    display: "inline",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0.2,
    },
    "100%": {
      opacity: 1,
    },
  },
  gridSection: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
    },
  },
  avatar: {
    width: "64px",
    height: "64px",
    [theme.breakpoints.up("md")]: {
      width: "128px",
      height: "128px",
    },
    margin: theme.spacing(0, 2, 2, 0),
    display: "inline-block",
  },
  spaced: {
    marginBottom: theme.spacing(5),
  },
  filter: {
    color: "black",
  },
}));

const Work: React.FC<{}> = (props) => {
  const classes = useStyles();
  const [filter, setFilter] = useState<string>("");

  const { industry, consulting } = config_text.work;

  function filterEntries<T extends { tags: string[] }>(
    industry: T[],
    filter: string
  ): T[] {
    if (!filter) return industry;

    const normalized_filter: string = keyword_map.get(filter) || filter;

    return industry.filter(
      (entry) =>
        entry.tags.findIndex(
          (tag) => (keyword_map.get(tag) || tag).indexOf(normalized_filter) >= 0
        ) >= 0
    );
  }

  const onFilterChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log("Value", event.target.value);
    setFilter(event.target.value);
  };

  return (
    <Grid direction="column" container justify="flex-start">
      <Grid
        container
        direction="row"
        item
        alignItems="center"
        justify="flex-start"
        className={clsx([classes.gridSection, classes.fadeIn])}
      >
        <Grid item>
          <Typography variant="h1">Work</Typography>
          <br />
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            className={clsx([classes.fadeIn, classes.filter])}
          >
            Some amazing projects I've been fortunate to work on with some great
            people!
          </Typography>
        </Grid>
      </Grid>
      <Fade in timeout={4000}>
        <Grid item>
          <Grid container className={classes.gridSection}>
            <Typography variant="h2">
              If you're looking for any specific technologies, here's a place to
              search.
            </Typography>
            <Grid container item lg={6}>
              <TextField
                fullWidth
                label="Search (ex. React, Docker)"
                placeholder="React.js"
                className={classes.filter}
                onChange={onFilterChange}
              />
            </Grid>
          </Grid>
          <Divider light className={classes.spaced} placeholder="React" />
          <Industry entries={filterEntries(industry, filter)} />
          <Divider light className={classes.spaced} />

          <Consulting entries={filterEntries(consulting, filter)} />
        </Grid>
      </Fade>
    </Grid>
  );
};

export default Work;
