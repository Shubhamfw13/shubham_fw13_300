import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetDataFromCart } from "../../Redux/Products/action";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 17%;
  width: 70%;
  display: flex;
`;

const Left = styled.div`
  flex: 2;
`;
const Label = styled.h1``;

const Right = styled.div`
  flex: 2;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const CheckOutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export default function Checkout() {
  const navigate = useNavigate();
  const {cart} = useSelector((state)=>state.productData) 
  const dispatch = useDispatch()

  React.useEffect(()=>{
   dispatch(GetDataFromCart())
  },[])
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <Left>
            <Label>Costumer Details</Label>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="First Name" variant="outlined" />
              <TextField label="Last Name" variant="outlined" />
              <TextField label="E-Mail" variant="outlined" />
              <TextField label="Phone" type="number" />
              <TextField
                style={{ width: "60%" }}
                label="Address"
                variant="standard"
              />
            </Box>

            <Label>Payment Information</Label>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="Card-Number" variant="outlined" />
              <TextField label="CVV" variant="outlined" />
              <br />
              <TextField label="Month" variant="outlined" />
              <TextField label="Year" variant="outlined" />
            </Box>
          </Left>
          <Right>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Total Item</SummaryItemText>
                <SummaryItemPrice>{cart.length}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cart.reduce((a,b)=> a + 5 + b.quantity * b.price,0).toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <CheckOutButton
                onClick={() => {
                  navigate(`/checkout`);
                }}
              >
                CHECKOUT NOW
              </CheckOutButton>
            </Summary>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
