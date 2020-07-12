import About from "../pages/About/About";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" exact component={Home} />
                <Route to="/about" exact component={About} />
            </Switch>
        </BrowserRouter>)
};

export default AppRouter;