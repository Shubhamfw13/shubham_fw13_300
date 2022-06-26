import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  height: 1000px;
  justify-content: space-between;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 800px 800px;
  background-size: cover;
  align-items: center;
  justify-content: center;
  ${mobile({ gridTemplateColumns: "250px" })}
`;
const Action = styled.div`
  text-align: center;
  height: 500px;
  padding: 10px 20px;
  transform: translateY(5px);
  background: linear-gradient(rgba(1, 0, 0, 0.066), #ffffff21),
    url("https://c4.wallpaperflare.com/wallpaper/96/92/869/game-games-2014-best-wallpaper-preview.jpg")
      center;
  &:hover {
    background-color: #e9f5f5;
    border-radius: 10px;
    transform: scale(1);
    transition: all 0.1s ease;
    color: #f0f0f0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  flex: 1;
`;
const Rpg = styled.div`
  text-align: center;
  height: 500px;
  padding: 10px 20px;
  transform: translateY(5px);
  background: linear-gradient(rgba(255, 255, 255, 0.066), #0401082b),
    url("https://thegeek.games/wp-content/uploads/2021/05/the-geek-Blizzard-1.jpg")
      center;
  &:hover {
    background-color: #e9f5f5;
    border-radius: 10px;
    transform: scale(1);
    transition: all 0.1s ease;
    color: #f0f0f0;
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
const Categ = styled.h1`
  font-family: "Carter One", cursive;
  color: white;
`;

export const Categories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    let timer = setInterval(() => {
      console.log("Printing " + count++);
    }, 10);
    return () => {
      clearInterval(timer);
      console.log("unmount");
    };
  }, []);

  return (
    <Container>
      <Action
        onClick={() => {
          navigate("/actioncategories");
        }}
      >
        {/* <Poster src="" /> */}
        <Categ>ACTION</Categ>
      </Action>
      <Rpg
        onClick={() => {
          navigate("/rpgcategories");
        }}
      >
        {/* <Poster src="https://thegeek.games/wp-content/uploads/2021/05/the-geek-Blizzard-1.jpg" /> */}
        <Categ>RPG</Categ>
      </Rpg>
    </Container>
  );
};
