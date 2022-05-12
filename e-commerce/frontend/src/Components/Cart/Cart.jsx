import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { GetDataFromCart } from "../../Redux/Products/action";
import styled from "styled-components";

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

const Cart = () => {
  const { cart } = useSelector((state) => state.productData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataFromCart());
  }, []);
  return (
    <>
    <Navbar />
      <Container>
        
        <Right>
          {cart.map((e) => (
            <CartBox>
              <ItemImg src={e.image} />
              <Title>Title : {e.title}</Title>
              <Price>Price : {e.price}</Price>
              <hr />
            </CartBox>
          ))}
        </Right>
        <Left>
          <Total>Total</Total>
          <hr />
        </Left>
      </Container>
    </>
  );
};

export default Cart;
