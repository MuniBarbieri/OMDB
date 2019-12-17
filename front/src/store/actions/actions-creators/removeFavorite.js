import { REMOVE_FAVORITE } from "../constants";
import axios from "axios";

const searchMovies = info => ({
  type: REMOVE_FAVORITE,
  info
});

const fetchMovieData = info => dispatch =>
  axios
    .get(`http://www.omdbapi.com/?apikey=efe63c16&i=${info}`)
    .then(res => res.data)
    .then(movieData => dispatch(searchMovies(movieData)));

export default fetchMovieData;
