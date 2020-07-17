import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/icons/Menu";
import React, { useState } from 'react';
import MobileNavDialog from './MobileNavDialog';

const useStyles = makeStyles(theme => ({
    menu: {
        padding: theme.spacing(.5),
        borderRadius: theme.spacing(1) * 2,
        border: `1px solid rgba(10, 10, 10, .1)`,
        "&:hover": {
            backgroundColor: "rgba(10, 10, 10, .2)"
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