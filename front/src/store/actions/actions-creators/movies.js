import { SEARCH_MOVIES } from "../constants";
import axios from "axios";

const searchMovies = movies => ({
  type: SEARCH_MOVIES,
  movies
});

const fetchMovies = movies => dispatch =>
  axios
    .get(`http://www.omdbapi.com/?apikey=efe63c16&s=${movies}`)
    .then(res => res.data) // Este then recibe el res.send del back //
    .then(movies => dispatch(searchMovies(movies.Search)));

export default fetchMovies;
