import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";

import Footer from "./Footer";
import MoviesCont from "../containers/MoviesCont";
import MovieDataContainer from "../containers/MovieDataContainer";
import Welcome from "./Welcome";

import RegisterContainer from "../containers/RegisterContainer";
import LogingContainer from "../containers/LogingContainer";
import FavoritesMoviesContainer from "../containers/FavoritesMoviesContainer";





const Main = () => {




  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/favorites" component={FavoritesMoviesContainer} />
        <Route exact path="/home" component={Welcome} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/search" component={MoviesCont} />
        <Route exact path="/movies/:movieId" component={MovieDataContainer} />
      </Switch>

      <Route path="/" component={Footer} />
    </div>

  )
};

export default Main;
