import { APIUrls } from "../helpers/urls";
import { LOGIN_START } from "./actionTypes";
import { getFormBody } from "../helpers/utils";
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

//* this will be an async fucntion and thetrfore we will be usingf redux-thunk and returning a fucntion instead of an obj from theser action creator

//todo '/login?email=a@gmai.com&password=123454'
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:getFormBody({email,password})
    })
      .then()
      .catch((err) => console.log("error sign in: ", err));
  };
}
