import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const InputBox = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menu= styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const navigate = useNavigate()
  const {cart} = useSelector((state)=> state.productData)

  const [len,setLen] = useState(0)

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
            <Logo onClick={()=>{navigate("/")}} >E-Commerce</Logo>
          </Center>
          <Right>
            <Menu>Register</Menu>
            <Menu>Sign-In</Menu>
            <Menu onClick={()=>{navigate("/cart")}}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon/>
              </Badge>
            </Menu>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
