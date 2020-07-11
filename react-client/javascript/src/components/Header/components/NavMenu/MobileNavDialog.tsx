import { AppBar, Button, Dialog, Divider, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";

import Slide, { SlideProps } from '@material-ui/core/Slide';
import { Link } from "react-router-dom";

type IProps = {
    open: boolean,
    setOpen(visible: boolean): void;
}
const Transition = React.forwardRef(function Transition(props: SlideProps, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: theme.palette.background.paper
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    link: {
        textDecoration: 'none',
        color: "black",

    }
}));


const MobileNavDialog: React.FC<IProps> = ({ open, setOpen }) => {
    const classes = useStyles();
    const handleClose = () => setOpen(false);
    return (<Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} TransitionComponent={Transition}>
        <List>
            <Link to="/about" className={classes.link}>
                <ListItem button >
                    <ListItemText primary="About Me" />
                </ListItem>
            </Link>
            <Divider />
            <Link to="/work" className={classes.link}>
                <ListItem button>
                    <ListItemText primary="Work" />
                </ListItem>
            </Link>
            <Divider />
            <Link to="/resume" className={classes.link}>
                <ListItem button>
                    <ListItemText primary="Resume" />
                </ListItem>
            </Link>
        </List>
    </Dialog>);
}

export default MobileNavDialog;