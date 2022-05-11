import axios from "axios";
import * as types from "./types";

const sendDataReq = (payload) => ({type: types.SEND_DATA_REQ});
const sendDataSuccess= (payload) => ({type: types.SEND_DATA_SUCCESS,payload});
const sendDataReqFail = (payload) => ({type: types.SEND_DATA_FAIL,payload});

const getMenDataReq = (payload) => ({type: types.GET_MEN_DATA_REQ});
const getMenDataSuccess = (payload) => ({type: types.GET_MEN_DATA_SUCCESS,payload});
const getMenDataReqFail = (payload) => ({type: types.GET_MEN_DATA_FAIL,payload});

const getMenSingleDataReq = (payload) => ({type: types.GET_MEN_SINGLE_DATA_REQ});
const getMenSingleDataSuccess = (payload) => ({type: types.GET_MEN_SINGLE_DATA_SUCCESS,payload});
const getMenSingleDataFail= (payload) => ({type: types.GET_MEN_SINGLE_DATA_FAIL,payload});

const getWomenDataReq = (payload) => ({type:types.GET_WOMEN_DATA_REQ});
const getWomenDataSuccess = (payload) => ({type:types.GET_WOMEN_DATA_SUCCESS,payload});
const getWomenDataFail = (payload) => ({type:types.GET_WOMEN_DATA_FAIL,payload});

const getWomenSingleDataReq = (payload) => ({type:types.GET_WOMEN_SINGLE_DATA_REQ})
const getWomenSingleDataSuccess = (payload) => ({type:types.GET_WOMEN_SINGLE_DATA_SUCCESS,payload})
const getWomenSingleDataFail = (payload) => ({type:types.GET_WOMEN_SINGLE_DATA_FAIL,payload})






const GetMenData = () => (dispatch) =>{
    dispatch(getMenDataReq("Getting Men Data"))
    try{
        axios.get("http://localhost:8080/men").then((res)=>{
            dispatch(getMenDataSuccess(res.data))
        }).catch((err)=>{
            dispatch(getMenDataReqFail(err))
        })
    }catch(err){
        
    }
}

const GetWomenData =() =>(dispatch)=>{
    dispatch(getWomenDataReq("Getting Women Data"))
    try{
        axios.get("http://localhost:8080/women").then((res)=>{
            dispatch(getWomenDataSuccess(res.data))
        }).catch((err)=>{
            dispatch(getWomenDataFail(err))
        })
    }catch(err){

    }
}

const GetMenSingleData = (id) =>(dispatch)=>{
    dispatch(getMenSingleDataReq("Getting men Single Data"))
    try{
      axios.get(`http://localhost:8080/men/${id}`).then((res)=>{
          dispatch(getMenSingleDataSuccess(res.data))
      }).catch((err)=>{
          dispatch(getMenSingleDataFail(err))
      })
    }catch(err){

    }
}

 const GetWomenSingleData = (id) =>(dispatch)=>{
     dispatch(getWomenSingleDataReq("Getting Women Single Data"))
     try{
       axios.get(`http://localhost:8080/women/${id}`).then((res)=>{
           dispatch(getWomenSingleDataSuccess(res.data))
       }).catch((err)=>{
           dispatch(getWomenSingleDataFail(err))
       })
     }catch(err){

     }
 }


export {GetMenData,GetWomenData,GetWomenSingleData,GetMenSingleData}