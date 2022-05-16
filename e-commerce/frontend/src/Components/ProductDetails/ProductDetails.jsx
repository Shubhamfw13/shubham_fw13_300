import React, { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../../Responsive/responsive";
import  {GetSingleData}  from "../../Redux/Products/action";

const Container = styled.div`
background-image: "";
background-color: #0a1d32;
background: linear-gradient(
      rgba(1, 0, 0, 0.822),
      rgba(255, 255, 255, 0.244)
    ),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
color: white;
border: 5px solid #0a1d32;;
`;

const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const ImgsContainer = styled.div`
  display: grid;
  margin-left: 2.5%;
  grid-gap: 2px;
  margin-bottom: 30px;
  grid-template-columns: 480px 480px 480px 480px;
`;

const Image = styled.img`
  width: 90%;
  height: 68vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Banner = styled.img`
  width: 100%;
  height: 30vh;
  margin-top: 5px;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Images = styled.img`
  &:hover {
    transform: scale(1.1);
    transition: all 0.9s ease;
    border-radius: 15px;
    cursor: pointer;
  }
  height: 280px;
  z-index: 2;
  /* object-fit: cover; */
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Category = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const ProductDetails = () => {
  const { singledata } = useSelector((state) => state.productData);

  //   const cart = useSelector((state)=>state.productData.cart)

  const { id } = useParams();
  const dispatch = useDispatch();

  //   const singledata = Action.find((p) => p.id == id);

  //   const isInCart = cart.find((p)=>p.id==id)

  useEffect(() => {
    dispatch(GetSingleData(id));
    //   dispatch(GetDataFromCart())
  }, []);

  //   const handleButtons = (type)=>{
  //     if(type == "+" ){
  //       if(isInCart){
  //         dispatch(UpdateCart({...singledata, quantity: isInCart.quantity + 1}));
  //       } else{
  //         dispatch(SentToCart({...singledata, quantity: 1}));
  //       }
  //     } else if(type == "-"){
  //       if(isInCart && isInCart.quantity > 1){
  //         dispatch(UpdateCart({...singledata, quantity: isInCart.quantity - 1}));
  //       } else {
  //         dispatch(deleteCart(id))
  //       }

  //     }
  //     dispatch(GetDataFromCart())
  //   }

  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <ImgContainer>
            <Image src={singledata.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{singledata.title}</Title>
            <Category>Category: {singledata.categories}</Category>
            <Desc>{singledata.description}</Desc>
            <Price>₹ {singledata.price}</Price>
            {/* <FilterContainer> */}
              {/* <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter> */}
              {/* <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter> */}
            {/* </FilterContainer> */}
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>0</Amount>
                <Add />
              </AmountContainer>
              <Button>Add To Cart</Button>
            </AddContainer>
            <Banner src={singledata.strip} />
          </InfoContainer>
        </Wrapper>
        <ImgsContainer>
          <Images src={singledata.pos1} />
          <Images src={singledata.pos2} />
          <Images src={singledata.pos3} />
          <Images src={singledata.pos4} />
        </ImgsContainer>
      </Container>
    </>
  );
};

export default ProductDetails;
