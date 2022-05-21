export const UPDATE_POSTS = "UPDATE_POSTS";

//Login types

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

//Signup types
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

//Authentication and logout

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const LOG_OUT = "LOG_OUT";

//*to clear auth state so that when we give invalid pw or email thr error message does remain when got to othern pages from the sign in such as sigh up nd all
export const CLEAR_AUTH_STATE = "CLEAR_AUTH_STATE";
