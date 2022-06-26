import Navbar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Categories } from "../Categories/Categories";


const Container = styled.div`
  background: linear-gradient(
      rgba(1, 0, 0, 0.822),
      rgba(255, 255, 255, 0.244)
    ),
    url("https://images.hdqwalls.com/wallpapers/video-games-collage-wide.jpg")
      center;
    
`
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
