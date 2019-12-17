import { combineReducers } from "redux";
import moviesReducer from "./movies-reducer";
import dataMoviesReducer from "./dataMovies-reducer";
import usuariosLoginData from "./dataUsers-reducer";
import favoritesReducer from "./favorite-reducer";

export default combineReducers({
  movies: moviesReducer,
  movieData: dataMoviesReducer,
  usuariosLogin: usuariosLoginData,
  favorites: favoritesReducer
});
