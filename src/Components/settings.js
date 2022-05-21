import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: "",
      confirmPassword: "",
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val, //* suppose in the field name we have "name" so it will change it to name:value
    });
  };
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">EMAIL</div>
          <div className="field-label">{user.email}</div>
        </div>
        {editMode ? (
          <input
            type="text"
            onChange={(e) => this.handleChange("name", e.target.value)}
            value={this.state.name}
          />
        ) : (
          <div className="field">
            <div className="field-label">NAME</div>
            <div className="field-label">{user.name}</div>
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">new password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange("password", e.target.value)}
              value={this.state.password}
            />
          </div>
        )}
        {editMode && (
          <div className="field">
            <div className="field-label">confirm password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange("confirmPassword", e.target.value)}
              value={this.state.confirmPassword}
            />
          </div>
        )}
        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn" onClick={(e)=>this.handleChange("editMode",true)}>Edit Profile</button>
            //*clicking on edit button should make it true 
          )}
          {editMode && <div className="go-back" onClick={(e)=>this.handleChange("editMode",false)}>Go back </div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
