import React from "react";
import { Link } from "react-router-dom";

function FavoritesMovies({ favorites, userData, handleClick }) {
  return favorites && favorites.length ? (
    <div className="Movies text-center">
      <div className="row">
        {favorites.length &&
          favorites.map(favorites => (
            <div
              className="col-md-2 mt-5 mb-5 ml-10 mr-10"
              key={favorites.data.imdbID}
            >
              <div
                className="card card-body bg-dark text-center h-100 display-flex"
                style={{ width: 200 }}
              >
                <Link
                  // name={movies.imdbID}
                  className="thumbnail"
                  to={`/movies/${favorites.data.imdbID}`}
                  onClick={() => handleClick(favorites.data.imdbID)}
                >
                  <img
                    src={favorites.data.Poster}
                    className="card-img-top"
                  ></img>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{favorites.data.Title}</h5>
                  <p className="card-text">
                    If you want to know more click the button below!
                  </p>

                  <div>

                    <Link
                      to={`/movies/${favorites.data.imdbID}`}
                      onClick={() => handleClick(favorites.data.imdbID)}
                    >
                      Know more!
                    </Link>
                    <button onClick={() => handleRemove(favorites.imdbID)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : null;
}

export default FavoritesMovies;
