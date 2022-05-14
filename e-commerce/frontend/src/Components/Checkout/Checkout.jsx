import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetDataFromCart, SendPaymentData } from "../../Redux/Products/action";
import Alert from "@mui/material/Alert";

import Button from "@mui/material/Button";
import SubmitButton from "./Snackbar";

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
  const { cart } = useSelector((state) => state.productData);
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    card: "",
    cvv: "",
    month: "",
    year: "",
    cart: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = () => {
    dispatch(SendPaymentData(formData));
  };

  React.useEffect(() => {
    dispatch(GetDataFromCart());
  }, []);

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
              <TextField
                onChange={handleChange}
                value={formData.firstname}
                name="firstname"
                label="First Name"
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                value={formData.lastname}
                name="lastname"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                value={formData.email}
                name="email"
                label="E-Mail"
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                label="Phone"
                type="number"
              />
              <TextField
                onChange={handleChange}
                value={formData.address}
                name="address"
                style={{ width: "60%" }}
                label="Address"
                variant="standard"
              />
              <Label>Payment Information</Label>
              <TextField
                onChange={handleChange}
                value={formData.card}
                name="card"
                label="Card-Number"
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                value={formData.cvv}
                name="cvv"
                label="CVV"
                variant="outlined"
              />
              <br />
              <TextField
                onChange={handleChange}
                value={formData.month}
                name="month"
                label="Month"
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                value={formData.year}
                name="year"
                label="Year"
                variant="outlined"
              />
              <Button
                style={{width:"50%",textAlign:"center"}}
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                SUBMIT DETAILS
                <SubmitButton></SubmitButton>
              </Button>
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
                <SummaryItemPrice>
                  {cart
                    .reduce((a, b) => a + 5 + b.quantity * b.price, 0)
                    .toFixed(2)}
                </SummaryItemPrice>
              </SummaryItem>
              <CheckOutButton
                onClick={() => {
                  navigate("/orderplaced");
                }}
              >
                MAKE PAYMENT
              </CheckOutButton>
            </Summary>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
