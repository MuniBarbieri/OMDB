import { connect } from "react-redux";
import fetchMovies from "../store/actions/actions-creators/movies";
import { usuariosLogOutProcess } from "../store/actions/actions-creators/usuariosLogin";

import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickFavorites = this.handleClickFavorites.bind(this);
  }
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      input: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.input);
    this.props.history.push("/search");
  }

  handleClick(event) {
    this.props.usuarioLogOut();
    this.props.history.push("/");
  }

  handleClickFavorites(event) {
    this.props.history.push("/favorites");
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand" href="/home">
            OMDB
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search a movie"
                aria-label="Search"
                onChange={this.handleChange}
              ></input>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            {this.props.userData.id ? (
              <div>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={this.handleClickFavorites}
                >
                  Favorites
                </button>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={this.handleClick}
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.list,
    userData: state.usuariosLogin.usuariosLoginData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: movies => dispatch(fetchMovies(movies)),
    usuarioLogOut: () => dispatch(usuariosLogOutProcess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
