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
            h2: {
                color: "gray",
                fontSize: "24px",
                textDecoration: "none",
                fontFamily: "fairwater-sans"
            }
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
                main: "#43B6DE",
            },
        },
    })
);

export default theme;
