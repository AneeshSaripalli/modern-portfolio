import {
  Avatar, Box, Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

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

const About: React.FC<{}> = (props) => {
  const classes = useStyles();

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
        <Grid item>
          <Grid item sm={2}>
            <Avatar
              variant="circle"
              className={classes.avatar}
              alt="Face picture"
              src="/assets/images/face.jpg"
            />
          </Grid>
          <Grid item>
            <Typography variant="h1">About Me</Typography>
            <br />
          </Grid>
          <Grid item>
            <Typography variant="body1" className={clsx([classes.filter])}>
              Interests, hobbies, and the like. I can't code <i>all</i> the
              time.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider light className={clsx([classes.spaced])} />
      <Grid item className={classes.gridSection}>
        <Grid item>
          <Typography variant="h1">
            <u>Interests & Hobbies</u>
          </Typography>
          <br />
          <br />
          <Box className={classes.spaced}>
            <Typography variant="h2" className={classes.infoText}>
              Bouldering
            </Typography>
            <Typography variant="body2" className={classes.infoText}>
              Got hooked when I Seattle when I was interning at Amazon.
              <br />
              I found a great bouldering place in Dallas to keep my addiction
              going.
              <br />
              Looking forward for quarantine to end to get back into it.
            </Typography>
          </Box>
          <Divider light className={classes.spaced} />

          <Box className={classes.spaced}>
            <Typography variant="h2" className={classes.infoText}>
              Hiking
            </Typography>
            <Typography variant="body2" className={classes.infoText}>
              I grew up in the Northwest so this was always something I enjoyed
              doing.
              <br />
              Seattle had some awesome hiking spots. <br />
            </Typography>
          </Box>
          <Divider light className={classes.spaced} />

          <Box className={classes.spaced}>
            <Typography variant="h2" className={classes.infoText}>
              Reading
            </Typography>
            <Typography variant="body2" className={classes.infoText}>
              I'm really into reading about
              <Typography variant="body1">
                <ul>
                  <li>People Management</li>
                  <li>Behavioral Economics</li>
                  <li>Tech Startup Ideation</li>
                  <li>Political History</li>
                  <li>Decision-making Psychology</li>
                  <li>UI/UX Design</li>
                </ul>
              </Typography>
              I'd personally recommend <i>Thinking Fast & Slow</i>, <i>Nudge</i>
              , and <i>Start With No</i>.
            </Typography>
            <Typography variant="body1">
              I constantly find myself looking for my next book. I'd <b>love</b>{" "}
              book recommendations at{" "}
              <a href="mailto:aneeshsaripalli@gmail.com">my email</a>.<br />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
