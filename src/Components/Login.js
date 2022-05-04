import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    //*in uncontyrolled compoenent when we send click sign in the data is sent to the server and it resides in the Dom.
    //*to access it from the dom we use ref,that create a ref for email and password which will have the current value of em and pw iside them
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  handleformSubmit = (e) => {
    e.preventDefault();
    console.log("this.emailInputRef: ", this.emailInputRef);
    console.log("this.passwordInputRef: ", this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign in</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.passwordInputRef}
          />
        </div>
        <div className="field">
          <button onClick={this.handleformSubmit}>Sign in</button>
        </div>
      </form>
    );
  }
}
