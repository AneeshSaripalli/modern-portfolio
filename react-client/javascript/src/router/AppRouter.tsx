import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import ContentLayout from "components/layout/Layout";
import { createBrowserHistory } from "history";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Resume from "pages/Resume/Resume";
import Work from "pages/Work/Work";
import React from "react";
import Particles from "../components/Particles/Particles";
import { Route, Router, Switch } from "react-router-dom";

const AppRouter = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles />
      </div>
      <ContentLayout header={<Header />} footer={<Footer />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/resume" exact component={Resume} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </ContentLayout>
    </Router>
  );
};

export default AppRouter;
