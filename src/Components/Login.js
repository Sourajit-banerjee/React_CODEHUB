//todo When to use uncontrolled components?
//?suppose the user focuses on a input ,we just get the ref of that inpuutr and would show some alerts or do some animationbs
//? else we always use controlled components always




import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    //*in uncontyrolled compoenent(data resides in dom) when we send click sign in the data is sent to the server and it resides in the Dom.
    //*to access it from the dom we use ref,that create a ref for email and password which will have the current value of em and pw iside them
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();\

    //!controlled component the data resides in the react state
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  handleformSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailInputRef: ", this.emailInputRef);
    // console.log("this.passwordInputRef: ", this.passwordInputRef);

    //!Controlled Component
    console.log("login this.state", this.state);
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
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password} //*this will be used as when we re-render due to setState our state thetrefore will
            //* updated with the latest pw /email
          />
        </div>
        <div className="field">
          <button onClick={this.handleformSubmit}>Sign in</button>
        </div>
      </form>
    );
  }
}
