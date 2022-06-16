import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useLocation, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../Redux/Products/action";
import axios from "axios";

const Orderplaced = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const [session,setSession] = useState({})
  

    useEffect(()=>{
      if(location.search) {
       
         const details = axios.get(`https://gamersparadisee.herokuapp.com/order/success${location.search}`).then((res)=>res.data).then(res=>setSession(res.session))
      }

      dispatch(deleteCart(undefined,user._id,true))
    },[])

    console.log(session)
  


    
  return (
    <>
      <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert
        action={
          <Button onClick={()=> {navigate("/")}} color="inherit" size="small">
            SHOP AGAIN
          </Button>
        }
      >
        Congratulations
      </Alert>
    </Stack>
    
      </div>
    </>
  );
};

export default Orderplaced;
