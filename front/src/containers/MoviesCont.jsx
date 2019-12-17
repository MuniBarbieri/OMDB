import { connect } from "react-redux";
import React, { Component } from "react";
import Movies from "../components/Movies";
import fetchMovieData from "../store/actions/actions-creators/movieData";
import fetchFavoritesMovies from "../store/actions/actions-creators/favoriteMovies";
import backFavorites from "../store/actions/actions-creators/favoriteMovies";

class MoviesCont extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickFavorite = this.handleClickFavorite.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  handleClick(id) {
    console.log(id);
    this.props.fetchMovieData(id);
  }

  handleClickFavorite(movie) {
    let body = {
      ...movie,
      userId: this.props.user.id
    };
    this.props.backFavorites(body);
  }

  handleClickLogin() {
    this.props.history.push("/");
  }

  render() {
    // console.log(this.props.movies);
    // console.log(this.props.user)
    return (
      <div>
        <Movies
          movies={this.props.movies}
          handleClick={this.handleClick}
          userData={this.props.user}
          favoritesMovies={this.props.favoritesMovies}
          handleClickFavorite={this.handleClickFavorite}
          handleClickLogin={this.handleClickLogin}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies.list,
    user: state.usuariosLogin.usuariosLoginData,
    favoritesMovies: state.favorites.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieData: id => dispatch(fetchMovieData(id)),
    backFavorites: movie => dispatch(backFavorites(movie))
    // fetchFavoritesMovies: id => dispatch(fetchFavoritesMovies(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesCont);
