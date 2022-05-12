import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import {GetMenSingleData,SentToCart} from "../../Redux/Products/action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Container = styled.div``;
const DetailBox = styled.div`
margin-top: 50px;
`;
const ProdImg = styled.img`
height: 600px;
width: 40%;
`;
const Title = styled.p`
  /* display: block; */
`;
const Price = styled.p`
  /* display: block; */
`;
const Rating = styled.p`
  /* display: block; */
`;
const Category = styled.p`
  /* display: block; */
`;
const Description = styled.p`
  /* display: block; */
`;
const AddCart = styled.button`
`
const MenProductDetails = () => {
const {menSingleData} = useSelector((state)=>state.productData)
const [ data, setData] = useState({})
const {id} = useParams()
const dispatch = useDispatch()


useEffect(()=>{
dispatch(GetMenSingleData(id))
setData({...menSingleData})
},[])

const handleAddToCart=()=>{
  console.log(menSingleData,"de")
  dispatch(SentToCart(menSingleData))
}

  return (
    <>
      <Navbar />
      <Container>
        <DetailBox>
          <ProdImg src={menSingleData.image}/>  
          <Title>Title : {menSingleData.title}</Title>
          <Price>Price : {menSingleData.price}</Price>
          <Rating>Rating : </Rating>
          <Category>Category : {menSingleData.category}</Category>
          <Description>Description : {menSingleData.description}</Description>
          <Stack spacing={2} direction="row">
          <Button onClick={handleAddToCart} variant="contained">Add To Cart</Button>
          <Button variant="contained">Remove From Cart</Button>
          </Stack>
        </DetailBox>
      </Container>
    </>
  );
};

export default MenProductDetails;
