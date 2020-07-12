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
    menu: {
        padding: theme.spacing(.5),
        borderRadius: theme.spacing(1) * 2,
        border: '1px solid rgba(10,10,10,.1)',
        "&:hover": {
            backgroundColor: "rgba(10,10,10,.2)"
        }
    }
}))
const MobileNavMenu: React.FC<{}> = props => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const openMenu = () => setMenuOpen(true);

    return <Grid sm={1} item>
        <Menu onClick={openMenu} className={classes.menu} />
        <MobileNavDialog open={menuOpen} setOpen={setMenuOpen} />
    </Grid >
}

export default MobileNavMenu;