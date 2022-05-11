import axios, { Axios } from "axios";
import * as types from "./types";

const sendDataReq = (payload) => ({type: types.SEND_DATA_REQ});
const sendDataSuccess= (payload) => ({type: types.SEND_DATA_SUCCESS,payload});
const sendDataReqFail = (payload) => ({type: types.SEND_DATA_FAIL,payload});

const getDataReq = (payload) => ({type: types.GET_DATA_REQ});
const getDataSuccess = (payload) => ({type: types.GET_DATA_SUCCESS,payload});
const getDataReqFail = (payload) => ({type: types.GET_DATA_FAIL,payload});

const getSingleDataReq = (payload) => ({type: types.GET_SINGLE_DATA_REQ});
const getSingleDataSuccess = (payload) => ({type: types.GET_SINGLE_DATA_SUCCESS,payload});
const getSingleDataFail= (payload) => ({type: types.GET_SINGLE_DATA_FAIL,payload});


const GetData = () => (dispatch) =>{
    dispatch(getDataReq("Getting Data"))
    try{
        axios.get("http://localhost:8080/data").then((res)=>{
            dispatch(getDataSuccess(res.data))
        }).catch((err)=>{
            dispatch(getDataReqFail(err))
        })
    }catch(err){
        
    }
}



export {GetData}
