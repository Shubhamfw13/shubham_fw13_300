import axios from "axios";
import * as types from "./types";

const getActionDataReq = (payload) => ({ type: types.GET_ACTION_DATA_REQ });
const getActionDataSuccess = (payload) => ({
  type: types.GET_ACTION_DATA_SUCCESS,
  payload,
});
const getActionDataFail = (payload) => ({
  type: types.GET_ACTION_DATA_FAIL,
  payload,
});

const getAllDataReq = (payload) => ({ type: types.GET_ALL_DATA_REQ });
const getAllDataSuccess = (payload) => ({
  type: types.GET_ALL_DATA_SUCCESS,
  payload,
});
const getAllDataFail = (payload) => ({
  type: types.GET_ALL_DATA_FAIL,
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

const sendDataReq = (payload) => ({ type: types.SEND_DATA_REQ });
const sendDataSuccess = (payload) => ({
  type: types.SEND_DATA_SUCCESS,
  payload,
});
const sendDataFail = (payload) => ({ type: types.SEND_DATA_FAIL, payload });

const getRpgDataReq = (payload) => ({ type: types.GET_RPG_DATA_REQ });
const getRpgDataSuccess = (payload) => ({
  type: types.GET_RPG_DATA_SUCCESS,
  payload,
});
const getRpgDataFail = (payload) => ({
  type: types.GET_RPG_DATA_FAIL,
  payload,
});

const SendData = (data) => (dispatch) => {
  dispatch(sendDataReq("SendingData"));
  try {
    axios
      .post("http://localhost:8000/products", data)
      .then((res) => {
        dispatch(sendDataSuccess());
        alert("entity added");
      })
      .catch((err) => {
        dispatch(sendDataFail(err));
      });
  } catch (err) {}
};

const GetActionData = () => (dispatch) => {
  dispatch(getActionDataReq("Getting Action Data"));
  try {
    axios
      .get("http://localhost:8000/products?categories=Action")
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
      .get("http://localhost:8000/products?categories=RPG")
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
  try {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getSingleDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getSingleDataFail(err));
      });
  } catch (err) {}
};

const GetAllData = () => (dispatch) => {
  dispatch(getAllDataReq("Getting Single Data"));
  try {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        console.log(res.data);
        dispatch(getAllDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllDataFail(err));
      });
  } catch (err) {}
};

export { GetActionData, GetRpgData, GetSingleData, GetAllData, SendData };
