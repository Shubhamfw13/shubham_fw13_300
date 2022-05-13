import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  padding: 10px 20px;
  margin-top: 50px;
  justify-content: space-between;
  display: flex;
`;
const Category = styled.div`
  height: 500px;
  padding: 10px 20px;
  transform: translateY(5px);
  &:hover {
    background-color: #e9f5f5;
    border-radius: 10px;
    transform: scale(1);
    transition: all 0.1s ease;
    color: #0a688b;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  flex: 1;
`;
const Poster = styled.img`
  height: 80%;
  width: 100%;
  &:hover {
    transform: scale(1);
    transition: all 0.1s ease;
  }
`;
const Categ = styled.h1``;

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Category
        onClick={() => {
          navigate("/mencategories");
        }}
      >
        <Poster src="https://media.gq-magazine.co.uk/photos/5d139b4e2881ccd4040a86d5/1:1/w_1170,h_1170,c_limit/tom-hardy-legend-GQ-01May15_pr_b.jpg" />
        <Categ>Men</Categ>
      </Category>
      <Category
        onClick={() => {
          navigate("/womencategories");
        }}
      >
        <Poster src="https://i2-prod.birminghammail.co.uk/incoming/article11389750.ece/ALTERNATES/s1200b/JS91109879.jpg" />
        <Categ>Women</Categ>
      </Category>
    </Container>
  );
};
