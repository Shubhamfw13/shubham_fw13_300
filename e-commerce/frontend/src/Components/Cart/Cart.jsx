import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button"
import Navbar from "../Navbar/Navbar";
import { deleteCart, GetDataFromCart } from "../../Redux/Products/action";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 60%;
  height: 800px;
  margin: auto;
  margin-top: 50px;

  background-color: aliceblue;
`;
const Right = styled.div`
  overflow: scroll;
  flex: 1;
  border: 1px solid lightgrey;
`;
const Left = styled.div`
  flex: 1;
  border: 1px solid lightgrey;
`;
const CartBox = styled.div``;

const ItemImg = styled.img`
  height: 200px;
`;
const Title = styled.p``;
const Price = styled.p``;
const Total = styled.p`
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: xx-large;
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

const Cart = () => {
  const { cart } = useSelector((state) => state.productData);
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const deleteItem = (id)=>{
    dispatch(deleteCart(id))
    console.log("clicked")
  }
   
 

  useEffect(() => {
    dispatch(GetDataFromCart());
    
  }, [deleteItem]);
  return (
    <>
    <Navbar />
      <Container>
        
        <Right>
          {cart.map((e) => (
            <CartBox  key={e.id}>
              <ItemImg src={e.image} />
              <Title>Title : {e.title}</Title>
              <Price>Price : {e.price}</Price>
              <Price>Quantity : {e.quantity}</Price>
              <Button onClick={()=>deleteItem(e.id)} variant="outlined">Remove Item</Button>
              <hr />
            </CartBox>
          ))}
        </Right>
        <Left>
        <Summary>
            <SummaryTitle>CART SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.reduce((a,b)=> a + b.quantity * b.price,0).toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 15</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.reduce((a,b)=> a + 5 + b.quantity * b.price,0).toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <CheckOutButton onClick={()=>{navigate(`/checkout`)}}>CHECKOUT NOW</CheckOutButton>
          </Summary>
        </Left>
      </Container>
    </>
  );
};

export default Cart;
