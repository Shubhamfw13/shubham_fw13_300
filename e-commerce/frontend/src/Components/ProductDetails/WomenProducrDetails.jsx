import React, { useEffect} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { GetWomenSingleData} from "../../Redux/Products/action";
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
const WomenProductDetails = () => {
const {womenSingleData} = useSelector((state)=>state.productData)
console.log(womenSingleData)
   
const {id} = useParams()
const dispatch = useDispatch()




useEffect(()=>{
dispatch(GetWomenSingleData(id))
},[])

  return (
    <>
      <Navbar />
      <Container>
        <DetailBox key={womenSingleData.id}>
          <ProdImg src={womenSingleData.image}/>  
          <Title>Title : {womenSingleData.title}</Title>
          <Price>Price : {womenSingleData.price}</Price>
          <Rating>Rating : </Rating>
          <Category>Category : {womenSingleData.category}</Category>
          <Description>Description : {womenSingleData.description}</Description>
        </DetailBox>
      </Container>
    </>
  );
};

export default WomenProductDetails;
