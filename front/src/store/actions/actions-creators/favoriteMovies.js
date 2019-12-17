import { ADD_FAVORITE } from "../constants";
import axios from "axios";

const favoritesMovies = favorite => ({
  type: ADD_FAVORITE,
  favorite
});

const backFavorites = movies => dispatch =>
  axios
    .post("/api/favorites", movies)
    .then(res => dispatch(favoritesMovies(res)));

export default backFavorites;

// const fetchFavoritesMovies = movies => dispatch =>
//   axios
//     .get(`http://www.omdbapi.com/?apikey=efe63c16&s=${movies}`)
//     .then(res => res.data) // Este then recibe el res.send del back //
//     .then(movies => dispatch(favoritesMovies(movies.Search)))

// export default fetchFavoritesMovies;
