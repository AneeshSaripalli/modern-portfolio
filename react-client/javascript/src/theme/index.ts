import {
    createMuiTheme,
    responsiveFontSizes,
    Theme,
} from "@material-ui/core/styles";

// You can pass an object to the 'createMuiTheme' function
const theme: Theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: "objektiv-mk1, sans-serif",
            button: {
                color: "white",
                fontWeight: 400,
            },
            h1: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                fontSize: "28px",
                fontWeight: 400,
                display: "inline",
                color: "#4BB6F9",
            },
            h2: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                color: "#36C9E3",
                fontSize: "20px",
                fontWeight: 400,
            },
            h3: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                fontSize: "18px",
                textTransform: "uppercase",

            },
            subtitle1: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                fontSize: "18px"
            },
            body1: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                fontSize: "16px"
            },
            body2: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                fontSize: "14px"
            },
            caption: {
                fontFamily: "objektiv-mk1, sans-serif",
                fontStyle: "normal",
                color: "black",
                fontSize: "11px",
            }

        },
        palette: {
            background: {
                paper: "#ffffff",
            },
            secondary: {
                main: "#66FA6F",
            },
            primary: {
                light: "#36C9E3",
                main: "#4BB6F9",
            },
        },
    })
);

export default theme;
