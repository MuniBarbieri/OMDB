import React from "react";
import { Link } from "react-router-dom";

function SingleMovieData({ movieData }) {
  console.log(movieData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body mt-5">
          <img src={movieData.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8 mt-5">
          <h2 className="mb-4">{movieData.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movieData.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movieData.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {movieData.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movieData.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {movieData.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movieData.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {movieData.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {movieData.Plot}
            <hr />
            <a
              href={"https://www.imdb.com/title/" + movieData.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
            </a>
            <Link to="/" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieData;
