import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";

function Movies({
  movies,
  handleClick,
  userData,
  handleClickFavorite,
  handleClickLogin
}) {
  // console.log(userData);
  return movies && movies.length ? (
    <div className="Movies text-center">
      <h3>Movies</h3>
      <div className="row">
        {movies.length &&
          movies.map(movies => (
            <div className="col-md-2 mt-5 mb-5 ml-10 mr-10" key={movies.imdbID}>
              <div
                className="carde card-body bg-dark text-center h-100 display-flex"
                style={{ width: 200 }}
              >
                <Link
                  // name={movies.imdbID}
                  className="thumbnail"
                  to={`/movies/${movies.imdbID}`}
                  onClick={() => handleClick(movies.imdbID)}
                >
                  <img src={movies.Poster} className="card-img-top"></img>
                </Link>
                <div className="card-body">
                  {!userData.id && (
                    <div>
                      <h5 className="card-title">{movies.Title}</h5>
                      <p className="card-text">
                        If you want to know more about this movie please login!
                      </p>
                      <button onClick={() => handleClickLogin()}>Login</button>
                    </div>
                  )}

                  {userData.id && (
                    <div>
                      <div>
                        <h5 className="card-title">{movies.Title}</h5>
                        <p className="card-text">
                          If you want to know more about this movie click button
                          below!
                        </p>
                      </div>{" "}
                      <Link
                        to={`/movies/${movies.imdbID}`}
                        onClick={() => handleClick(movies.imdbID)}
                      >
                        Know more!
                      </Link>
                      <button
                        className="addFav"
                        onClick={() => handleClickFavorite(movies)}
                      >
                        ADD TO FAVORITES!
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : null;
}

export default Movies;

{
  /* <Link
                        to={"/favorites"}
                        onClick={() => handleClickFavorites(movies)}
                      >
                        Add Favorites!{" "}
                      </Link>{" "} */
}
