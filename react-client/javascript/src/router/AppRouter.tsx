import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import ContentLayout from 'components/layout/Layout';
import { createBrowserHistory } from 'history';
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Work from 'pages/Work/Work';
import React from "react";
import { Route, Router, Switch } from 'react-router-dom';

const AppRouter = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <ContentLayout header={<Header />} footer={<Footer />} >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/work" exact component={Work} />
                </Switch>
            </ContentLayout>

        </Router>)
};

export default AppRouter;