import React, { Component } from "react";
import { connect } from "react-redux";
import { startSignup, signup, clearAuthState } from "../Actions/auth";
import {Navigate} from 'react-router-dom' //react router v6 doesnt have redirect
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let { email, password, confirmPassword, name } = this.state;

    if (email && password) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };

  render() {
    if (this.props.auth.isLoggedin) {
      return <Navigate to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {this.props.auth.error && (
          <div className="alert error-dailog">{this.props.auth.error}</div>
        )}
        <div className="field">
          <input
            onChange={this.handleEmail}
            value={this.state.email}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="field">
          <input
            onChange={this.handlePassword}
            value={this.state.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="field">
          <input
            onChange={this.handleConfirmPassword}
            value={this.state.confirmPassword}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="field">
          <input
            onChange={this.handleName}
            value={this.state.name}
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="field">
          {this.props.auth.inProgress ? (
            <button
              disabled={this.props.auth.inProgress}
              onClick={this.handleFormSubmit}
            >
              Signing Up..
            </button>
          ) : (
            <button
              disabled={this.props.auth.inProgress}
              onClick={this.handleFormSubmit}
            >
              Sign Up
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Signup);
