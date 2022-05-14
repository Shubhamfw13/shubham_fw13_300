import axios from "axios";
import * as types from "./types";
import Alert from '@mui/material/Alert';

const getMenDataReq = (payload) => ({ type: types.GET_MEN_DATA_REQ });
const getMenDataSuccess = (payload) => ({
  type: types.GET_MEN_DATA_SUCCESS,
  payload,
});
const getMenDataReqFail = (payload) => ({
  type: types.GET_MEN_DATA_FAIL,
  payload,
});

const getMenSingleDataReq = (payload) => ({
  type: types.GET_MEN_SINGLE_DATA_REQ,
});
const getMenSingleDataSuccess = (payload) => ({
  type: types.GET_MEN_SINGLE_DATA_SUCCESS,
  payload,
});
const getMenSingleDataFail = (payload) => ({
  type: types.GET_MEN_SINGLE_DATA_FAIL,
  payload,
});

const getWomenDataReq = (payload) => ({ type: types.GET_WOMEN_DATA_REQ });
const getWomenDataSuccess = (payload) => ({
  type: types.GET_WOMEN_DATA_SUCCESS,
  payload,
});
const getWomenDataFail = (payload) => ({
  type: types.GET_WOMEN_DATA_FAIL,
  payload,
});

const getWomenSingleDataReq = (payload) => ({
  type: types.GET_WOMEN_SINGLE_DATA_REQ,
});
const getWomenSingleDataSuccess = (payload) => ({
  type: types.GET_WOMEN_SINGLE_DATA_SUCCESS,
  payload,
});
const getWomenSingleDataFail = (payload) => ({
  type: types.GET_WOMEN_SINGLE_DATA_FAIL,
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

const GetMenData = () => (dispatch) => {
  dispatch(getMenDataReq("Getting Men Data"));
  try {
    axios
      .get("http://localhost:8070/men")
      .then((res) => {
        dispatch(getMenDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getMenDataReqFail(err));
      });
  } catch (err) {}
};

const GetWomenData = () => (dispatch) => {
  dispatch(getWomenDataReq("Getting Women Data"));
  try {
    axios
      .get("http://localhost:8070/women")
      .then((res) => {
        dispatch(getWomenDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getWomenDataFail(err));
      });
  } catch (err) {}
};

const GetMenSingleData = (id) => (dispatch) => {
  dispatch(getMenSingleDataReq("Getting men Single Data"));
  try {
    axios
      .get(`http://localhost:8070/men/${id}`)
      .then((res) => {
        dispatch(getMenSingleDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getMenSingleDataFail(err));
      });
  } catch (err) {}
};

const GetWomenSingleData = (id) => (dispatch) => {
  dispatch(getWomenSingleDataReq("Getting Women Single Data"));
  try {
    axios
      .get(`http://localhost:8070/women/${id}`)
      .then((res) => {
        dispatch(getWomenSingleDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getWomenSingleDataFail(err));
      });
  } catch (err) {}
};

const SentToCart = (menSingleData, womenSingleData) => (dispatch) => {
  //   console.log(menSingleData,"action")
  try {
    axios
      .post("http://localhost:8070/cart", menSingleData, womenSingleData)
      .then(() => {
        dispatch(sentTocart());
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
      .post("http://localhost:8070/payment",formData).then((res) => {
        dispatch(sendPaymentData());
      
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {}
};

const GetDataFromCart = () => (dispatch) => {
  //   console.log(menSingleData,"action")
  try {
    axios
      .get("http://localhost:8070/cart")
      .then((res) => {
        dispatch(getDataFromCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const UpdateCart = (data) => (dispatch) => {
  try {
    axios
      .patch(`http://localhost:8070/cart/${data.id}`, {
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

const deleteCart = (id) => (dispatch) => {
  try {
    axios
      .delete(`http://localhost:8070/cart/${id}`, id)
      .then(() => {
        dispatch(GetDataFromCart());
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

export {
  GetMenData,
  GetWomenData,
  GetWomenSingleData,
  GetMenSingleData,
  SentToCart,
  GetDataFromCart,
  UpdateCart,
  deleteCart,
  SendPaymentData,
};
