import Logger from "./Logger";
import LogingContainer from "../containers/LogingContainer";
import { connect } from "react-redux";

import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.user, "adasdasds");
    return this.props.user.id ? (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">
            Welcome {this.props.user.email}
          </h1>
          <p className="lead text-center">
            Now you can research deeply and add your favorites movies to your
            list! Search and try!
          </p>

          <img
            className="card-body bg-dark text-center h-100 display-flex"
            src="https://www.fmdos.cl/wp-content/uploads/2019/09/por-que-se-comen-palomitas-en-el-cine-en-vez-de-otros-snacks.jpg"
          ></img>
        </div>
      </div>
    ) : (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Welcome to my OMDB!</h1>
          <p className="lead text-center">
            Here is where you can find whatever movie info you want!
          </p>
          <LogingContainer history={this.props.history} />
          <div className="login"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usuariosLogin.usuariosLoginData
});

export default connect(mapStateToProps)(Welcome);
