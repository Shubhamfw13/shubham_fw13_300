import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import {GetMenSingleData } from "../../Redux/Products/action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
const MenProductDetails = () => {
const {menSingleData} = useSelector((state)=>state.productData)
const {id} = useParams()
const dispatch = useDispatch()


useEffect(()=>{
dispatch(GetMenSingleData(id))
},[])

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
        </DetailBox>
      </Container>
    </>
  );
};

export default MenProductDetails;
