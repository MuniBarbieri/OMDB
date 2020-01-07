import { MOVIES_DATA } from "../constants";
import axios from "axios";

const searchMovies = info => ({
  type: MOVIES_DATA,
  info
});

const fetchMovieData = info => dispatch => {
  console.log("&&&&&&&&&&&&&&&&&&&&&&")

  axios
    .get(`http://www.omdbapi.com/?apikey=efe63c16&i=${info}`)
    .then(res => res.data)
    .then(movieData => dispatch(searchMovies(movieData)));
}

export default fetchMovieData;
