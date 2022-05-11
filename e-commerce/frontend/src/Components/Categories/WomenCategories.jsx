import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { GetWomenData } from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";

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
const UtilityBar = styled.div`
  margin-top: 30px;
  height: 100px;
  background-color: lightcoral;
`;

const WomenCategories = () => {
  const { women } = useSelector((state) => state.productData);
  console.log(women);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetWomenData());
  }, []);

  return (
    <>
      <Navbar />
      <UtilityBar></UtilityBar>
      <Container>
        {women.map((e) => (
          <ItemBox>
            <ItemImage src={e.image} alt="" />
            <Title>{e.title}</Title>
            <Price>{e.price}</Price>
            <Rating>{e.rating.rate}</Rating>
            <Category>{e.category}</Category>
          </ItemBox>
        ))}
      </Container>
    </>
  );
};

export default WomenCategories;
