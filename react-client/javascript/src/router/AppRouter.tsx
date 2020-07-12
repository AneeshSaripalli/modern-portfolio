import { createBrowserHistory } from 'history';
import React from "react";
import { Route, Router, Switch } from 'react-router-dom';
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const AppRouter = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>)
};

export default AppRouter;