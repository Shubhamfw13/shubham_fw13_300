import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { GetWomenSingleData,SentToCart} from "../../Redux/Products/action";
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
const WomenProductDetails = () => {
const {womenSingleData} = useSelector((state)=>state.productData)
let rate = womenSingleData.rating
console.log(rate)
const [data,setData] = useState({})

const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
dispatch(GetWomenSingleData(id))
setData({...womenSingleData})
},[])

const handleAddToCart = ()=>{
  dispatch(SentToCart(womenSingleData))
}


  return (
    <>
      <Navbar />
      <Container>
        <DetailBox key={womenSingleData.id}>
          <ProdImg src={womenSingleData.image}/>  
          <Title>Title : {womenSingleData.title}</Title>
          <Price>Price : {womenSingleData.price}</Price>
          <Rating>Rating :  </Rating>
          <Category>Category : {womenSingleData.category}</Category>
          <Description>Description : {womenSingleData.description}</Description>
          <Stack spacing={2} direction="row">
          <Button onClick={handleAddToCart} variant="contained">Add To Cart</Button>
          <Button variant="contained">Remove From Cart</Button>
          </Stack>
        </DetailBox>
      </Container>
    </>
  );
};

export default WomenProductDetails;
