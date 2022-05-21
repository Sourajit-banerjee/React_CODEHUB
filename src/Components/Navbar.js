import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import { func } from "prop-types";
import { logoutUser } from "../Actions/auth";

class Navbar extends Component {
  logout = () => {
    //*for logout just clear the jwt token
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://cdn-icons-png.flaticon.com/512/751/751381.png"
            alt="search-img"
          />

          <input placeholder="Search...." />
          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1651510143~hmac=6d418627e90657d183b5f66ad567259f"
                  alt="user-dp"
                />

                <span>John Fucker</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1651510143~hmac=6d418627e90657d183b5f66ad567259f"
                  alt="user-dp"
                />
                <span>John Fucker</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          {auth.isLoggedin && (
            <div className="user">
              <Link to="/setting">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                alt="user-dp"
                id="user-dp"
              />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Sign in</Link>
                </li>
              )}
              {auth.isLoggedin && <li onClick={this.logout}>Log Out</li>}

              {!auth.isLoggedin && (
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar); //*we are connectinbg it to the store the navbar cause we want the auth satte to show
//*users accordingly,that signout if logged in already etc
