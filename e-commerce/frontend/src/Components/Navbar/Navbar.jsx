import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lang = styled.span`
  font-size: 14;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  padding: 4px;
`;

const InputBox = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center ;
  justify-content: flex-end;
`;
const Menu = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 23px;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Lang>EN</Lang>
            <SearchContainer>
              <InputBox />
              <SearchIcon style={{color:"blue",fontSize:15}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>E-Commerce</Logo>
          </Center>
          <Right>
            <Menu>Register</Menu>
            <Menu>Sign-In</Menu>
            <Menu>
              <Badge badgeContent={2} color="primary" >
                <ShoppingCartIcon />
              </Badge>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
