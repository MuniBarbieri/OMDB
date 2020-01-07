import React, { Component } from "react";
import { connect } from "react-redux";
import FavoritesMovies from "../components/FavoritesMovies";
import SingleMovieData from "../components/SingleMovieData";
import fetchMovieData from "../store/actions/actions-creators/movieData";

class FavoritesMoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.fetchMovieData(id);

  }

  handleRemove(id) {

  }

  render() {
    console.log(this.props.favorites, "HUCHECHEC9E9H");
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">My Favorites Movies</h1>
          {
            this.props.favorites.length ? <p className="lead">These are my bests</p> : <p className="lead">No favorites added</p>
          }

        </div>
        <FavoritesMovies
          favorites={this.props.favorites}
          userData={this.props.user}
          handleClick={this.handleClick}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.list,
    user: state.usuariosLogin.usuariosLoginData,
    movieData: state.movieData.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieData: id => dispatch(fetchMovieData(id)),
    removeMovie: id => dispatch(removeMovie(id))


    // fetchFavoritesMovies: id => dispatch(fetchFavoritesMovies(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesMoviesContainer);
