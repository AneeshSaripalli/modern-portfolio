import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.scss";

const Footer: React.FC<{}> = props => {
    return <div className="footer">
        <div><Typography display="inline" variant="h3">Aneesh Saripalli</Typography></div>
    </div>
}

export default Footer;