import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { GetDataFromCart } from "../../Redux/Products/action";
import styled from "styled-components";

const Container = styled.div`
margin-top: 50px ;
`;
const CartBox = styled.div`

`
const ItemImg= styled.img`

` 
const Title = styled.p`
  
`
const Price = styled.p`

`


const Cart = () => {
  const { cart } = useSelector((state) => state.productData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataFromCart());
  }, []);
  return (
    <>
      <Navbar />

      {/* {cart.map((e)=>{ */}
      {/* //  return <h1>{elem.title}</h1> */}
      <Container>
        {cart.map((e)=>(
          <CartBox>
            <ItemImg src={e.image} />
            <Title>Title : {e.title}</Title>
            <Price>Price : {e.price}</Price>
          </CartBox>
        ))}
      </Container>
      {/* // })} */}
    </>
  );
};

export default Cart;
