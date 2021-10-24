import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import CharacterScreen from "../Pages/CharacterScreen";
// import MenScreen from "../Pages/MenScreen";
// import SearchScreen from "../Pages/SearchScreen";
// import WomenScreen from "../Pages/WomenScreen";

// const Navbar = lazy(() => import("../Components/Navbar"));
const CharacterScreen = lazy(() => import("../Pages/CharacterScreen"));
const MenScreen = lazy(() => import("../Pages/MenScreen"));
const WomenScreen = lazy(() => import("../Pages/WomenScreen"));
const SearchScreen = lazy(() => import("../Pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/men" component={MenScreen} />
          <Route exact path="/women" component={WomenScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />
          <Redirect to="/men" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
