import Navbar from "../Navbar/Navbar";
import React from "react";
import styled from "styled-components";
import { Categories } from "../Categories/Categories";
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
