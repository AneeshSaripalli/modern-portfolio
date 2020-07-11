import {
    createMuiTheme,
    responsiveFontSizes,
    Theme,
} from "@material-ui/core/styles";

// You can pass an object to the 'createMuiTheme' function
const theme: Theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: "glacial indifference",
            button: {
                color: "white",
                fontWeight: 400,
            },
            h1: {
                fontSize: "24px",
                display: "inline",
                color: "#4BB6F9",
            },
            h2: {
                color: "gray",
                fontSize: "24px",
                textDecoration: "none",
                fontWeight: 700
            },
            subtitle1: {
                fontFamily: "glacial indifference",
                fontSize: "20px"
            },

        },
        palette: {
            background: {
                paper: "#ffffff",
            },
            secondary: {
                main: "#4aa0fe",
            },
            primary: {
                light: "#36496a",
                main: "#4BB6F9",
            },
        },
    })
);

export default theme;
