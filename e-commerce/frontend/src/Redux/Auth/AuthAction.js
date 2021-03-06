import axios from "axios";
import { emptyCart } from "../Products/action";
import * as types from "./types";

const loginReq = (payload) => ({ type: types.LOGIN_REQ });
const loginSuccess = (payload) => ({ type: types.LOGIN_SUCCESS, payload });
const loginFailed = (payload) => ({ type: types.LOGIN_FAILED, payload });

const registerReq = (payload) => ({ type: types.REGISTER_REQ });
const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});
const registerFailed = (payload) => ({ type: types.REGISTER_FAILED, payload });

const LoginData = (email, password) => async (dispatch) => {
  try {
    dispatch(loginReq({ message: "Loading" }));
    const res = await axios
      .post("https://gamersparadisee.herokuapp.com/auth/login", {
        email,
        password,
      })
      .catch((err) => {
        console.log(err.response);
        alert("Invalid Credentials");
        dispatch(loginFailed({ message: err.response.data }));
      });
    if (res) {
      alert("Login Success");
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(
        loginSuccess({ accessToken: res.data.token, user: res.data.user })
      );
    }
  } catch (err) {
    alert("Invalid Credentials");
    console.log(err);
  }
};

const RegisterData = (username, email, password) => async (dispatch) => {
  dispatch(registerReq({ message: "LOADING" }));
  const res = await axios
    .post("https://gamersparadisee.herokuapp.com/auth/register", {
      username,
      email,
      password,
    })
    .catch((err) => {
      console.log(registerFailed({ message: err.response.data }));
    });
  if (res) {
    dispatch(registerSuccess({}));
  }
};

const Logout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  dispatch({ type: types.LOGOUT });
  alert("Logged Out");
};

export { LoginData, RegisterData, Logout };
