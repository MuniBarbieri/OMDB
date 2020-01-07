import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MoviesCont from "../containers/MoviesCont";
import MovieDataContainer from "../containers/MovieDataContainer";
import Welcome from "./Welcome";
import RegisterContainer from "../containers/RegisterContainer";
import FavoritesMoviesContainer from "../containers/FavoritesMoviesContainer";
import { useEffect, useState } from "react"
import { fetchUsers } from "../store/actions/actions-creators/usuariosLogin"
import { useSelector, useDispatch } from "react-redux"





const Main = () => {

  const dispatch = useDispatch()
  const user = useSelector(({ usuariosLogin }) => usuariosLogin.usuariosLoginData)
  const [userData, setUserdata] = useState({})

  useEffect(() => {
    dispatch(fetchUsers())
    setUserdata(user)
  }, [userData])


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
