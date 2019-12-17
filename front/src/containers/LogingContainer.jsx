import React, { Component } from "react";
import Logger from "../components/Logger";
import { usuariosLoginProcess } from "../store/actions/actions-creators/usuariosLogin";
import { connect } from "react-redux";

export class LogingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e) {
    let value = e.target.value;
    this.setState({
      email: value
    });
  }
  handleChangePassword(e) {
    let value = e.target.value;
    this.setState({
      password: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.login(this.state);
      this.setState({ email: "", password: "" });
      this.props.history.push("/home");
    }
  }
  render() {
    // console.log(this.props, "AAAAA");
    return (
      <div>
        <Logger
          handleSubmit={this.handleSubmit}
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
          email={this.state.email}
          password={this.state.password}
          store={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usuariosLogin.usuariosLoginData
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(usuariosLoginProcess(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogingContainer);
