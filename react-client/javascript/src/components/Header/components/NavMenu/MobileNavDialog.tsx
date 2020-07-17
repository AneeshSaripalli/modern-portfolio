import { Dialog, Divider, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import Slide, { SlideProps } from '@material-ui/core/Slide';
import React from "react";
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
    },
    dialog: {
        background: `linear-gradient(135deg, #ffffff, rgba(10,10,10,.15))`
    }
}));


const MobileNavDialog: React.FC<IProps> = ({ open, setOpen }) => {
    const classes = useStyles();
    const handleClose = () => setOpen(false);

    return (<Dialog fullWidth maxWidth="md" open={open} onClick={handleClose} onClose={handleClose} TransitionComponent={Transition}>
        <List className={classes.dialog}>
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