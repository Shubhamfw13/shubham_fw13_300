import React from "react";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom"

const Orderplaced = () => {
    const navigate = useNavigate()
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
        Congratulations Your Order Is On The Way
      </Alert>
    </Stack>
    
      </div>
    </>
  );
};

export default Orderplaced;
