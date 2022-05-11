import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { GetMenData } from "../../Redux/Products/action";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  padding: auto;
  grid-gap: 50px;
  grid-template-columns: 300px 300px 300px;
  margin-top: 50px;
  background-color: #3e3c3e;
`;
const ItemBox = styled.div`
  
  height: 500px;
  background-color: #82eec5;
`;
const ItemImage = styled.img`
  height: 300px;
  width: 100%;
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
const MenCategories = () => {
  const { men } = useSelector((state) => state.productData);
  console.log(men);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetMenData());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {men.map((e) => (
          <ItemBox key={e.id} onClick={()=>{navigate(`/menproductdetails/${e.id}`)}}>
            <ItemImage src={e.image} alt="" />
            <Title>{e.title}</Title>
            <Price>{e.price}</Price>
            <Rating>{e.rating.rate}</Rating>
            <Category>{e.category}</Category>
          </ItemBox>
        ))}
      </Container>
      ;
    </>
  );
};

export default MenCategories;
