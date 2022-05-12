import Navbar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Categories } from "../Categories/Categories";
import { useDispatch } from "react-redux";
import { GetDataFromCart } from "../../Redux/Products/action";
const Container = styled.div`
  align-items: center;
  
`;
export const Home = () => {
  
  return (
    <>
      <Container>
        <Navbar />
        <Categories />
      </Container>
    </>
  );
};
