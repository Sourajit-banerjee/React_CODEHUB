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
} from "../Actions/actionTypes";

const intialState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false, //* this is basically a flag which makesd sure we disable the login button ater user pressed it for once
  //* and the login process started,this is done to avoid multiple pressing of login button the thetrfore sending multiple requests to the server
};

export default function auth(state = intialState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case SIGNUP_START:
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        user: action.user,
        isLoggedin: true,
        error: null,
      };
    case SIGNUP_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {}, //*emptying the user object
        isLoggedin: false,
      };
    default:
      return state;
  }
}
