import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import LoginScreen from "../Pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <>
      <Router>
        {/* <AppRouter /> */}
        <Switch>
          {/* <Route path="/login" component={LoginScreen} /> */}
          <PublicRouter component={LoginScreen} path="/login" auth={log}/>
          <PrivateRouter component={AppRouter} path="/" auth={log}/>
        </Switch>
      </Router>
    </>
  );
};

export default LoginRouter;
