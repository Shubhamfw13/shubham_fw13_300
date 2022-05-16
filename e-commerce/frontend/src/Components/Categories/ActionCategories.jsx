import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { GetActionData, GetDataFromCart } from "../../Redux/Products/action";
import { useNavigate } from "react-router-dom";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
background-color: #0a1d32;
color: white;
background: linear-gradient(
      rgba(1, 0, 0, 0.822),
      rgba(255, 255, 255, 0.244)
    ),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
height: 1100px;
border: 5px solid #0a1d32;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 200px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Info = styled.div``;

const ItemContainer = styled.div`
  margin-left: 20%;
  display: grid;
  align-items: center;
  text-align: center;
  grid-gap: 20px;
  grid-template-columns: 300px 300px 300px;
`;

const Item = styled.div`
  margin: 5px;
  transform: translateY(-5px);
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1);
    transition: all 0.1s ease;
    color: #0a688b;
  }
  background-color: #0a688b;
  border-radius: 10px;
  color: #e9f5f5;
  margin-top: 40px;
  position: relative;
`;
const Image = styled.img`
  &:hover {
    transform: scale(1.2);
    transition: all 0.9s ease;
    border-radius: 15px;
    cursor: pointer;
  }
  height: 280px;
  z-index: 2;
`;
const ProductTitle = styled.p`
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

const ActionCategories = () => {
  const { Action } = useSelector((state) => state.productData);

  const dispatch = useDispatch()

  const navigate = useNavigate();
  useEffect(()=> {
    dispatch(GetDataFromCart())
    dispatch(GetActionData())
  },[])
  return (
    <>
      <Container>
        <Navbar />
        <Title>ACTION</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option default>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option default>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option default>Sort</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ItemContainer>
        {Action.map((e) => (
          <Item
            key={e._id}
            onClick={() => {
              navigate(`/productdetails/${e._id}`);
            }}
          >
            <Image src={e.image} />
            <Info>
              <ProductTitle>Title: {e.title}</ProductTitle>
              <Category>Category: {e.categories}</Category>
              <Price>Price: {e.price}</Price>
              <Rating>Rating: {e.rating}</Rating>
            </Info>
          </Item>
        ))}
      </ItemContainer>
      </Container>
     
      ;
    </>
  );
};

export default ActionCategories;
