import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Link from "@material-ui/icons/Link";
import React, { useRef } from "react";

const useStyles = makeStyles(theme => ({
    pdf: {
        width: "100%",
        height: "100vh",
        margin: theme.spacing(0, 0, 3, 0)
    },
    page: {
        minHeight: "100vh",
        height: "100%"
    },
    actionButtons: {
        marginBottom: theme.spacing(1)
    },
    openBtn: {
        backgroundColor: theme.palette.primary.main,
        transition: "ease 250ms all",
        "&:hover": {
            opacity: .6,
            backgroundColor: theme.palette.primary.main,
        }
    },
    openBtnText: {
        color: "white",
        textTransform: "none"
    },
    downloadBtn: {
        color: theme.palette.primary.main,
        transition: "ease 250ms all",
        "&:hover": {
            opacity: .6,
            color: theme.palette.primary.main,
        }
    },
    downloadBtnText: {
        color: theme.palette.primary.main,
        transition: "ease 250ms all",
        "&:hover": {
            opacity: .6,
            color: theme.palette.primary.main,
        }
    }
}));


const Resume: React.FC<{}> = props => {
    const classes = useStyles();
    const copyRef = useRef<HTMLTextAreaElement>(null);

    const resumeUrl: string = "https://aneeshsaripalli.com/assets/resume.pdf";

    const copyToClip = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!copyRef || !copyRef.current) return;
        copyRef.current.select();
        document.execCommand("copy");
        e.currentTarget.focus();
    }

    return <Grid container direction="column" className={classes.page}>
        <Grid item className={classes.actionButtons}>
            <Grid justify="flex-end" container spacing={1}>
                <Grid item>
                    <Button onClick={copyToClip} className={classes.downloadBtn}>
                        <Link />
                        <textarea style={{ display: "none" }} ref={copyRef} value={resumeUrl} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button target="_blank" variant="contained" href="/assets/resume.pdf" className={classes.openBtn}>
                        <Typography variant="button" className={classes.openBtnText}>
                            Open New Tab
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>

        <Grid item>
            <embed src="/assets/resume.pdf" type="application/pdf" className={classes.pdf} />
        </Grid>
    </Grid>
}


export default Resume;