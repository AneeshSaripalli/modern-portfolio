import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
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
        className={clsx([classes.gridSection])}
      >
        <Grid container item>
          <Typography variant="h1">Work</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={clsx([classes.filter])}>
            Some amazing projects I've been fortunate to work on with some great
            people!
          </Typography>
        </Grid>
      </Grid>
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
    </Grid>
  );
};

export default Work;
