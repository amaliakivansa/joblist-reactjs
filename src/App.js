import { Redirect, Route, Switch } from "react-router-dom";
import login from "./auth/login";
import Home from "./components";

import React from "react";
import CardDetailJob from "./components/CardDetailJob";

export default function App() {
  const user = localStorage.getItem("loginData");

  return <div>{!user ? <NoAuth /> : <Auth />}</div>;
  function Auth() {
    return (
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path="/job/:jobID" component={CardDetailJob} />
        <Route path="*" render={() => <Redirect to="/home" />} />
      </Switch>
    );
  }
  function NoAuth() {
    return (
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path="/login" component={login} />
        <Route path="*" render={() => <Redirect to="/home" />} />
      </Switch>
    );
  }
}
