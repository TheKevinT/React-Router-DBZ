import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../Pages/LoginScreen";

const LoginRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default LoginRouter;
