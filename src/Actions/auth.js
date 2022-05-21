import { APIUrls } from "../helpers/urls";
import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_STATE,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import { getFormBody } from "../helpers/utils";
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errMessage) {
  return {
    type: LOGIN_FAILED,
    error: errMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
//* this will be an async fucntion and thetrfore we will be usingf redux-thunk and returning a fucntion instead of an obj from theser action creator

//todo '/login?email=a@gmai.com&password=123454'
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin()); //* we are doing this for for inProgress flag so to disable the btn when req is in progresdsd
    const url = APIUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("AFTER FETCHING DATA", data);
        if (data.success) {
          localStorage.setItem('token',data.data.token)
          dispatch(loginSuccess(data.data.user));
          return;
        } else {
          dispatch(loginFailed(data.message));
        }
      })
      .catch((err) => console.log("error sign in: ", err));
  };
}

//!sign up

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
}

export function signupFailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}

export function signup(email, password, confirmPassword, name) {
  return (dispatch) => {
    dispatch(startSignup());
    let url = APIUrls.signUp();
    console.log("checking ", confirmPassword, password);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        name,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("signUp data", data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccess(data.data.user));
        } else {
          dispatch(signupFailed(data.message));
        }
      })
      .catch((err) => console.log("SIGNUP ERR:", err));
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
