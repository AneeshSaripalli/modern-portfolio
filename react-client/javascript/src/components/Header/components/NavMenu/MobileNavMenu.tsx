import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React, { useState } from 'react';
import Menu from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import MobileNavDialog from './MobileNavDialog';

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    topGrid: {
        height: "40px"
    },
    link: {
        padding: theme.spacing(.5),
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "18px",
        color: 'black',
        transition: "ease 250ms all",
        "&:hover": {
            opacity: ".6"
        }
    }
}))
const MobileNavMenu: React.FC<{}> = props => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const openMenu = () => setMenuOpen(true);

    return <Grid sm={1} item>
        <Menu onClick={openMenu} />
        <MobileNavDialog open={menuOpen} setOpen={setMenuOpen} />
    </Grid >
}

export default MobileNavMenu;