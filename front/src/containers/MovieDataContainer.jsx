import { connect } from "react-redux";
import React, { Component } from "react";
import SingleMovieData from "../components/SingleMovieData";

class MovieDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SingleMovieData movieData={this.props.movieData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData.info
  };
};

export default connect(mapStateToProps)(MovieDataContainer);
