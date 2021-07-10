import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/get-started" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
