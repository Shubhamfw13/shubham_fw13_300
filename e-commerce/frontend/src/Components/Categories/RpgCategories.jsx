import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { GetDataFromCart, GetRpgData } from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  background-color: #0a1d32;
  color: white;
  background: linear-gradient(rgba(1, 0, 0, 0.822), rgba(255, 255, 255, 0.244)),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
  height: auto;
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
    color: #ebebeb;
  }
  background: linear-gradient(rgba(16, 12, 12, 0.822), rgba(0, 0, 0, 0.244)),
    url("https://c4.wallpaperflare.com/wallpaper/806/992/905/digital-digital-art-artwork-cube-lights-hd-wallpaper-preview.jpg")
      center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  font-family: system-ui;
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

const RpgCategories = () => {
  const { RPG } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetRpgData());
    dispatch(GetDataFromCart());
  }, []);

  return (
    <>
      <Container>
        <Navbar />
        <Title>RPG</Title>
        <FilterContainer>
          {/* <Filter>
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
          </Filter> */}
        </FilterContainer>
        <ItemContainer>
          {RPG.map((e) => (
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
    </>
  );
};

export default RpgCategories;
