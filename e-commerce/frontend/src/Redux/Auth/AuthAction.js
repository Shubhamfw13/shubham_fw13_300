import axios from "axios";
import * as types from "./types";

// import axios from "axios";
// import { loginFailed, loginRequest, loginSuccess } from "./AuthRedux";

// export const loginData = async (dispatch, user) => {
//   dispatch(loginRequest());
//   try {
//     await axios
//       .post("http://localhost:8000/auth/login", user)
//       .then((res) => {
//         dispatch(loginSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(loginFailed(err));
//       });
//   } catch (err) {}
// };
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
      .post("http://localhost:8000/auth/login", {
        email,
        password,
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(loginFailed({ message: err.response.data }));
      });
    if (res) {
      localStorage.setItem("accesToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(
        loginSuccess({ accessToken: res.data.token, user: res.data.user })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const RegisterData = (username, email, password) => async (dispatch) => {
  dispatch(registerReq({ message: "LOADING" }));
  const res = await axios
    .post("http://localhost:8000/auth/register", {
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

const Logout = () => (dispatch)=>{
    localStorage.removeItem("accesToken")
    localStorage.removeItem("user")
    dispatch({type:types.LOGOUT})    
}


export { LoginData,RegisterData,Logout };
