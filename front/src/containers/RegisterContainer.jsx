import React, { Component } from "react";
import Register from "../components/Register";
import usuariosRegistrationProcess from "../store/actions/actions-creators/usuariosRegistration";

export class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // console.log("AAAAAAAA");
    if (this.state.email && this.state.password) {
      usuariosRegistrationProcess(this.state);
      this.setState({ email: "", password: "" });
      this.props.history.push("/");
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Register
          handleSubmit={this.handleSubmit}
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
          email={this.state.email}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default RegisterContainer;
