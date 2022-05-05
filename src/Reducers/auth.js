import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../Actions/actionTypes";

const intialState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false, //* this is basically a flag which makesd sure we disable the login button ater user pressed it for once
  //* and the login process started,this is done to avoid multiple pressing of login button the thetrfore sending multiple requests to the server
};

export default function auth(state = intialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        user:action.user,
        isLoggedin:true,
        error:null
      };
      case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error:action.error,
      };
    default:
      return state;
  }
}
