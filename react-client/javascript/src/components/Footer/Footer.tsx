import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingBottom: theme.spacing(2),
  },
  inner: {
    overflow: "hidden",
    textAlign: "center",
    "&:before": {
      backgroundColor: "#000",
      content: '""',
      display: "inline-block",
      height: "1px",
      position: "relative",
      verticalAlign: "middle",
      width: "50%",
      right: "0.5em",
      marginLeft: "-50%",
    },
    "&:after": {
      backgroundColor: "#000",
      content: '""',
      display: "inline-block",
      height: "1px",
      position: "relative",
      verticalAlign: "middle",
      width: "50%",
      left: "0.5em",
      marginRight: "-50%",
    },
  },
}));

const Footer: React.FC<{}> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Typography display="inline" variant="h3">
          Aneesh Saripalli
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
