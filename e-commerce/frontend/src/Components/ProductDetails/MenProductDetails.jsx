// import React, { useEffect, useState } from "react";
// import { Add, Remove } from "@mui/icons-material";
// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar";
// import { deleteCart, GetDataFromCart, GetMenData, GetMenSingleData, SentToCart, UpdateCart } from "../../Redux/Products/action";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { mobile } from "../../Responsive/responsive";

// const Container = styled.div`

// `;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ padding: "10px", flexDirection: "column" })}
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Category = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;
// const MenProductDetails = () => {
//   const mens = useSelector((state)=>state.productData.men)
//   const cart = useSelector((state)=>state.productData.cart)
//   const [data, setData] = useState({});
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const menSingleData = mens.find((p)=>p.id==id)
//   const isInCart = cart.find((p)=>p.id==id)

//   useEffect(() => {
//     dispatch(GetMenSingleData(id));
//     if(mens.length == 0){
//       dispatch(GetMenData())
//       dispatch(GetDataFromCart())
//     }
//   }, []);


//   const handleButtons = (type)=>{
//     if(type == "+" ){
//       if(isInCart){
//         dispatch(UpdateCart({...menSingleData, quantity: isInCart.quantity + 1}));
//       } else{
//         dispatch(SentToCart({...menSingleData, quantity: 1}));
//       }
//     } else if(type == "-"){
//       if(isInCart && isInCart.quantity > 1){
//         dispatch(UpdateCart({...menSingleData, quantity: isInCart.quantity - 1}));
//       } else {
//         dispatch(deleteCart(id))
//       }

//     }
//     dispatch(GetDataFromCart())
//   }

//   return (
//     <>{
//       menSingleData &&
    
//       <Container>
//         <Navbar />
//         <Wrapper>
//           <ImgContainer>
//             <Image src={menSingleData.image} />
//           </ImgContainer>
//           <InfoContainer>
//             <Title>{menSingleData.title}</Title>
//             <Category>Category: {menSingleData.category}</Category>
//             <Desc>{menSingleData.description}</Desc>
//             <Price>$ {menSingleData.price}</Price>
//             <FilterContainer>
//               <Filter>
//                 <FilterTitle>Color</FilterTitle>
//                 <FilterColor color="black" />
//                 <FilterColor color="darkblue" />
//                 <FilterColor color="gray" />
//               </Filter>
//               <Filter>
//                 <FilterTitle>Size</FilterTitle>
//                 <FilterSize>
//                   <FilterSizeOption>XS</FilterSizeOption>
//                   <FilterSizeOption>S</FilterSizeOption>
//                   <FilterSizeOption>M</FilterSizeOption>
//                   <FilterSizeOption>L</FilterSizeOption>
//                   <FilterSizeOption>XL</FilterSizeOption>
//                 </FilterSize>
//               </Filter>
//             </FilterContainer>
//             <AddContainer>
//               <AmountContainer>
//                 <Remove onClick={()=>handleButtons("-")} />
//                 <Amount>{isInCart ? isInCart.quantity : 1}</Amount>
//                 <Add onClick={()=>handleButtons("+")} />
//               </AmountContainer>
//               <Button  onClick={()=>!isInCart && handleButtons("+")}>{isInCart ? "Already added" : "ADD TO CART"}</Button>
//             </AddContainer>
//           </InfoContainer>
//         </Wrapper>
//       </Container> 
//       }
//     </>
//   );
// };

// export default MenProductDetails;
