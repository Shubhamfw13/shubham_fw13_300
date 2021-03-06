import axios from "axios";
import * as types from "./types";
import Alert from "@mui/material/Alert";

const getActionDataReq = (payload) => ({ type: types.GET_ACTION_DATA_REQ });
const getActionDataSuccess = (payload) => ({
  type: types.GET_ACTION_DATA_SUCCESS,
  payload,
});
const getActionDataFail = (payload) => ({
  type: types.GET_ACTION_DATA_FAIL,
  payload,
});

const getSingleDataReq = (payload) => ({
  type: types.GET_SINGLE_DATA_REQ,
});
const getSingleDataSuccess = (payload) => ({
  type: types.GET_SINGLE_DATA_SUCCESS,
  payload,
});
const getSingleDataFail = (payload) => ({
  type: types.GET_SINGLE_DATA_FAIL,
  payload,
});

const getRpgDataReq = (payload) => ({ type: types.GET_RPG_DATA_REQ });
const getRpgDataSuccess = (payload) => ({
  type: types.GET_RPG_DATA_SUCCESS,
  payload,
});
const getRpgDataFail = (payload) => ({
  type: types.GET_RPG_DATA_FAIL,
  payload,
});

const sentTocart = (payload) => ({ type: types.SENT_TO_CART, payload });

const getDataFromCart = (payload) => ({
  type: types.GET_DATA_FROM_CART,
  payload,
});

const sendPaymentData = (payload) => ({
  type: types.SEND_PAYMENT_DATA,
  payload,
});
const getPaymentData = (payload) => ({ type: types.GET_PAYMENT_DATA, payload });

const LoginData = () => (dispatch) => {};

const GetActionData = () => (dispatch) => {
  dispatch(getActionDataReq("Getting Action Data"));
  try {
    axios
      .get("https://gamersparadisee.herokuapp.com/products?categories=Action")

      .then((res) => {
        dispatch(getActionDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getActionDataFail(err));
      });
  } catch (err) {}
};

const GetRpgData = () => (dispatch) => {
  dispatch(getRpgDataReq("Getting RPG Data"));
  try {
    axios
      .get("https://gamersparadisee.herokuapp.com/products?categories=RPG")
      .then((res) => {
        dispatch(getRpgDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getRpgDataFail(err));
      });
  } catch (err) {}
};

const GetSingleData = (id) => (dispatch) => {
  dispatch(getSingleDataReq("Getting Single Data"));
  console.log(id);
  try {
    axios
      .get(`https://gamersparadisee.herokuapp.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getSingleDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getSingleDataFail(err));
      });
  } catch (err) {}
};

const SentToCart = (user_id, product_id, product_price) => (dispatch) => {
  //   console.log(menSingleData,"action")
  try {
    axios
      .post(`https://gamersparadisee.herokuapp.com/cart/${user_id}`, {
        user_id,
        product_id,
        product_price,
      })
      .then(() => {
        dispatch(sentTocart());
        dispatch(GetDataFromCart(user_id));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const SendPaymentData = (formData) => (dispatch) => {
  try {
    axios
      .post("http://localhost:8070/payment", formData)
      .then((res) => {
        dispatch(sendPaymentData());
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {}
};

const GetDataFromCart = (user_id) => (dispatch) => {
  //   console.log(menSingleData,"action")
  console.log(user_id);
  if (user_id) {
    try {
      axios
        .get(`https://gamersparadisee.herokuapp.com/cart/${user_id}`)
        .then((res) => {
          dispatch(getDataFromCart(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }
};

const UpdateCart = (data) => (dispatch) => {
  try {
    axios
      .patch(`https://gamersparadisee.herokuapp.com/cart/${data.id}`, {
        ...data,
      })
      .then((res) => {
        dispatch(GetDataFromCart());
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const deleteCart = (id, user_id, all) => (dispatch) => {
  console.log(id, user_id, "delete cart");
  try {
    axios
      .delete(`https://gamersparadisee.herokuapp.com/cart/${id}/${user_id}?all=${all}`, {})
      .then(() => {
        dispatch(GetDataFromCart(user_id));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const emptyCart = () => (dispatch) => {
  console.log("called");
  dispatch({ type: types.EMPTY_CART });
};

export {
  GetActionData,
  GetRpgData,
  GetSingleData,
  SentToCart,
  GetDataFromCart,
  UpdateCart,
  deleteCart,
  SendPaymentData,
  emptyCart,
};





