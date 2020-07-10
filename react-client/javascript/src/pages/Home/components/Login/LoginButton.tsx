import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    loginButton: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            opacity: ".6"
        }
    }
}));

const LoginButton: React.FC<{}> = props => {
    const classes = useStyles();
    return <Button variant="contained" className={classes.loginButton}>
        <Typography variant="button">
            Login Now
        </Typography>
    </Button>;
}

export default LoginButton;